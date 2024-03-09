const router = require('express').Router();
const newsController = require('../controllers/news.controller')

const Multer = require('multer');
const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

router.post('/upload', upload.single('my_file'), newsController.postImageNews);
router.post('/create-news', newsController.postCreateNews);
router.get('/popular-news', newsController.getPopularNews);
router.get('/trendy-news', newsController.getTrendyNews);
router.get('/recent-news', newsController.getRecentNews);
router.get('/hot-sport-news', newsController.getHotSportNews);
router.get('/latest-news', newsController.getLatestNews);
router.get('/:news_id', newsController.getCurrentNews);

module.exports = router;