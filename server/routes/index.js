const Router = require('express');
const router = new Router();

const userController = require('./authRouter');
const profileRouter = require('./profileRouter');
const eventRouter = require('./eventRouter');
const adminRouter = require('./adminRouter');
const managerRouter = require('./managerRouter');

router.use('/user', userController);
router.use('/profile', profileRouter);
router.use('/events', eventRouter);
router.use('/admin', adminRouter);
router.use('/manager', managerRouter);

module.exports = router;
