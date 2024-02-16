const userRouter = require('express').Router();
const usersController = require('../controllers/users.controller')

userRouter.get('/all', usersController.getAll);
userRouter.get('/:id', usersController.getById);

module.exports = userRouter;