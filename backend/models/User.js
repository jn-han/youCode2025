const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  organization: { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
  experiencedActivities: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Activity" },
  ],
  wantsToExperience: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Activity" },
  ],
});

module.exports = mongoose.model("User", userSchema);
