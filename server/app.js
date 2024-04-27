const session = require("express-session");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.set("trust proxy", 1);
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            httpOnly: true,
        },
    })
);
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

app.use('/auth', require('./src/routes/auth.routes'));
app.use('/news', require('./src/routes/news.routes'));
app.use('/bookmarks', require('./src/routes/bookmarks.routes'));
app.use('/comments', require('./src/routes/comments.routes'));

const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server started on port http://localhost:${PORT} 🚀`);
});

module.exports = app;
