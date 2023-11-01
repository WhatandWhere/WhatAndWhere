const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserInfo } = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}

class UserController {
    async signup(req, res, next) {
        const {email, password, username, name, surname, /* ... other fields */ } = req.body;

        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'));
        }

        const candidate = await UserInfo.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await UserInfo.create({
            email,
            password: hashPassword,
            username,
            name,
            surname,
            // ... other fields
        });

        const token = generateJwt(user.userInfoId, user.email, /* role */); // Decide on user role logic
        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await UserInfo.findOne({where: {email}});
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'));
        }

        const token = generateJwt(user.userInfoId, user.email, /* user role */);  // Decide on user role logic
        return res.json({token});
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.userInfoId, req.user.email, req.user.role);
        return res.json({token});
    }
}

module.exports = new UserController();
