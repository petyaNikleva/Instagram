const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Post = require('../Models/Post');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.get("/posts", async (req, res, next) => requestCallback(req, res, next, "allPosts"));
router.post("/createPost", async (req, res, next) => requestCallback (req, res, next, "newPost"));
router.put("/:postId", async(req, res, next) => requestCallback(req, res, next, "updatePost"));
router.get("/:postId", async(req, res, next) => requestCallback (req, res, next, "getPost")); 

async function requestCallback(req, res, next, command) {
    try {
        crudHandlers[command](req, res);
    } catch (error) {
        next(error);
    }
}

const crudHandlers = {

    "allPosts": async (req, res) => {
        let allPosts = await Post.find()
        res.send(allPosts);

    },
   
    "newPost": async (req, res) => {
        const newPost = await Post.create(req.body);
        res.send(newPost);
    },

    "updatePost": async (req, res) => {
        await Post.findByIdAndUpdate(req.params.postId, req.body);
        const updatedPost = await Post.findById(req.params.postId);
        res.send(updatedPost);
    },
    "getPost": async (req, res) => {
        console.log('hello from get one post')
        const post = await Post.findById(req.params.postId);
        res.send(post);
    },

}

module.exports = router;





