const descriptionsRouter = require('express').Router()
const Description = require('../models/description')
const dataFunctions = require('../utils/dataFunctions')


dataFunctions.getAll(descriptionsRouter, Description)

dataFunctions.getOne(descriptionsRouter, Description)

dataFunctions.post(descriptionsRouter, Description)
  
dataFunctions.put(descriptionsRouter, Description)

dataFunctions.deleteOne(descriptionsRouter, Description)  

module.exports = descriptionsRouter