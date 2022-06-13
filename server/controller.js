const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('./Models/User');

const jsonParser = bodyParser.json();
router.use(jsonParser);

router.get("/users", async (req, res, next) => requestCallback(req, res, next, "allUsers"));
router.post("/login", async (req, res, next) => requestCallback(req, res, next, "loggedUser"));
router.get("/:userId", async(req, res, next) => requestCallback (req, res, next, "user"));
router.post("/createUser", async (req, res, next) => requestCallback (req, res, next, "newUser"));
router.put("/:userId", async(req, res, next) => requestCallback(req, res, next, "updateUser"))
router.delete('/:userId', async(req, res, next) => requestCallback(req, res, next, "deleteUser"));


async function requestCallback(req, res, next, command) {
    try {
        crudHandlers[command](req, res);
    } catch (error) {
        next(error);
    }
}

let crudHandlers = {
    "allUsers": async (req, res) => {
        const users = await User.find({});
        res.send(users);
    },
    "deleteUser": async (req, res) => {
        await User.findByIdAndDelete(req.params.userId);
        res.send('User deleted.');
    },
    "loggedUser": async (req, res, next) => {
        const { username, password } = req.body;
        const loggedUser = await User.findOne({ email: req.body.email }).exec();
        res.send(loggedUser)
    },
    "user": async (req, res) => {
        const user = await User.findById(req.params.userId);
        res.send(user);
    },
    "newUser": async (req, res) => {
        const newUser = await User.create(req.body);
        res.send(newUser);
    },
    "updateUser": async (req, res) => {
        await User.findByIdAndUpdate(req.params.userId, req.body);
        const updatedUser = await User.findById(req.params.userId);
        res.send(updatedUser);
    }
}

module.exports = router;



// router.get("/users", async (req, res, next) => {
//     try {
//         const allUsers = await User.find({});
//         res.send(allUsers);
//     } catch (error) {
//         next(error);
//     }
// });
 
// router.post('/login', async (req, res, next) => {
//     const { username, password } = req.body;
//     try {
//         const loggedUser = await User.findOne({ email: req.body.email }).exec();
//         // if (!user) {
//         //     throw new Error(`${username} Invalid username or password.`)
//         // }
//         res.send(loggedUser)
//     } catch (error) {
//         next(error);
//     }
// });
 
// router.get("/:userId", async (req, res, next) => {
//     try {
//         const user = await User.findById(req.params.userId);
//         res.send(user);
//     } catch (error) {
//         next(error);
//     }
// });

 
// router.post('/createUser', async (req, res, next) => {
//     try {
//         const newUser = await User.create(req.body);
//         res.send(newUser);
//     } catch (error) {
//         next(error);
//     }
// });

// router.put('/:userId', async (req, res, next) => {
//     try {
//         await User.findByIdAndUpdate(req.params.userId, req.body);
//         const updatedUser = await User.findById(req.params.userId);
//         res.send(updatedUser);
//     } catch (error) {
//         next(error);
//     }
// })

// router.delete('/:userId', async (req, res, next) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.userId);
//         res.send('User deleted.')
//     } catch(error) {
//         next(error);
//     }
// });
