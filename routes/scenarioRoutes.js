const express = require('express');
const { getScenarios, getScenarioById, addScenario, updateScenario } = require('../controllers/scenarioController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/', getScenarios);
router.get('/:scenarioId', getScenarioById);
router.post('/', authenticateToken, addScenario);
router.put('/:scenarioId', authenticateToken, updateScenario);

module.exports = router;
