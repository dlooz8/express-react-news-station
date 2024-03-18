const bookmarksService = require('../services/bookmarks.service')
const { validationResult } = require('express-validator');


const getUserBookmarks = async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        try {
            const bookmarks = await bookmarksService.getUserBookmarks(req.query.user_id);
            return res.status(200).json(bookmarks);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    }
    return res.status(400).json(result);
}

const deleteBookmark = async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        try {
            const news = await bookmarksService.deleteBookmark(req.query.id);
            return res.status(200).json(news);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    }
    return res.status(400).json(result);
}

module.exports = {
    getUserBookmarks,
    deleteBookmark,

}