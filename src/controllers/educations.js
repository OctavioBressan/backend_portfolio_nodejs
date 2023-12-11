const educationsRouter = require('express').Router()
const Education = require('../models/education')
const dataFunctions = require('../utils/dataFunctions')
const admin = require('../utils/firebase')

dataFunctions.getAll(educationsRouter, Education)

dataFunctions.getOne(educationsRouter, Education)

dataFunctions.postWithImage(educationsRouter, Education, admin)

dataFunctions.putWhiteImage(educationsRouter, Education, admin)

dataFunctions.deleteOneWithImage(educationsRouter, Education, admin)

module.exports = educationsRouter