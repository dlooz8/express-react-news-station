const authController = require('../controllers/auth.controller');
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

router.post('/register',
    body('name').notEmpty(),
    body('email').isEmail().notEmpty(),
    body('password').notEmpty(),
    body('avatar_url').notEmpty(),
    authController.postRegister);
router.post('/login', authController.postLogin);
router.get('/check-auth', authController.checkAuth);
router.get('/logout', authController.logout);

module.exports = router;