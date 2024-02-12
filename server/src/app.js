const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/users.routes');
const feedRouter = require('./routes/feed.routes');

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use('/users', userRouter);
app.use('/feed', feedRouter);

module.exports = app;