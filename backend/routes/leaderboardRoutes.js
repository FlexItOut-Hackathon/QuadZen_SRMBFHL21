const express = require('express');
const { addScore, getTopScores } = require('../controllers/leaderboardController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/leaderboard', authMiddleware, addScore);
router.get('/leaderboard', getTopScores);

module.exports = router;