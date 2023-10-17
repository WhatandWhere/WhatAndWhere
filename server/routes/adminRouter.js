const Router = require('express').Router;
const router = new Router();

router.get('/users', (req, res) => {
    // List all users here.
});

router.put('/users/:id', (req, res) => {
    // Update user roles/permissions here.
});

router.delete('/users/:id', (req, res) => {
    // Delete a user here.
});

module.exports = router;
