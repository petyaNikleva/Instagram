const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads'); // it save image in filder which is outside the project
        //cb(null, 'uploads'); -> it will save the image in the project directory. But will reload the page due to Live server hot reload
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: fileStorageEngine 
})


app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);

   // console.log(res);
    res.json(req.file);
});

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}.`))