const Router = require('express').Router();
const adminController = require('../controllers/adminController');

Router.get('/users', adminController.listUsers);
Router.put('/users/:userId', adminController.updateUser);
Router.delete('/users/:userId', adminController.deleteUser);

module.exports = Router;
