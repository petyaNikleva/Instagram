const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: String,
    _authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now
      },
    replyTo:  {
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    },
})

const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment;