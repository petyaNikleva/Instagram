const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
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
    console.log(req.file)
    res.send('Image uploaded');
});

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}.`))