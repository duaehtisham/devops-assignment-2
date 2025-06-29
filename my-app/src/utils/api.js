import axios from 'axios';

// Replace with your IP-based backend API
export const API = axios.create({
  baseURL: 'http://192.168.49.2:30010/' ,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use((config) => {
  return config;
});
