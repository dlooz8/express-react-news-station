const newsService = require('../services/news.service')
const { handleUpload } = require('../config/cloudinary');
const { validationResult } = require('express-validator');

const postImageNews = async (req, res) => {
    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = await handleUpload(dataURI);
        res.status(200).json(cldRes);
    } catch (error) {
        res.status(500).json("Не удалось загрузить изображение");
    }
}

const postCreateNews = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json(result);
    }
    try { 
        const news = await newsService.postCreateNews(req, res);
        return res.status(200).json(news);
    } catch (error) {
        res.status(500).json("Ошибка при создании новости");
    }
}

const getPopularNews = async (req, res) => {
    try {
        const news = await newsService.getPopularNews();
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json("Новости не найдены");
    }
}

const getTrendyNews = async (req, res) => {
    try { 
        const news = await newsService.getTrendyNews();
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json("Новости не найдены");
    }
}

const getRecentNews = async (req, res) => {
    try {
        const news = await newsService.getRecentNews();
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json("Новости не найдены");
    }
}

const getHotSportNews = async (req, res) => {
    try {
        const news = await newsService.getHotSportNews();
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json("Новости не найдены");
    }
}

const getLatestNews = async (req, res) => {
    try {
        const news = await newsService.getLatestNews();
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json("Новости не найдены");
    }
}

const getCurrentNews = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json(result);
    }
    try {
        const news = await newsService.getCurrentNews(req.query.news_id);
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json("Новость не найдена");
    }
}

const getSearchNews = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json(result);
    }
    try {
        const news = await newsService.getSearchNews(decodeURIComponent(req.query.search));
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json("Новости не найдены");
    }
}

const getUserNews = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json(result);
    }
    try {
        const news = await newsService.getUserNews(req.query.user_id);
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json("Новости не найдены" + error);
    }
}

const deleteNews = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json(result);
    }
    try {
        const news = await newsService.deleteNews(req.query.news_id);
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json("Удаление новости не выполнено!");
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