const Leaderboard = require('../models/Leaderboard');

const addScore = async (req, res) => {
    const { userId, score } = req.body;
    try {
        await Leaderboard.create(userId, score);
        res.status(201).json({ message: 'Score added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTopScores = async (req, res) => {
    try {
        const topScores = await Leaderboard.getTopScores();
        res.json(topScores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addScore, getTopScores };