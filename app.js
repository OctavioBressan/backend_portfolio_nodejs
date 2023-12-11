const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('./src/utils/mongoose')
const namesRouter = require('./src/controllers/names')
const profilePhotosRouter = require('./src/controllers/profilePhotos')
const descriptionsRouter = require('./src/controllers/descriptions')
const skillsRouter = require('./src/controllers/skills')
const educationsRouter = require('./src/controllers/educations')
const imagesRouter = require('./src/controllers/images')

const middleware = require('./src/utils/middleware')

mongoose.mongooseLogger();

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/descriptions', descriptionsRouter)
app.use('/api/names', namesRouter)
app.use('/api/skills', skillsRouter)
app.use('/api/profilePhotos', profilePhotosRouter)
app.use('/api/img', imagesRouter)
app.use('/api/educations', educationsRouter)
app.use('/api/img', express.static('img'))

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app