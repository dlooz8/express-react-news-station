const newsService = require('../services/news.service')
const { handleUpload } = require('../config/cloudinary');
const { validationResult } = require('express-validator');

const postImageNews = async (req, res) => {
    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = await handleUpload(dataURI);
        res.status(200).json({
            ...cldRes,
            message: "Изображение загружено",
        });
    } catch (error) {
        res.status(500).json({ message: "Не удалось загрузить изображение, попробуйте еще" });
    }
}

const postCreateNews = async (req, res) => {
    try { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                error: errors.array(),
                message: "Некорректные данные при создании новости",
            });
        }
        const news = await newsService.postCreateNews(req, res);
        return res.status(200).json(news);
    } catch (error) {
        res.status(500).json({message: "Ошибка при создании новости, попробуйте еще"});
    }
}

const getPopularNews = async (req, res) => {
    try {
        const news = await newsService.getPopularNews();
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json({message:"Произошла ошибка при получении новостей, попробуйте еще"});
    }
}

const getTrendyNews = async (req, res) => {
    try { 
        const news = await newsService.getTrendyNews();
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json({message:"Произошла ошибка при получении новостей, попробуйте еще"});
    }
}

const getRecentNews = async (req, res) => {
    try {
        const news = await newsService.getRecentNews();
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json({message:"Произошла ошибка при получении новостей, попробуйте еще"});
    }
}

const getHotSportNews = async (req, res) => {
    try {
        const news = await newsService.getHotSportNews();
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json({message:"Произошла ошибка при получении новостей, попробуйте еще"});
    }
}

const getLatestNews = async (req, res) => {
    try {
        const news = await newsService.getLatestNews();
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json({message:"Произошла ошибка при получении новостей, попробуйте еще"});
    }
}

const getCurrentNews = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                error: errors.array(),
                message: "Некорректные данные при получении новости",
            });
        }
        const news = await newsService.getCurrentNews(req.query.news_id);
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json({message:"Произошла ошибка при получении новостей, попробуйте еще"});
    }
}

const getSearchNews = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                error: errors.array(),
                message: "Некорректные данные при поиске новости",
            });
        }
        const news = await newsService.getSearchNews(decodeURIComponent(req.query.search), req.query.sort);
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json({message:"Произошла ошибка при получении новостей, попробуйте еще"});
    }
}

const getUserNews = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({
                error: errors.array(),
                message: "Некорректные данные при получении новостей",
            });
        }
        const news = await newsService.getUserNews(req.query.user_id);
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json({message:"Произошла ошибка при получении новостей, попробуйте еще"});
    }
}

const deleteNews = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({
                error: errors.array(),
                message: "Авторизуйтесь для удаления новости!",
            });
        }
        const news = await newsService.deleteNews(req.query.news_id);
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json("Произошла ошибка при удалении новости, попробуйте еще");
    }
}

module.exports = {
    getPopularNews,
    getRecentNews,
    getHotSportNews,
    getLatestNews,
    getTrendyNews,
    getSearchNews,
    getCurrentNews,
    getUserNews,
    deleteNews,
    postCreateNews,
    postImageNews,    
}