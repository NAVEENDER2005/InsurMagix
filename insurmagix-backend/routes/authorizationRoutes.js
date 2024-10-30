const express = require('express');
const router = express.Router();
const authorizationController = require('../controllers/authorizationController');

// Route to check authorization status
router.post('/check-authorization', authorizationController.checkAuthorization);

// Route to save authorization to User Account
router.post('/save-authorization', authorizationController.saveAuthorization);

module.exports = router;
