const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (request, file, cb) {
      cb(null, '../backend-portfolio/src/img')},
    filename: function (request, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)}
  });
  
const upload = multer({ storage: storage });

module.exports = upload