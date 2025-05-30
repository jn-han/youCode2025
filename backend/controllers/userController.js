const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      organization,
      experiencedActivities = [],
      wantsToExperience = [],
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists." });
    }

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password, // 🔐 you can hash this later
      organization,
      experiencedActivities,
      wantsToExperience,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.error("❌ Error creating user:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .populate("organization", "name")
      .populate("experiencedActivities", "name")
      .populate("wantsToExperience", "name");

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

module.exports = {
  createUser,
  getUsers,
};
