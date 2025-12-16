import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/admin", // backend base URL
});

// Signup API
export const signup = (data) => API.post("/signup", data);

// Login API
export const login = (data) => API.post("/login", data);
