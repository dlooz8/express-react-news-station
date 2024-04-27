const commentsController = require('../controllers/comments.controller');

const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

router.get(
    '/',
    [
        check('post_id').notEmpty().isUUID().escape()
    ],
    commentsController.getComments
);

router.post(
    '/create-comment',
    [
        check('user_id').notEmpty().isUUID(),
        check('text').notEmpty().isString(),
        check('post_id').notEmpty().isUUID(),
    ], 
    commentsController.postCreateComment
);

router.delete(
    '/delete-comment',
    [
        check('id').notEmpty().isUUID()
    ],
    commentsController.deleteComment
);

router.delete(
    '/delete-nestedcomment',
    [
        check('id').notEmpty().isUUID()
    ],
    commentsController.deleteNestedComment
);

module.exports = router;