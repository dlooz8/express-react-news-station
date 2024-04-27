const bookmarksController = require('../controllers/bookmarks.controller');
const express = require('express');
const { check, body } = require('express-validator');
const router = express.Router();

router.get(
    '/user-bookmarks', 
    [
        check('user_id').notEmpty().isUUID().escape()
    ], 
    bookmarksController.getUserBookmarks
);

router.post(
    '/create',
    [
        check('user_id').notEmpty().isUUID(),
        check('post_id').notEmpty().isUUID()
    ],
    bookmarksController.postCreateBookmark
);

router.delete(
    '/delete/', 
    [
        check('id').notEmpty().isUUID()
    ],
    bookmarksController.deleteBookmark
);

router.delete(
    '/delete/userid',
    [
        check('user_id').notEmpty().isUUID(),
        check('post_id').notEmpty().isUUID()
    ],
    bookmarksController.deleteBookmarkUserId
);

module.exports = router;