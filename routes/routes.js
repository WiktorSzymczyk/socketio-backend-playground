const express = require('express');
const router = express.Router()

const {createBlogPost} = require('../controllers/userController')

router.post('/', createBlogPost)

module.exports = router