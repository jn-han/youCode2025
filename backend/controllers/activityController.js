// controllers/activityController.js
const Activity = require("../models/Activity");

// Create a new activity
const createActivity = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Activity name is required." });
    }

    const existing = await Activity.findOne({ name });
    if (existing) {
      return res.status(409).json({ message: "Activity already exists." });
    }

    const newActivity = new Activity({ name });
    const savedActivity = await newActivity.save();
    res.status(201).json(savedActivity);
  } catch (err) {
    console.error("❌ Error creating activity:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get all activity types
const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (err) {
    console.error("❌ Error fetching activities:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  createActivity,
  getActivities,
};
