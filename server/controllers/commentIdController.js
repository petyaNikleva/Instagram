const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Comment = require('../Models/Comment');

const jsonParser = bodyParser.json();
router.use(jsonParser);


//router.put("/:postId", async(req, res, next) => requestCallback(req, res, next, "updatePost"));
router.get("/:commentId", async(req, res, next) => requestCallback (req, res, next, "getComment")); 

async function requestCallback(req, res, next, command) {
    try {
        crudHandlers[command](req, res);
    } catch (error) {
        next(error);
    }
}

const crudHandlers = {

    // "updatePost": async (req, res) => {
    //     await Post.findByIdAndUpdate(req.params.postId, req.body);
    //     const updatedPost = await Post.findById(req.params.postId);
    //     res.send(updatedPost);
    // },
    "getComment": async (req, res) => {
        const comment = await Comment.findById(req.params.commentId);
        res.send(comment);
    },
   

}

module.exports = router;
