const commentsService = require("../services/comments.service");
const { validationResult } = require("express-validator");

const getComments = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json(result);
    }
    try {
        const comments = await commentsService.getComments(req.query.post_id);
        return res.status(200).json(comments);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

const postCreateComment = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ message: "Авторизуйтесь для добавления нового комментария!" });
    }
    try {
        const comment = await commentsService.postCreateComment(req);
        return res.status(200).json(comment);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

const postCreateNestedComment = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ message: "Авторизуйтесь для добавления нового комментария!" });
    }
    try {
        const comment = await commentsService.postCreateNestedComment(req);
        return res.status(200).json(comment);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

const deleteComment = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json(result);
    }
    try {
        const result = await commentsService.deleteComment(req.query.id);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

const deleteNestedComment = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json(result);
    }
    try {
        const result = await commentsService.deleteNestedComment(req.query.id);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getComments,
    postCreateComment,
    postCreateNestedComment,
    deleteComment,
    deleteNestedComment,
};
