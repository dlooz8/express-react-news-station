const bookmarksController = require('../controllers/bookmarks.controller');
const express = require('express');
const router = express.Router();

router.get('/user-bookmarks/:user_id', bookmarksController.getUserBookmarks);
router.delete('/delete/:id', bookmarksController.deleteBookmark);

module.exports = router;