const bookmarksService = require("../services/bookmarks.service");
const { validationResult } = require("express-validator");

const postCreateBookmark = async (req, res) => {
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(401).json({
                error: result.array(),
                message: "Авторизуйтесь для добавления новой закладки!" 
            });
        }
        const bookmark = await bookmarksService.postCreateBookmark(req);
        return res.status(200).json(bookmark);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getUserBookmarks = async (req, res) => {
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(401).json({
                error: result.array(),
                message: "Авторизуйтесь для получения закладок!"
            });
        }
        const bookmarks = await bookmarksService.getUserBookmarks(
            req.query.user_id
        );
        return res.status(200).json(bookmarks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteBookmark = async (req, res) => {
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(401).json({
                error: result.array(),
                message: "Авторизуйтесь для удаления закладок!"
            });
        }
        const news = await bookmarksService.deleteBookmark(req.query.id);
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteBookmarkUserId = async (req, res) => {
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(401).json({
                error: result.array(),
                message: "Авторизуйтесь для удаления закладок!"
            });
        }
        const news = await bookmarksService.deleteBookmarkUserId(req.query.user_id, req.query.post_id);
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getUserBookmarks,
    deleteBookmark,
    deleteBookmarkUserId,
    postCreateBookmark,
};
