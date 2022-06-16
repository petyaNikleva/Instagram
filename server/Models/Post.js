const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    _author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    description: String,
    image: String,
    likes: [],
    comments: []
})

module.exports = mongoose.model("Post", postSchema)

