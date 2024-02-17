const express = require('express');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const feedRouter = require('./routes/feed.routes');
const authRouter = require('./routes/auth.routes');

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
    credentials: true
}));

app.use('/feed', feedRouter);
app.use('/auth', authRouter);

module.exports = app;