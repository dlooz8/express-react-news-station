const express = require('express');
const session = require('express-session');
const cors = require('cors');
const userRouter = require('./routes/users.routes');
const feedRouter = require('./routes/feed.routes');
const authRouter = require('./routes/auth.routes');

const app = express();
app.use(express.json());
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,  
}))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use('/users', userRouter);
app.use('/feed', feedRouter);
app.use('/auth', authRouter);

module.exports = app;