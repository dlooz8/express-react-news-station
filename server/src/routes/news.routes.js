const newsController = require('../controllers/news.controller')
const router = require('express').Router();
const Multer = require('multer');
const { query, param, body } = require('express-validator');

const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

router.post('/create-news',
  body('text').notEmpty(),
  body('theme').notEmpty(),
  body('category').notEmpty(),
  body('title_img').notEmpty(),
  body('user_id').notEmpty(),
  newsController.postCreateNews);
router.post('/upload-image', upload.single('image'), newsController.postImageNews);
router.get('/popular-news', newsController.getPopularNews);
router.get('/trendy-news', newsController.getTrendyNews);
router.get('/recent-news', newsController.getRecentNews);
router.get('/hot-sport-news', newsController.getHotSportNews);
router.get('/latest-news', newsController.getLatestNews);

router.get('/', query('news_id').notEmpty().escape(), newsController.getCurrentNews);
router.get('/user-news/', query('user_id').notEmpty().escape(), newsController.getUserNews);
router.delete('/delete/', query('news_id').notEmpty(), newsController.deleteNews);

module.exports = router;