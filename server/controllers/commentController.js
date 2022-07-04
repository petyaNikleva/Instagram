const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Comment = require('../Models/Comment');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post("/createComment", async (req, res, next) => requestCallback (req, res, next, "newComment"));

async function requestCallback(req, res, next, command) {
    try {
        crudHandlers[command](req, res);
    } catch (error) {
        next(error);
    }
}

const crudHandlers = {
    "newComment": async (req, res) => {
        const newComment = await Comment.create(req.body);
        res.send(newComment);
    }

}

module.exports = router;





