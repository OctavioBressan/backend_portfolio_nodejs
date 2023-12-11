require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const STORAGE_BUCKET = process.env.STORAGE_BUCKET


module.exports = {
  MONGODB_URI,
  PORT,
  STORAGE_BUCKET
}