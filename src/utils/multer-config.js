/* const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (request, file, cb) {
      cb(null, '../backend-portfolio/src/img')},
    filename: function (request, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)}
  });
  
const upload = multer({ storage: storage });

module.exports = upload */

const multer = require('multer');

// Configura multer con memoryStorage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Exporta la instancia de multer configurada
module.exports = upload;