const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    description: String,
    image: String,
    _authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    likes: [],
    comments: []
})

const Post = mongoose.model("Post", postSchema)
module.exports = Post;
