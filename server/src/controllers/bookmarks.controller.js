const bookmarksService = require('../services/bookmarks.service')
const prisma = require('../config/prisma');

const getUserBookmarks = async (req, res) => {
    const news = await bookmarksService.getUserBookmarks(req);
    return res.status(200).json(news);
}

const deleteBookmark = async (req, res) => {
    const { id } = req.params;
    const news = await bookmarksService.deleteBookmark(id);
    return res.status(200).json(news);
}

module.exports = {
    getUserBookmarks,
    deleteBookmark,

}