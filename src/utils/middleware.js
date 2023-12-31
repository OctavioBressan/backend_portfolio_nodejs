const logger = require('./logger')

const requestLogger = (request, response, next) => {
    logger.info('Method:', request.method)
    logger.info('Path:  ', request.path)
    logger.info('Body:  ', request.body)
    logger.info('---')
    next()
} 
  
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(400).json({ error: 'ID incorrecto' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  } else if (error.name === 'MulterError') {
    return response.status(400).json({ error: 'Error al subir la imagen' });
  } else {
    logger.error(error.message);
    next(error);
  }
};
 
module.exports = {
     requestLogger,
     unknownEndpoint,
     errorHandler
 }