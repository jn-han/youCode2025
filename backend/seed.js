// backend/seedActivities.js
const mongoose = require("mongoose");
require("dotenv").config();

const Activity = require("./models/Activity");

const seedActivities = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const activities = [{ name: "Hiking" }, { name: "Rock Climbing (Indoor)" }];

    for (const activity of activities) {
      const exists = await Activity.findOne({ name: activity.name });
      if (!exists) {
        await Activity.create(activity);
        console.log(`✅ Added activity: ${activity.name}`);
      } else {
        console.log(`⚠️  Skipped (already exists): ${activity.name}`);
      }
    }

    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error seeding activities:", err);
  }
};

seedActivities();
