const session = require("express-session");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bookmarksRouter = require("./src/routes/bookmarks.routes");
const commentsRouter = require("./src/routes/comments.routes");
const authRouter = require("./src/routes/auth.routes");
const newsRouter = require("./src/routes/news.routes");

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

app.listen(process.env.SERVER_PORT, () => {
    console.log(`🚀 Server started on port http://localhost:${process.env.SERVER_PORT} 🚀`);
});

module.exports = app;
