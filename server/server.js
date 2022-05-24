const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads'); // it save image in folder which is outside the project
        //cb(null, 'uploads'); //-> it will save the image in the project directory. But will reload the page due to Live server hot reload
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: fileStorageEngine
})

app.get(`/upload/:pictureId`, (req, res) => {
    const options = {
        root: path.join(__dirname, '../../uploads')
    };

    const fileName = req.params.pictureId;
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', fileName);
            //res.json(req.file);
        }
    });
});


app.post('/upload', upload.single('image'), (req, res) => {
    res.json(req.file);
});


const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}.`))