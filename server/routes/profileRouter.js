const Router = require('express').Router();
const profileController = require('../controllers/profileController');

Router.get('/', profileController.getProfile);
Router.put('/', profileController.updateProfile);
Router.post('/avatar', profileController.uploadAvatar);
Router.put('/password', profileController.changePassword);

module.exports = Router;
