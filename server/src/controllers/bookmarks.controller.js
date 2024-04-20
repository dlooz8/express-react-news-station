const bookmarksService = require("../services/bookmarks.service");
const { validationResult } = require("express-validator");

const postCreateBookmark = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ message: "Авторизуйтесь для добавления новой закладки!" });
    }
    try {
        const bookmark = await bookmarksService.postCreateBookmark(req);
        return res.status(200).json(bookmark);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getUserBookmarks = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json(result);
    }
    try {
        const bookmarks = await bookmarksService.getUserBookmarks(
            req.query.user_id
        );
        return res.status(200).json(bookmarks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteBookmark = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json(result);
    }
    try {
        const news = await bookmarksService.deleteBookmark(req.query.id);
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteBookmarkUserId = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json(result);
    }
    try {
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
