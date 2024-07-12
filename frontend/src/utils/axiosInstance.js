import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    console.log("bhajiya");
    return config;
  },
  (error) => {
    console.log("imarti");
    return Promise.reject(error);
  }
);
export default axiosInstance;
