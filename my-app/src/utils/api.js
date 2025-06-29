import axios from 'axios';

// Replace with your IP-based backend API
export const API = axios.create({
  baseURL: 'http://backend-service:5000/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use((config) => {
  return config;
});
