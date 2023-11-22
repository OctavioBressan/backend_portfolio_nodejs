const upload = require('../utils/multer-config')
const config = require('../utils/config')
const fs = require('fs');
const path = require('path')


const getAll = (router, model) => {
  router.get('/', async (request, response, next) => {
    try{
      const requestResult = await model.find({})
      response.json(requestResult)
    } catch (error){
      next(error)
    }
  });  
};

const getOne = (router, model) => {
  router.get('/:id', async (request, response, next) => {
    try{
      const requestResult = await model.findById(request.params.id)
        response.json(requestResult)  
    } 
    catch(error){next(error)} 
  })  
}

const getImage = (router) => {
  router.get('/:imageName', (request, response) => {
    const imageName = request.params.imageName;
    const imagePath = path.resolve(__dirname, '..', 'img', imageName);
    response.sendFile(imagePath);  
  });
}

const post = (router, model) => {
    router.post('/', async (request, response, next) => {
        try {
          const info = request.body

          const data = new model(info);
      
          const savedData = await data.save();
      
          const savedAndFormattedData = savedData.toJSON();
      
          response.json(savedAndFormattedData);
        } catch (error) {

          next(error);
        }
      });
}

const postWithImage = (router, model) => {
  router.post('/', upload.single('image'), async (request, response, next) => {
    try{
      const data = new model(request.body);

      data.image = `${config.IMAGES_URL}${request.file.filename}`

      const savedData = await data.save()

      const savedAndFormatterData = savedData.toJSON()

      response.json(savedAndFormatterData)
    } catch (error){next(error)}
});
}

const deleteOne = (router, model) => {
  router.delete('/:id', async (request, response, next) => {
  try{
    const data = await model.findByIdAndRemove(request.params.id)
    response.status(204).end
  } catch(error){next(error)}
})
}

const deleteOneWithImage = (router, model) => {
  router.delete('/:id', async (request, response, next) => {
    try {
      const data = await model.findById(request.params.id);
  
      const imagePath = `${config.BACKEND_IMAGE_PATH}${data.image.slice(30)}`;
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
  
      await model.findByIdAndDelete(data.id);
      response.status(204).end();
    } catch (error) {
      next(error);
    }
  });
}

const put = (router, model) =>{
  router.put('/:id', async (request, response, next) => {
  try{
    const updateData = request.body
  
    const data = await model.findByIdAndUpdate(request.params.id, updateData, { new: true })
    response.json(data)
  } catch(error){next(error)}
  })
}

module.exports = 
{getAll,
getOne,
getImage,
post,
deleteOne,
put,
postWithImage,
deleteOneWithImage}