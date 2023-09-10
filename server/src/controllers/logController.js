const Log = require("../models/log");

// Get all travel logs
const getAllLogs = async (req, res) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a travel log by ID
const getLogById = async (req, res) => {
  const { id } = req.params;
  try {
    const log = await Log.findById(id);
    if (!log) {
      return res.status(404).json({ error: "Log not found" });
    }
    res.json(log);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new travel log
const createLog = async (req, res) => {
  const { title, description, location, date } = req.body;
  try {
    const newLog = new Log({ title, description, location, date });
    const savedLog = await newLog.save();
    res.status(201).json(savedLog);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};

// Update a travel log by ID
const updateLog = async (req, res) => {
  const { id } = req.params;
  const { title, description, location, date } = req.body;
  try {
    const updatedLog = await Log.findByIdAndUpdate(id, {
      title,
      description,
      location,
      date,
    });
    if (!updatedLog) {
      return res.status(404).json({ error: "Log not found" });
    }
    res.json(updatedLog);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};

// Delete a travel log by ID
const deleteLog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedLog = await Log.findByIdAndRemove(id);
    if (!deletedLog) {
      return res.status(404).json({ error: "Log not found" });
    }
    res.json(deletedLog);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllLogs,
  getLogById,
  createLog,
  updateLog,
  deleteLog,
};
