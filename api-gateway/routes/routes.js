const express = require('express');

const router = express.Router();

// Example route
router.get('/register', (req, res) => {
    res.send('Welcome to the API Gateway');
});

// Add more routes here
router.get('/login', (req, res) => {
    res.json({ status: 'API Gateway is running' });
});

module.exports = router;