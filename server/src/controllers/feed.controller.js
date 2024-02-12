const feedService = require('../services/feed.service')

const getAll = async (req, res) => {
    const feed = await feedService.getAll();
    return res.status(200).json(feed);
}

module.exports = {
    getAll
}