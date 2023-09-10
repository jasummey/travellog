import axios from "axios";

const BASE_URL = "http://localhost:5000"; // Replace with your backend API URL

// Create an instance of Axios with base URL
const api = axios.create({
  baseURL: BASE_URL,
});

// Define your API functions
export const getAllLogs = async () => {
  try {
    const response = await api.get("/logs");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLogById = async (logId) => {
  try {
    const response = await api.get(`/logs/${logId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createLog = async (logData) => {
  try {
    const response = await api.post("/add-log", logData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add more API functions for updating and deleting logs as needed

export default api;
