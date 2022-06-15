const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    author: String,
    description: String,
    image: String,
    likes: Number,
    comments: [{}]
})

module.exports = mongoose.model("Post", postSchema)