const upload = require('../utils/multer-config')

const getAll = (router, model) => {
  router.get('/', async (request, response, next) => {
    try{
      const requestResult = await model.find({})
      response.json(requestResult)
    } catch (error){
      next(error)
    };
  });  
};

const getOne = (router, model) => {
  router.get('/:id', async (request, response, next) => {
    try{
      const requestResult = await model.findById(request.params.id)
        response.json(requestResult)  
    } 
    catch(error){next(error)}; 
  }); 
};


const getImage = (router, admin) => {
  router.get('/:imageName', async (request, response, next) => {
    try {
      const imageName = request.params.imageName;

      const storage = admin.storage();
      const bucket = storage.bucket();
      const file = bucket.file(`images/${imageName}`);

      const [signedUrl] = await file.getSignedUrl({
        action: 'read',
        expires: '01-01-2100'
      });

      response.redirect(signedUrl);
    } catch (error) {
      next(error)
    };
  });
};


const post = (router, model) => {
  router.post('/', async (request, response, next) => {
    try {
      const info = request.body

      const data = new model(info);
  
      const savedData = await data.save();
  
      const savedAndFormattedData = savedData.toJSON();
  
      response.json(savedAndFormattedData);
      } catch (error) {
        next(error)
      };
  });
};

const postWithImage = (router, model, admin) => {
  router.post('/', upload.single('image'), async (request, response, next) => {
    try {
      const data = new model(request.body);

      const bucket = admin.storage().bucket();
      const fileName = `${Date.now()}_${request.file.originalname}`;
      const file = bucket.file(`images/${fileName}`);
      const stream = file.createWriteStream({
      metadata: {
          contentType: request.file.mimetype,
        },
      });

      stream.on('error', (error) => {
        next(error);
      });

      stream.on('finish', async () => {
        data.image = fileName;
        const savedData = await data.save();
        const savedAndFormattedData = savedData.toJSON();
        response.json(savedAndFormattedData);
      });

      stream.end(request.file.buffer);
    } catch (error) {
      next(error)
    };
  });
};

const deleteOne = (router, model) => {
  router.delete('/:id', async (request, response, next) => {
  try{
    const data = await model.findByIdAndRemove(request.params.id)
    response.status(204).end
  } catch(error){next(error)
    };
  });
};


const deleteOneWithImage = (router, model, admin) => {
  router.delete('/:id', async (request, response, next) => {
    try {
      const data = await model.findById(request.params.id);
      if (!data) {
        return response.status(404).json({ error: 'Documento no encontrado' });
      }
      const imageName = data.image
      const file = admin.storage().bucket().file(`images/${imageName}`);
      await file.delete();
      await model.findByIdAndDelete(data.id);

      response.status(204).end();
    } catch (error) {
      next(error);
    }
  });
};


const put = (router, model) =>{
  router.put('/:id', async (request, response, next) => {
  try{
    const updateData = request.body
  
    const data = await model.findByIdAndUpdate(request.params.id, updateData, { new: true })
    response.json(data)
  } catch(error){next(error)}
  })
}


const putWhiteImage = (router, model, admin) =>{
  router.put('/:id', upload.single('image'), async (request, response, next) => {
 try{
  const actualData = await model.findById(request.params.id);

  const updateData = request.body
  

  const imageName = actualData.image
  const file = admin.storage().bucket().file(`images/${imageName}`);
  await file.delete();

  const bucket = admin.storage().bucket();
  const fileName = `${Date.now()}_${request.file.originalname}`;
  const newFile = bucket.file(`images/${fileName}`);
  const stream = newFile.createWriteStream({
  metadata: {
      contentType: request.file.mimetype,
    },
  });

  stream.on('error', (error) => {
    next(error);
  });

  stream.on('finish', async () => {
    const data = await model.findByIdAndUpdate(request.params.id,{ ...updateData, image: fileName }, { new: true })
    const savedData = await data.save();
    const savedAndFormattedData = savedData.toJSON();
    response.json(savedAndFormattedData);
  });

  stream.end(request.file.buffer);

  }catch(error) {
    next(error)
 }
  })
}

module.exports = 
{getAll,
getOne,
getImage,
post,
deleteOne,
put,
putWhiteImage,
postWithImage,
deleteOneWithImage}