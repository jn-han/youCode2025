// models/Activity.js
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {},
  attendees: {
    type: [User],
  },
  createdBy: {},
  difficulty: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
});

module.exports = mongoose.model("Activity", activitySchema);
