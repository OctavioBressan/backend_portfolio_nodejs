const admin = require('firebase-admin');
const serviceAccount = require('../../serviceAcount.json');
const config = require('./config');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: config.STORAGE_BUCKET,
});

module.exports = admin;