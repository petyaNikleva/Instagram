const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads'); // it save image in filder which is outside the project
        //cb(null, 'uploads'); -> it will save the image in the project directory. But will reload the page due to Live server hot reload
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})


// app.get('/upload', (req, res) => {
//     res.render('upload');
// });

app.post('/upload', upload.single('image'), (req, res) => {
    res.status(201);
});

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}.`))