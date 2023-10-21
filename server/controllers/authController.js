const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}

class AuthController {
    async signup(req, res, next) {
        // Similar logic as registration from UserController
        // ...
    }

    async login(req, res, next) {
        res.json('aldfoaf')
        // Similar logic as login from UserController
        // ...
    }

    async logout(req, res, next) {
        // You might want to handle token invalidation here if using token blacklisting
        // ...
        return res.json({message: "Logged out successfully"});
    }
}

module.exports = new AuthController();
