const User = require("../models/User");

// Create a user
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    // ✅ Check if user with this email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(409) // 409 Conflict
        .json({ message: "User with this email already exists." });
    }

    // ✅ Create new user
    const newUser = new User({ name, email });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

module.exports = {
  createUser,
  getUsers,
};
