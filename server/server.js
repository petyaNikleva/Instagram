const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

//init app
const app = express();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },

    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

//ejs
app.set('view engine', 'ejs');



//app.use(express.static('../server/public'));

//public folder

//app.get('/', (req, res) => res.render('index'));

app.get('/upload', (req, res) => {
    res.render('upload');
});

app.post('/upload', upload.single('image'), (req, res) => {
    res.send('Image uploaded');
});

const port = 3000;
app.listen(port, () => console.log(`Server  started on port ${port}.`))