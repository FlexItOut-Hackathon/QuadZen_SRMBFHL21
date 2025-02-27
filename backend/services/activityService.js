const Activity = require("../models/Activity");
const Leaderboard = require("../models/Leaderboard");

// Log a new activity for a user
const logActivity = async (userId, activityType, count) => {
  try {
    const activity = await Activity.create(userId, activityType, count);

    // Update the leaderboard with the new activity score
    const leaderboardEntry = await Leaderboard.findOne({ where: { userId } });
    if (leaderboardEntry) {
      leaderboardEntry.score += count; // Increment the score
      await leaderboardEntry.save();
    } else {
      await Leaderboard.create(userId, count); // Create a new entry
    }

    return activity;
  } catch (error) {
    throw new Error(`Failed to log activity: ${error.message}`);
  }
};

// Fetch all activities for a user
const getUserActivities = async (userId) => {
  try {
    const activities = await Activity.findByUserId(userId);
    return activities;
  } catch (error) {
    throw new Error(`Failed to fetch activities: ${error.message}`);
  }
};

// Fetch the leaderboard (top scores)
const getLeaderboard = async (limit = 10) => {
  try {
    const leaderboard = await Leaderboard.getTopScores(limit);
    return leaderboard;
  } catch (error) {
    throw new Error(`Failed to fetch leaderboard: ${error.message}`);
  }
};

module.exports = {
  logActivity,
  getUserActivities,
  getLeaderboard,
};