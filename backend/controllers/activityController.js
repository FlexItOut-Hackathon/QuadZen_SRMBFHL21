const activityService = require("../services/activityService");
const { handleError } = require("../utils/helpers");

// Log a new activity
const logActivity = async (req, res) => {
  const { userId, activityType, count } = req.body;
  try {
    const activity = await activityService.logActivity(userId, activityType, count);
    res.status(201).json({ message: "Activity logged successfully", activity });
  } catch (error) {
    handleError(res, 500, error.message);
  }
};

// Fetch all activities for a user
const getActivities = async (req, res) => {
  const { userId } = req.params;
  try {
    const activities = await activityService.getUserActivities(userId);
    res.json(activities);
  } catch (error) {
    handleError(res, 500, error.message);
  }
};

// Fetch the leaderboard
const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await activityService.getLeaderboard();
    res.json(leaderboard);
  } catch (error) {
    handleError(res, 500, error.message);
  }
};

module.exports = { logActivity, getActivities, getLeaderboard };