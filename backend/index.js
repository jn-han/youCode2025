const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load env variables

const userRoutes = require("./routes/userRoutes");
const activityRoutes = require("./routes/activityRoutes");
const eventRoutes = require("./routes/eventRoutes");
const organizationRoutes = require("./routes/organizationRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/organizations", organizationRoutes);
app.use("/users", userRoutes);
app.use("/activities", activityRoutes);
app.use("/events", eventRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
