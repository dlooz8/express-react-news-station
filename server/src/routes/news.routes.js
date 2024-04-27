const newsController = require('../controllers/news.controller')
const router = require('express').Router();
const Multer = require('multer');
const { check } = require('express-validator');

const storage = new Multer.memoryStorage();
const upload = Multer({
    storage,
});

router.post(
    '/create-news',
    [
        check('theme').notEmpty().isString(),
        check('text').notEmpty().isString(),
        check('tags').notEmpty().isString(),
        check('category').notEmpty().isString(),
        check('title_img').notEmpty().isURL(),
        check('user_id').notEmpty().isUUID(),
    ],
    newsController.postCreateNews
);

router.post(
    '/upload-image',
    upload.single('image'),
    newsController.postImageNews
);

router.get(
    '/search-news',
    [
        check('search').escape(),
        check('sort').escape().notEmpty()
    ],
    newsController.getSearchNews
);

router.get(
    '/',
    [
        check('news_id').notEmpty().escape()
    ],
    newsController.getCurrentNews
);

router.get(
    '/user-news/',
    [
        check('user_id').notEmpty().isUUID().escape()
    ],
    newsController.getUserNews
);

router.delete(
    '/delete/',
    [
        check('news_id').notEmpty().isUUID()
    ], newsController.deleteNews
);

router.get('/popular-news', newsController.getPopularNews);
router.get('/trendy-news', newsController.getTrendyNews);
router.get('/recent-news', newsController.getRecentNews);
router.get('/hot-sport-news', newsController.getHotSportNews);
router.get('/latest-news', newsController.getLatestNews);

module.exports = router;