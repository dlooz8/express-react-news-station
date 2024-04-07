const commentsController = require('../controllers/comments.controller');

const express = require('express');
const { query, body } = require('express-validator');
const router = express.Router();

router.get('/', query('post_id').notEmpty().escape(), commentsController.getComments);
router.post('/create-comment', body('user_id').notEmpty(), body('text').notEmpty(), body('post_id').notEmpty(), commentsController.postCreateComment);
router.delete('/delete-comment', query('id').notEmpty(), commentsController.deleteComment);
router.delete('/delete-nestedcomment', query('id').notEmpty(), commentsController.deleteNestedComment);

module.exports = router;