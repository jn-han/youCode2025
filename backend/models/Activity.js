// models/Activity.js
const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // No duplicate names
  },
});

module.exports = mongoose.model("Activity", activitySchema);
