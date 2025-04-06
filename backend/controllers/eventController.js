const Activity = require("../models/Activity");

const createEvent = async (req, res) => {
  try {
    const { name, date, location, host, difficulty, eventDetails } = req.body;

    // Validation check (optional)
    if (
      !name ||
      !date ||
      !location ||
      !host ||
      host.length === 0 ||
      !eventDetails
    ) {
      return res
        .status(400)
        .json({ message: "Missing required event fields." });
    }

    const newEvent = new Activity({
      name,
      date,
      location,
      host,
      difficulty,
      eventDetails,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    console.error("❌ Error creating event:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Activity.find().populate(
      "host",
      "firstName lastName email"
    );
    res.status(200).json(events);
  } catch (err) {
    console.error("❌ Error fetching events:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  createEvent,
  getEvents,
};
