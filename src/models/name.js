const mongoose = require('mongoose')

const nameSchema = new mongoose.Schema({
  name:{
    type: String,
    minlength: 3,
    required: true
  }
  });
  


  nameSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
module.exports = mongoose.model('Name', nameSchema);