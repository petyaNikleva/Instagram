const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Post = require('../Models/Post');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.post("/createPost", async (req, res, next) => requestCallback (req, res, next, "newPost"));

async function requestCallback(req, res, next, command) {
    try {
        crudHandlers[command](req, res);
    } catch (error) {
        next(error);
    }
}

const crudHandlers = {
   
    "newPost": async (req, res) => {
        const newPost = await Post.create(req.body);
        res.send(newPost);
    }
}

module.exports = router;





