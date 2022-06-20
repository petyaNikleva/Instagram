const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    description: String,
    image: String,
    _author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    likes: [],
    comments: []
})

module.exports = mongoose.model("Post", postSchema)

