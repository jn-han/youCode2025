// controllers/eventController.js
const Event = require("../models/Event");
const User = require("../models/User");

// Create a new event
const createEvent = async (req, res) => {
  try {
    const {
      name,
      date,
      location,
      host,
      difficulty,
      eventDetails,
      whatToBring = [],
    } = req.body;

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

    const newEvent = new Event({
      name,
      date,
      location,
      host,
      difficulty,
      eventDetails,
      whatToBring,
    });

    const savedEvent = await newEvent.save();
    console.log("Saved event:", savedEvent);

    res.status(201).json(savedEvent);
  } catch (err) {
    console.error("❌ Error creating event:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate(
      "host",
      "firstName lastName email"
    );
    res.status(200).json(events);
  } catch (err) {
    console.error("❌ Error fetching events:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get a single event by ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate(
      "host",
      "firstName lastName email"
    );
    if (!event) return res.status(404).json({ message: "Event not found." });
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  createEvent,
  getEvents,
  getEventById,
};
