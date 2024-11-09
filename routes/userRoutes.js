const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile/:userId', authenticateToken, getUserProfile);

module.exports = router;
