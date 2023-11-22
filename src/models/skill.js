const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
    name:{
      type: String,
      minlength: 3,
      required: true
    },
    image:{
      type: String,
      required: true
    }
  });
  
skillSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Skill', skillSchema);


