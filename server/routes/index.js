const Router = require('express');
const router = new Router();

const authRouter = require('./authRouter');
const profileRouter = require('./profileRouter');
const eventRouter = require('./eventRouter');
const adminRouter = require('./adminRouter');
const managerRouter = require('./managerRouter');

router.use('/auth', authRouter);
router.use('/profile', profileRouter);
router.use('/events', eventRouter);
router.use('/admin', adminRouter);
router.use('/manager', managerRouter);

module.exports = router;
