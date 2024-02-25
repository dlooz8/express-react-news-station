const router = require('express').Router();
const newsController = require('../controllers/news.controller');

router.post('/addnews', newsController.addNews);
// router.get('/getnews', newsController.getNews);

module.exports = router;