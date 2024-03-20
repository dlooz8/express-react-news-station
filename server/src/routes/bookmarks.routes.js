const bookmarksController = require('../controllers/bookmarks.controller');
const express = require('express');
const { query } = require('express-validator');
const router = express.Router();

router.get('/user-bookmarks', query('user_id').notEmpty().escape(), bookmarksController.getUserBookmarks);
router.delete('/delete/', query('id').notEmpty(), bookmarksController.deleteBookmark);

module.exports = router;