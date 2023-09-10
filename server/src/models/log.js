const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
});

module.exports = mongoose.model("Log", logSchema);
