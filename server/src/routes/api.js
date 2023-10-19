const express = require("express");
const router = express.Router();
const logController = require("../controllers/logController");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = require("../middleware/authentication");

router.get("/logs", logController.getAllLogs);

router.get("/logs/:id", logController.getLogById);

router.post("/add-log", logController.createLog);

router.put("/logs/:id", logController.updateLog);

router.delete("/logs/:id", logController.deleteLog);

router.put("/logs/:id", logController.updateLog);

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  res.status(200).json({ message: "Registration successful" });
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
