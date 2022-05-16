const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

//init app

const app = express();

//ejs


app.set('view engine', 'ejs');


app.use(express.static('../server/public'));

//public folder

//app.get('/', (req, res) => res.render('index'));

app.get('/upload', (req, res) => {
    res.render('upload');
})

const port = 3000;

app.listen(port, () => console.log(`Server  started on port ${port}.`))