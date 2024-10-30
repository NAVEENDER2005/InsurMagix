const express = require('express');
const router = express.Router();
const { createTreatmentEstimate } = require('../controllers/treatments');

router.post('/treatments', createTreatmentEstimate);

module.exports = router;
