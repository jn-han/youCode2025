const express = require("express");
const router = express.Router();
const Organizations = require("../models/Organizations");

// GET all organizations
router.get("/", async (req, res) => {
  try {
    const orgs = await Organizations.find();
    res.json(orgs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
