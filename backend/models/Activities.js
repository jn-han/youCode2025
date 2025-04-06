// models/Activities.js
const mongoose = require("mongoose");

const activitiesSchema = new mongoose.Schema({
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Activity",
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    required: false,
  },
});

module.exports = mongoose.model("Activities", activitiesSchema);
