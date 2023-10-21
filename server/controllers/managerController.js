const ApiError = require('../error/ApiError');
const { Territory, Event } = require('../models/models');

class ManagerController {
    async listTerritories(req, res, next) {
        // List all territories assigned to the manager logic
        // ...
    }

    async listEventsByTerritory(req, res, next) {
        // List all events in a specific territory logic
        // ...
    }

    async createEventInTerritory(req, res, next) {
        // Create a new event in a specific territory logic
        // ...
    }
}

module.exports = new ManagerController();
