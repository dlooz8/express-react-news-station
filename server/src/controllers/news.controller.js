const newsService = require('../services/news.service')
const prisma = require('../config/prisma');
const axios = require('axios');
const cloudinary = require('../config/cloudinary');
const multer = require('multer');


const postNews = async (req, res) => {
    const { theme, text, category, title_img, user_id} = req.body;

    



    try {
        const news = await prisma.posts.create({
            data: {
                theme,
                text,
                category,
                title_url,
                user_id
            }
        });
        res.status(200).json("DONE");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json("Ошибка при создании нового поста");
    }
}

const getPopularPosts = async (req, res) => {
    const news = await newsService.getPopularPosts();
    return res.status(200).json(news);
}

const getTrendyPosts = async (req, res) => {
    const news = await newsService.getTrendyPosts();
    return res.status(200).json(news);
}

const getRecentPosts = async (req, res) => {
    const news = await newsService.getRecentPosts();
    return res.status(200).json(news);
}

const getHotSportPosts = async (req, res) => {
    const news = await newsService.getHotSportPosts();
    return res.status(200).json(news);
}

const getNewPosts = async (req, res) => {
    const news = await newsService.getNewPosts();
    return res.status(200).json(news);
}

const getCurrentPost = async (req, res) => {
    const {post_id} = req.params;
    const news = await newsService.getCurrentPost(post_id);
    return res.status(200).json(news);
}

module.exports = {
    getPopularPosts,
    getRecentPosts,
    getHotSportPosts,
    getNewPosts,
    getTrendyPosts,
    getCurrentPost,
    postNews,
    
}