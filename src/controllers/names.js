const namesRouter = require('express').Router()
const Name = require('../models/name')
const dataFunctions = require('../utils/dataFunctions')

dataFunctions.getAll(namesRouter, Name)

dataFunctions.getOne(namesRouter, Name)

dataFunctions.post(namesRouter, Name)

dataFunctions.put(namesRouter, Name)

dataFunctions.deleteOne(namesRouter, Name)

module.exports = namesRouter