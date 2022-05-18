
    

const express = require('express');
const multer = require('multer');
const path = require('path');

//import authService from "../services/authenticationService.js"

//import { storage } from '../middleware/configMulter.js';

const app = express();

const storage = multer.diskStorage({
    
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },

    filename: (req, file, cb) => {
        //console.log(file);
        //console.log(req.body);
        cb(null, Date.now() + path.extname(file.originalname))
        //cb(null, '123' + path.extname(file.originalname))

    }
})

const upload = multer({
    storage: storage
})


app.get('/upload', (req, res) => {
    res.render('upload');
});

app.post('/upload', upload.single('image'), (req, res) => {
    console.log(res)
    //console.log(res.file.filename); - it is undefined
    res.send('Image uploaded');
});

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}.`))