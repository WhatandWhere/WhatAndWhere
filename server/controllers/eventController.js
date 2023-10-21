const ApiError = require('../error/ApiError');
const { Event } = require('../models/models');

class EventController {
    async listEvents(req, res, next) {
        // List all events logic
        // ...
    }

    async createEvent(req, res, next) {
        // Create a new event logic
        // ...
    }

    async getEvent(req, res, next) {
        // Get a specific event details logic
        // ...
    }

    async updateEvent(req, res, next) {
        // Update a specific event logic
        // ...
    }

    async deleteEvent(req, res, next) {
        // Delete a specific event logic
        // ...
    }
}

module.exports = new EventController();
