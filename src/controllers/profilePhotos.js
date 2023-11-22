const profilePhotosRouter = require('express').Router()
const ProfilePhoto = require('../models/profilePhoto')
const dataFunctions = require('../utils/dataFunctions')


dataFunctions.getAll(profilePhotosRouter, ProfilePhoto)

dataFunctions.getOne(profilePhotosRouter, ProfilePhoto)

dataFunctions.postWithImage(profilePhotosRouter, ProfilePhoto)

dataFunctions.put(profilePhotosRouter, ProfilePhoto)

dataFunctions.deleteOne(profilePhotosRouter, ProfilePhoto)


module.exports = profilePhotosRouter