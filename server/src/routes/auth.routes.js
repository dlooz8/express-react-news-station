const authController = require('../controllers/auth.controller');
const express = require('express');
const router = express.Router();

router.post('/register', authController.postRegister);
router.post('/login', authController.postLogin);
router.get('/check-auth', authController.checkAuth);
router.get('/logout', authController.logout);

module.exports = router;