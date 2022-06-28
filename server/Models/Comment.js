const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    description: String,
    _authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date
    },
    reply:  {
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    },
})

const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment;