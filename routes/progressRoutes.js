const express = require('express');
const { getUserProgress, saveUserProgress } = require('../controllers/progressController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/:userId', authenticateToken, getUserProgress);
router.post('/:userId', authenticateToken, saveUserProgress);

module.exports = router;
