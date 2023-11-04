const ApiError = require('../error/ApiError');
const { User } = require('../models/models');

class AdminController {
    async listUsers(req, res, next) {
        // List all users logic
    }

    async updateUser(req, res, next) {
        // Update user roles or permissions logic
        // ...
    }

    async deleteUser(req, res, next) {
        // Delete user logic
        // ...
    }
}

module.exports = new AdminController();
