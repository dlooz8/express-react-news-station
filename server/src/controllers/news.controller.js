const newsService = require('../services/news.service')
const prisma = require('../config/prisma');

const postCreateNews = async (req, res) => {
    const { theme, text, category, title_img, user_id} = req.body;
    console.log("DATAAAAA", req.body)
    try {
        const news = await prisma.posts.create({
            data: {
                theme,
                text,
                category,
                title_img,
                user_id}
        });
        res.status(200).json("DONE");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json("Ошибка при создании нового поста");
    }
}

const getPopularNews = async (req, res) => {
    const news = await newsService.getPopularNews();
    return res.status(200).json(news);
}

const getTrendyNews = async (req, res) => {
    const news = await newsService.getTrendyNews();
    return res.status(200).json(news);
}

const getRecentNews = async (req, res) => {
    const news = await newsService.getRecentNews();
    return res.status(200).json(news);
}

const getHotSportNews = async (req, res) => {
    const news = await newsService.getHotSportNews();
    return res.status(200).json(news);
}

const getLatestNews = async (req, res) => {
    const news = await newsService.getLatestNews();
    return res.status(200).json(news);
}

const getCurrentNews = async (req, res) => {
    const {post_id} = req.params;
    const news = await newsService.getCurrentNews(post_id);
    return res.status(200).json(news);
}

module.exports = {
    getPopularNews,
    getRecentNews,
    getHotSportNews,
    getLatestNews,
    getTrendyNews,
    getCurrentNews,
    postCreateNews,
    
}