import axios from 'axios';

// Create an axios instance with a base URL from environment variable
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL || 'http://localhost:8000/',
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

export default axiosInstance;
