const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { initDatbase } = require('./config/dataBaseConfig');
const routes = require('./routes');

const app = express();
app.use(routes);
app.use(express.urlencoded({extended: false}));
app.use(cors());

//--------- Multer starts -------/

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads'); // it save image in folder which is outside the project
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

// ---- Multer ends-----///
//app.use(express.json());

initDatbase()
.then(() => {
    console.log("MongoDB database connection established successfully");
    const port = 3000;
    app.listen(port, () => console.log(`Server is running on port ${port}.`))
    
}).catch(err => {
    console.log('Cannot connect to the database', err);
});

