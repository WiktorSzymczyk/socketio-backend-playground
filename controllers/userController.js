const Blog = require('../models/userModel')

const createBlogPost = async(req, res) => {
    try {
        const {name, username, email, password} = req.body

        const newUser = await Blog.create({
            name,
            username,
            email,
            date: new Date(),
            password
        })
        res.json(newUser)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {createBlogPost}