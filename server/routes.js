const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('./Models/User');

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/allUsers", async (req, res) => {
    User.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

router.get("/:userId", async (req, res) => {
    User.findById(req.params.userId, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

router.post('/createUser', jsonParser, async (req, res) => {
    let body = req.body
    console.log(body);
    let user = User.create(req.body, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})

module.exports = router;
