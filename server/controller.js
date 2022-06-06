const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('./Models/User');

const jsonParser = bodyParser.json()
//const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/users", async (req, res, next) => {
    try {
        const allUsers = await User.find({});
        res.send(allUsers);
    } catch(error) {
        next(error);
    }  
});

router.post('/login', jsonParser, async (req, res, next) => {
    const { username, password } = req.body;
    //console.log(req.body)
    try {
        const user = await User.findOne({email: req.body.email}).exec();
        if(!user) {
            throw new Error(`${username} Invalid username or password.`)
        }
        //console.log(user);
        res.send(user)
    } catch (error) {
        next(error)
    }
});


// router.get('/getByEmail', jsonParser, async (req, res, next) => {
//     try {
//         const user = await User.findOne({email: req.body.email}).exec();
//         console.log(user);
//         res.send(user)
//     } catch (error) {
//         next(error);
//     }
// });


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


module.exports = router;




