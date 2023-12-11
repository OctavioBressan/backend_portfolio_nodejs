const express = require('express');
const imagesRouter = express.Router();
const dataFunctions = require('../utils/dataFunctions')
const admin = require('../utils/firebase')

dataFunctions.getImage(imagesRouter, admin)


module.exports = imagesRouter;
