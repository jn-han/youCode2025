// routes/organization.js
const express = require("express");
const router = express.Router();
const Organization = require("../models/Organizations");

// GET /organizations
router.get("/", async (req, res) => {
  const orgs = await Organization.find();
  res.json(orgs);
});

module.exports = router;
