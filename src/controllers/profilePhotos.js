const profilePhotosRouter = require('express').Router()
const ProfilePhoto = require('../models/profilePhoto')
const dataFunctions = require('../utils/dataFunctions')
const admin = require('../utils/firebase')

dataFunctions.getAll(profilePhotosRouter, ProfilePhoto)

dataFunctions.getOne(profilePhotosRouter, ProfilePhoto)

dataFunctions.postWithImage(profilePhotosRouter, ProfilePhoto, admin)

dataFunctions.putWhiteImage(profilePhotosRouter, ProfilePhoto, admin)

dataFunctions.deleteOneWithImage(profilePhotosRouter, ProfilePhoto, admin)


module.exports = profilePhotosRouter