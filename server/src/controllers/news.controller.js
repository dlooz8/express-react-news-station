const newsService = require('../services/news.service')
const prisma = require('../config/prisma');
const cloudinary = require("cloudinary").v2;

cloudinary.config({
cloud_name: 'dqzgyyab3',
api_key: '726769892967862',
api_secret: 'gAf-CP7RAz9O-SPTJ3QDja99StM',
});

async function handleUpload(file) {
    const res = await cloudinary.uploader.upload(file, {
    resource_type: "image",
    transformation: [
        { width: 1600, height: 900, crop: 'fill' },
        { format: 'webp' }
    ]
    });
    return res;
}

const postImageNews = async (req, res) => {
    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = await handleUpload(dataURI);
        res.json(cldRes);
    } catch (error) {
        console.log(error);
        res.send({
        message: error.message,
        });
    }
}

const postCreateNews = async (req, res) => {
    const { theme, text, category, title_img, user_id} = req.body;
    try {
        const news = await prisma.posts.create({
            data: {
                theme,
                text,
                category,
                title_img,
                user_id}
        });
        res.status(200).json(news);
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
    const {news_id} = req.params;
    try {
        const news = await newsService.getCurrentNews(news_id);
        return res.status(200).json(news);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Новость не найдена");
    }
}

module.exports = {
    getPopularNews,
    getRecentNews,
    getHotSportNews,
    getLatestNews,
    getTrendyNews,
    getCurrentNews,
    postCreateNews,
    postImageNews,    
}