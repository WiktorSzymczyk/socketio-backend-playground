const mongoose = require('mongoose')
require('dotenv').config()

const {MONGO_URI} = process.env

module.exports = mongoose.connect(MONGO_URI)
    .then(() => console.log('conn successfully'))
    .catch(err => console.log(err))