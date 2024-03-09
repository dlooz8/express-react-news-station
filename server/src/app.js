const express = require('express');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const authRouter = require('./routes/auth.routes');
const newsRouter = require('./routes/news.routes');
const bookmarksRouter = require('./routes/bookmarks.routes');

const app = express();
app.use(express.json());
app.use(morgan('tiny'))
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat', //env
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: false, // env
    // sameSite: 'none',
    httpOnly: true,
    }  
}))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

//

const Multer = require('multer');
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'dqzgyyab3',
    api_key: '726769892967862',
    api_secret: 'gAf-CP7RAz9O-SPTJ3QDja99StM',
});

const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

async function handleUpload(file) {
    const res = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return res;
  }

app.post("/upload", upload.single("my_file"), async (req, res) => {
    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = await handleUpload(dataURI);
        res.json(cldRes);
    } catch (error) {
        console.log(error);
        res.send({
        message: error.message,
        });
    }
});

//

app.use('/auth', authRouter);
app.use('/news', newsRouter);
app.use('/bookmarks', bookmarksRouter);

module.exports = app;