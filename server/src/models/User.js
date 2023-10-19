// server/src/models/User.js

const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // You can add more fields here as needed (e.g., name, role, etc.)
});

// Create a User model from the schema
const User = mongoose.model("User", userSchema);

module.exports = User;
