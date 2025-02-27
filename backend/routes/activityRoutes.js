const express = require("express");
const activityController = require("../controllers/activityController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Log a new activity (protected route)
router.post("/activities", authMiddleware, activityController.logActivity);

// Fetch activities for a user (protected route)
router.get("/activities/:userId", authMiddleware, activityController.getActivities);

// Fetch the leaderboard (public route)
router.get("/leaderboard", activityController.getLeaderboard);

module.exports = router;