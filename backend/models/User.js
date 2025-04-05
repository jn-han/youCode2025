const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
  const newUser = new UserActivation(req.body);
  const saved = await newUser.save();
  res.json(saved);
});
