const Router = require('express').Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

Router.post('/signup', userController.signup);
Router.post('/login', userController.login);
Router.get('/auth', authMiddleware,  userController.check);

module.exports = Router;
