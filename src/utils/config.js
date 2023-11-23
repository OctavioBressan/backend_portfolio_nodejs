require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const IMAGES_URL = process.env.IMAGES_URL
const BACKEND_IMAGE_PATH = process.env.BACKEND_IMAGE_PATH

module.exports = {
  MONGODB_URI,
  PORT,
  IMAGES_URL,
  BACKEND_IMAGE_PATH
}