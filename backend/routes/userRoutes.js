const express = require("express");
const router = express.Router();
const { createUser, getUsers } = require("../controllers/userController");

// POST /users
router.post("/", createUser);
router.get("/", getUsers); // ✅ This defines GET /users

module.exports = router;
