const feedRouter = require('express').Router();
const feedController = require('../controllers/feed.controller')

feedRouter.get('/', feedController.getAll)

module.exports = feedRouter;