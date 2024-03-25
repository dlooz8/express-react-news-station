const bookmarksController = require('../controllers/bookmarks.controller');
const express = require('express');
const { query, body } = require('express-validator');
const router = express.Router();

router.get('/user-bookmarks', query('user_id').notEmpty().escape(), bookmarksController.getUserBookmarks);
router.post('/create', body('user_id').notEmpty(), body('post_id').notEmpty(), bookmarksController.postCreateBookmark);
router.delete('/delete/', query('id').notEmpty(), bookmarksController.deleteBookmark);
router.delete('/delete/userid', query('user_id').notEmpty(), query('post_id').notEmpty(), bookmarksController.deleteBookmarkUserId);

module.exports = router;