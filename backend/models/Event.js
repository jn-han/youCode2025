const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  host: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  difficulty: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
  eventDetails: { type: String, required: true },
  whatToBring: [String],
});

module.exports = mongoose.model("Event", eventSchema);
