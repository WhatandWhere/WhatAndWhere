const Router = require('express').Router();
const managerController = require('../controllers/managerController');

Router.get('/territories', managerController.listTerritories);
Router.get('/territories/:territoryId/events', managerController.listEventsByTerritory);
Router.post('/territories/:territoryId/events', managerController.createEventInTerritory);

module.exports = Router;
