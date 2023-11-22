const educationsRouter = require('express').Router()
const Education = require('../models/education')
const dataFunctions = require('../utils/dataFunctions')

dataFunctions.getAll(educationsRouter, Education)

dataFunctions.getOne(educationsRouter, Education)

dataFunctions.postWithImage(educationsRouter, Education)

dataFunctions.put(educationsRouter, Education)

dataFunctions.deleteOneWithImage(educationsRouter, Education)

module.exports = educationsRouter