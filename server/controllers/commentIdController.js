const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Comment = require('../Models/Comment');

const jsonParser = bodyParser.json();
router.use(jsonParser);


router.put("/:commentId", async(req, res, next) => requestCallback(req, res, next, "updateComment"));
router.get("/:commentId", async(req, res, next) => requestCallback (req, res, next, "getComment")); 

async function requestCallback(req, res, next, command) {
    try {
        crudHandlers[command](req, res);
    } catch (error) {
        next(error);
    }
}

const crudHandlers = {

    "updateComment": async (req, res) => {
        await Comment.findByIdAndUpdate(req.params.commentId, req.body);
        const updatedComment = await Comment.findById(req.params.commentId);
        res.send(updatedComment);
    },
    "getComment": async (req, res) => {
        const comment = await Comment.findById(req.params.commentId);
        res.send(comment);
    },
   

}

module.exports = router;
