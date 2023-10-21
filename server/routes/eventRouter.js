const Router = require('express').Router();
const eventController = require('../controllers/eventController');

Router.get('/', eventController.listEvents);
Router.post('/', eventController.createEvent);
Router.get('/:eventId', eventController.getEvent);
Router.put('/:eventId', eventController.updateEvent);
Router.delete('/:eventId', eventController.deleteEvent);

module.exports = Router;
