const express = require('express');
const router = express.Router();
const bookmarksController = require('../controllers/bookmarks.controller');

router.get('/user-bookmarks', bookmarksController.getUserBookmarks);
router.delete('/delete/:id', bookmarksController.deleteBookmark);

module.exports = router;