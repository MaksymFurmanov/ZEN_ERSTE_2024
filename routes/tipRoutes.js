const express = require('express');
const { getTipsForScenario, saveFeedback } = require('../controllers/tipController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/:scenarioId', getTipsForScenario);
router.post('/feedback', authenticateToken, saveFeedback);

module.exports = router;
