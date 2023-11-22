const express = require('express');
const imagesRouter = express.Router();
const dataFunctions = require('../utils/dataFunctions')

dataFunctions.getImage(imagesRouter)


module.exports = imagesRouter;
