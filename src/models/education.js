const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
    name:{
      type: String,
      minlength: 5,
      required: true
    },
    start:{
        type: String,
        minlength: 5,
        required: true
    },
    end:{
        type: String,
        minlength: 5,
        required: true
    },
    description:{
        type: String,
        minlength: 30,
        required: true
    },
    image:{
      type: String,
      required: true
    }
  });
  
educationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Education', educationSchema);
