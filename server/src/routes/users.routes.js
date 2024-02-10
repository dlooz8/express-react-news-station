const userRouter = require('express').Router();
const usersController = require('../controllers/users.controller')

userRouter.get('/', usersController.getAll)

module.exports = userRouter;