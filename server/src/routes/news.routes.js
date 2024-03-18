const newsController = require('../controllers/news.controller')
const router = require('express').Router();
const Multer = require('multer');
const { query, body } = require('express-validator');

const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

const createPostChain = () => 
    body('text').notEmpty().escape()
    body('theme').notEmpty().escape(),
    body('category').notEmpty().escape(),
    body('title_img').notEmpty().escape(),
    body('user_id').notEmpty().escape();

// app.post('/signup', baseEmailChain.custom(checkEmailNotInUse), handleSignupRoute);

router.post('/upload-image', upload.single('image'), newsController.postImageNews);
router.post('/create-news', createPostChain(), newsController.postCreateNews);
router.get('/popular-news', newsController.getPopularNews);
router.get('/trendy-news', newsController.getTrendyNews);
router.get('/recent-news', newsController.getRecentNews);
router.get('/hot-sport-news', newsController.getHotSportNews);
router.get('/latest-news', newsController.getLatestNews);

router.get('/', query('news_id').notEmpty().escape(), newsController.getCurrentNews);
router.get('/user-news/', query('user_id').notEmpty().escape(), newsController.getUserNews);
router.delete('/delete/', query('news_id').notEmpty().escape(), newsController.deleteNews);

module.exports = router;