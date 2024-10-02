import axios from "axios";

// const REACT_BACKEND_URL = "http://localhost:8080/api"; //local
const REACT_BACKEND_URL = "https://socratic-teaching-backend.onrender.com/api"; //production

const restClient = axios.create({
  baseURL: REACT_BACKEND_URL,
});

restClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default restClient;
