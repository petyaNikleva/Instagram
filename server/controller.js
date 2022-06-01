const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('./Models/User');

const jsonParser = bodyParser.json()
//const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/allUsers", async (req, res, next) => {
    try {
        const allUsers = await User.find({});
        res.send(allUsers);
    } catch(error) {
        next(error);
    }  
});

router.get("/:userId", async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        res.send(user);
    } catch(error) {
        next(error)
    }
});

router.post('/createUser', jsonParser, async (req, res, next) => {
    // console.log(req.body);
    try {
        const user = await User.create(req.body);
        res.send(user);
    } catch (error) {
        next(error)
    }
});

router.post('/')

module.exports = router;




