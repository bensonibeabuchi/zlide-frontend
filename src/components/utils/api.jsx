import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/'; // Replace this with your API base URL

// Function to login
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/`, credentials);
    return response.data; // Assuming the server returns data containing tokens
  } catch (error) {
    throw error.response.data; // Throw the error response from the server
  }
};

// Function to logout
export const logout = async () => {
  try {
    await axios.post(`${API_BASE_URL}/logout/`);
    return true; // Logout successful
  } catch (error) {
    throw error.response.data; // Throw the error response from the server
  }
};
