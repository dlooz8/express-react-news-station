const authService = require('../services/auth.service');
const { validationResult } = require('express-validator');

const postRegister = async (req, res) => {
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({
                error: result.array(),
                message: 'Некорректные данные при регистрации',
        });
        }
        const auth = await authService.postRegister(req, res);
        return res.status(200).json({
            ...auth,
            message: 'Вы успешно зарегистрировались!',
        });
    } catch (error) {
        if (error.message === 'Этот email уже занят!') {
            return res.status(400).json({
                error: error,
                message: 'Этот email уже занят!'
            });
        }
        return res.status(500).json({
            error: error,
            message: 'Произошла ошибка при регистрации, попробуйте еще раз'
        });
    }
};
  
const postLogin = async (req, res) => {
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({
                error: result.array(),
                message: 'Некорректные данные при авторизации',
        });
        }
        const auth = await authService.postLogin(req, res);
        return res.status(200).json({
            ...auth,
            message: 'Вы успешно авторизовались!',
        });
    } catch (error) {
        if (error.message === 'Неверный пароль!') {
            return res.status(401).json({
                error: error,
                message: 'Неверный пароль!'
            });    
        } else if (error.message === 'Пользователь с таким email не зарегистрирован!') {
            return res.status(401).json({
                error: error,
                message: 'Пользователь с таким email не зарегистрирован!'
            });
        }
        return res.status(500).json({
            error: error,
            message: 'Произошла ошибка при авторизации, попробуйте еще раз'
        });
    }
};

const checkAuth = (req, res) => {
    if (req.session.userId) {
        return res.status(200).json({ id: req.session.userId });
    } else {
        return res.status(401).json({ message: 'Пользователь не авторизован' });
    }
};

const logOut = (req, res) => {
    try {
        req.session.destroy();
        return res.status(200).json({ message: 'Вы вышли из аккаунта' });
    } catch (error) {
        return res.status(401).json({ message: 'Пользователь не авторизован' });
    }
};

module.exports = {
    postRegister,
    postLogin,
    checkAuth,
    logOut
}