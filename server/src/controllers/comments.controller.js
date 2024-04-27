const commentsService = require("../services/comments.service");
const { validationResult } = require("express-validator");

const getComments = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                error: errors.array(),
                message: "Некорректные данные при получении комментариев!",
            });
        }
        const comments = await commentsService.getComments(req.query.post_id);
        return res.status(200).json(comments);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const postCreateComment = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({
                error: errors.array(),
                message: "Авторизуйтесь для добавления нового комментария!"
            });
        }
        const comment = await commentsService.postCreateComment(req);
        return res.status(200).json(comment);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteComment = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({
                error: errors.array(),
                message: "Авторизуйтесь для удаления комментария!"
            });
        }
        const result = await commentsService.deleteComment(req.query.id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteNestedComment = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({
                error: errors.array(),
                message: "Авторизуйтесь для удаления комментария!"
            });
        }
        const result = await commentsService.deleteNestedComment(req.query.id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getComments,
    postCreateComment,
    deleteComment,
    deleteNestedComment,
};
