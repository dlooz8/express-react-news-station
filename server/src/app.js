const session = require("express-session");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bookmarksRouter = require("./routes/bookmarks.routes");
const commentsRouter = require("./routes/comments.routes");
const authRouter = require("./routes/auth.routes");
const newsRouter = require("./routes/news.routes");
const dotenv = require("dotenv").config();

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

app.use("/auth", authRouter);
app.use("/news", newsRouter);
app.use("/bookmarks", bookmarksRouter);
app.use("/comments", commentsRouter);

module.exports = app;
