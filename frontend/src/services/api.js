import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBookingsByEmail = async (email) => {
  const response = await api.get(`/api/bookings/${email}`);
  return response.data;
};

export const getPrasadByEmail = async (email) => {
  const response = await api.get(`/api/prasad/${email}`);
  return response.data;
};

export default api;
