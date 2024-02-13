const feedService = require('../services/feed.service')

const getPopularPosts = async (req, res) => {
    const feed = await feedService.getPopularPosts();
    return res.status(200).json(feed);
}

const getTrendyPosts = async (req, res) => {
    const feed = await feedService.getTrendyPosts();
    return res.status(200).json(feed);
}

const getRecentPosts = async (req, res) => {
    const feed = await feedService.getRecentPosts();
    return res.status(200).json(feed);
}

const getHotSportPosts = async (req, res) => {
    const feed = await feedService.getHotSportPosts();
    return res.status(200).json(feed);
}

const getNewPosts = async (req, res) => {
    const feed = await feedService.getNewPosts();
    return res.status(200).json(feed);
}

module.exports = {
    getPopularPosts,
    getRecentPosts,
    getHotSportPosts,
    getNewPosts,
    getTrendyPosts,

}