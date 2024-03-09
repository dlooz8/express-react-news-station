const authService = require('../services/auth.service');

const postRegister = async (req, res) => {
    try {
        const auth = await authService.postRegister(req, res);
        return res.status(200).json(auth);
    } catch (error) {
        return res.status(422).json('Этот email уже занят');
    }
};
  
const postLogin = async (req, res) => {
    try {
        const auth = await authService.postLogin(req, res);
        return res.status(200).json(auth);
    } catch (error) {
        return res.status(422).json('Неверное имя пользователя или пароль');
    }
};

const checkAuth = (req, res) => {
    if (req.session.userId) {
        return res.status(200).json({ id: req.session.userId });
    } else {
        return res.status(401).json('Пользователь не авторизован');
    }
};

const logout = (req, res) => {
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
    logout
}