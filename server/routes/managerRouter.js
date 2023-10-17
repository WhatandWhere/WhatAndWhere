const Router = require('express').Router;
const router = new Router();

router.get('/territories', (req, res) => {
    // List all territories assigned to the manager here.
});

router.get('/territories/:id/events', (req, res) => {
    // List all events in a specific territory here.
});

router.post('/territories/:id/events', (req, res) => {
    // Create a new event in a specific territory here.
});

module.exports = router;
