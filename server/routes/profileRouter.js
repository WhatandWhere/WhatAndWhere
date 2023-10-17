const Router = require('express').Router;
const router = new Router();

router.get('/', (req, res) => {
    // Retrieve user profile details here.
});

router.put('/', (req, res) => {
    // Update user profile details here.
});

router.post('/avatar', (req, res) => {
    // Upload a new profile avatar here.
});

router.put('/password', (req, res) => {
    // Change user password here.
});

module.exports = router;
