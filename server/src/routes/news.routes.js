const newsRouter = require('express').Router();
const newsController = require('../controllers/news.controller')

newsRouter.post('/addnews', newsController.addNews);
newsRouter.get('/popular-posts', newsController.getPopularPosts);
newsRouter.get('/trendy-posts', newsController.getTrendyPosts);
newsRouter.get('/recent-posts', newsController.getRecentPosts);
newsRouter.get('/hot-sport-posts', newsController.getHotSportPosts);
newsRouter.get('/new-posts', newsController.getNewPosts);
newsRouter.get('/:post_id', newsController.getCurrentPost);

module.exports = newsRouter;