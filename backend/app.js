const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const activityRoutes = require('./routes/activityRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api', activityRoutes);
app.use('/api', leaderboardRoutes);

module.exports = app;