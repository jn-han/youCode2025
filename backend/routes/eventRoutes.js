// routes/eventRoutes.js
const express = require("express");
const router = express.Router();
const {
  createEvent,
  getEvents,
  getEventById,
} = require("../controllers/eventController");

// POST /events - Create a new event
router.post("/", createEvent);

// GET /events - Get all events
router.get("/", getEvents);

// GET /events/:id - Get event by ID
router.get("/:id", getEventById);

module.exports = router;
