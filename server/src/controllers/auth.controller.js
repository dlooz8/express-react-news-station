const authService = require('../services/auth.service');
const { validationResult } = require('express-validator');

const postRegister = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json(result);
    }
    try {
        const auth = await authService.postRegister(req, res);
        return res.status(200).json(auth);
    } catch (error) {
        return res.status(422).json(error);
    }
};
  
const postLogin = async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json(result);
    }
    try {
        const auth = await authService.postLogin(req, res);
        return res.status(200).json(auth);
    } catch (error) {
        return res.status(422).json(error.message);
    }
};

const checkAuth = (req, res) => {
    if (req.session.userId) {
        return res.status(200).json({ id: req.session.userId });
    } else {
        return res.status(401).json('Пользователь не авторизован');
    }
};

const logOut = (req, res) => {
    try {
        req.session.destroy();
        return res.status(200).json('Вы вышли из аккаунта' );
    } catch (error) {
        return res.status(401).json('Не удалось выйти из аккаунта');
    }
};

module.exports = {
    postRegister,
    postLogin,
    checkAuth,
    logOut
}