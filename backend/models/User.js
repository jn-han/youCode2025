const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: false,
  },
  lastName: {
    type: String,
    required: true,
    unique: false,
  },
  experiencedActivities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Activity",
    },
  ],
  wantsToExperience: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Activity",
    },
  ],
  email: {
    type: String,
    required: true,
    unique: true,
  },
  organization: {},
});

module.exports = mongoose.model("User", userSchema);
