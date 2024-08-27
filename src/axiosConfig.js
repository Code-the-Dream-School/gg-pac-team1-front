// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1', // Cambia esto si tu backend está en otra dirección
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
