// migrations/init-mock-users.js

const { UserInfo } = require('../models/models');
const bcrypt = require('bcrypt');

async function up() {
    // Delete all previous users
    await UserInfo.destroy({
        where: {}
    });

    // Mock users data
    const mockUsers = [
        {
            username: 'JohnDoe',
            name: 'John',
            surname: 'Doe',
            email: 'johndoe@example.com',
            phoneNumber: '123456789',
            birthDate: new Date(),
            password: await bcrypt.hash('password123', 5),
            isAdmin: true,
            isManager: false
        },
        // ... Add more mock users as needed
    ];

    // Insert mock users
    await UserInfo.bulkCreate(mockUsers);
}

async function down() {
    // Delete all users
    await UserInfo.destroy({
        where: {}
    });
}

module.exports = { up, down };
