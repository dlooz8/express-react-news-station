const authController = require('../controllers/auth.controller');
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

router.post(
    '/register',
    [
        check('name').notEmpty().isString(),
        check('email').notEmpty().isEmail(),
        check('password').notEmpty().isString().isLength({ min: 8 }),
        check('avatar_url').notEmpty().isURL()
    ],
    authController.postRegister
);

router.post(
    '/login',
    [
        check('email').notEmpty().isEmail(),
        check('password').notEmpty().isString().isLength({ min: 8 }),
    ],
    authController.postLogin
);

router.get('/check-auth', authController.checkAuth);
router.get('/logout', authController.logOut);

module.exports = router;