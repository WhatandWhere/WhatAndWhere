const Router = require('express').Router();
const authController = require('../controllers/authController');

Router.post('/signup', authController.signup);
Router.post('/login', authController.login);
Router.post('/logout', authController.logout);

module.exports = Router;
