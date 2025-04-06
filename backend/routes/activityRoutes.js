const express = require("express");
const router = express.Router();
const Activity = require("../models/Activity");

router.get("/", async (req, res) => {
  const search = req.query.search || "";
  try {
    const activities = await Activity.find({
      name: { $regex: search, $options: "i" },
    }).limit(10); // limit results

    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
});

module.exports = router;
