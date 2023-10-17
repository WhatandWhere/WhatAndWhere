const Router = require('express').Router;
const router = new Router();

router.get('/', (req, res) => {
    // List all events here.
});

router.post('/', (req, res) => {
    // Create a new event here.
});

router.get('/:id', (req, res) => {
    // Get details of a specific event here.
});

router.put('/:id', (req, res) => {
    // Update a specific event here.
});

router.delete('/:id', (req, res) => {
    // Delete a specific event here.
});

module.exports = router;
