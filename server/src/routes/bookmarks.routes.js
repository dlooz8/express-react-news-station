const bookmarksController = require('../controllers/bookmarks.controller');
const express = require('express');
const router = express.Router();
const { query } = require('express-validator');

router.get('/user-bookmarks', query('user_id').notEmpty().escape(), bookmarksController.getUserBookmarks);
router.delete('/delete/', query('id').notEmpty().escape(), bookmarksController.deleteBookmark);

module.exports = router;