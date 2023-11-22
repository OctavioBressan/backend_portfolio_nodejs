const mongoose = require('mongoose')

const descriptionSchema = new mongoose.Schema({
    description: {
      type: String,
      minlength: 30,
      required: true
    }
  });
  
descriptionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Description', descriptionSchema);