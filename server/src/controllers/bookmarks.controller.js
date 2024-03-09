const bookmarksService = require('../services/bookmarks.service')
const prisma = require('../config/prisma');

const getUserBookmarks = async (req, res) => {
    try {
        const bookmarks = await bookmarksService.getUserBookmarks(req);
        return res.status(200).json(bookmarks);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

const deleteBookmark = async (req, res) => {
    try {
        const { id } = req.params;
        const news = await bookmarksService.deleteBookmark(id);
        return res.status(200).json(news);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getUserBookmarks,
    deleteBookmark,

}