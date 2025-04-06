// backend/seedOrganizations.js
const mongoose = require("mongoose");
require("dotenv").config();

const Organization = require("./models/Organizations");

const seedOrganizations = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const organizations = [
      { name: "Arc'teryx Academies" },
      { name: "Endemic Mountain Events" },
      { name: "Regional Experiences" },
      { name: "Local/Store Events & Activations" },
      { name: "Arc'teryx Communities" },
      { name: "No Wasted Days Grand Program" },
      { name: "Partnerships" },
    ];

    for (const org of organizations) {
      const exists = await Organization.findOne({ name: org.name });
      if (!exists) {
        await Organization.create(org);
        console.log(`✅ Added organization: ${org.name}`);
      } else {
        console.log(`⚠️  Skipped (already exists): ${org.name}`);
      }
    }

    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error seeding organizations:", err);
  }
};

seedOrganizations();
