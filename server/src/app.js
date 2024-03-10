const session = require('express-session');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bookmarksRouter = require('./routes/bookmarks.routes');
const authRouter = require('./routes/auth.routes');
const newsRouter = require('./routes/news.routes');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());
app.use(morgan('tiny'))
app.set('trust proxy', 1)
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: false, // env
    httpOnly: true,
    }  
}))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));



app.use('/auth', authRouter);
app.use('/news', newsRouter);
app.use('/bookmarks', bookmarksRouter);

module.exports = app;