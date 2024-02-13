const feedRouter = require('express').Router();
const feedController = require('../controllers/feed.controller')

feedRouter.get('/popular-posts', feedController.getPopularPosts);
feedRouter.get('/trendy-posts', feedController.getTrendyPosts);
feedRouter.get('/recent-posts', feedController.getRecentPosts);
feedRouter.get('/hot-sport-posts', feedController.getHotSportPosts);
feedRouter.get('/new-posts', feedController.getNewPosts);


module.exports = feedRouter;