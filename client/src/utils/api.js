import axios from "axios";

const BASE_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: BASE_URL,
});

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

export const login = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
