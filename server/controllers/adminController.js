const ApiError = require('../error/ApiError');
const { User, UserInfo } = require('../models/models');

class AdminController {
    async listUsers(req, res, next) {
        try {
            const users = await UserInfo.findAll();
            return res.status(200).json(users);

        } catch (error) {
            console.error('Sequelize error:', error);
            next(ApiError.internal(`An error occurred while retrieving filtered events: ${error.message}`));
        }

    }

    async updateUser(req, res, next) {
        try {
            const { userId } = req.params;
            const updatedData = req.body;

            const [updated] = await UserInfo.update(updatedData, {
                where: { userInfoId: userId }
            });

            if (updated) {
                const updatedUser = await UserInfo.findByPk(userId);
                return res.status(200).json(updatedUser);
            }

            throw new Error('User not found');

        } catch (error) {
            next(ApiError.internal('User not found'));
        }
    }

    async deleteUser(req, res, next) {
        try {
            const { userId } = req.params;
            const deleted = await UserInfo.destroy({
                where: { userInfoId: userId }
            });

            if (deleted) {
                return res.status(200).json({
                    message: "User deleted successfully"
                });
            }

            throw new Error('User not found');
        } catch (error) {
            next(ApiError.internal('User not found'));
        }
    }
}

module.exports = new AdminController();
