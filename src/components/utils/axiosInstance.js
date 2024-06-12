import axios from 'axios';
import Cookies from 'js-cookie';

// Create an axios instance
const axiosInstance = axios.create({
//   baseURL: 'https://zlide-backend-production.up.railway.app/api',
  baseURL: 'http://localhost:8000/api',
  withCredentials: true, // Ensure cookies are sent with requests
});

// Add a request interceptor to add cookies and Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access');

  if (accessToken) {
    config.headers['Authorization'] = `JWT ${accessToken}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('refresh');
      if (refreshToken) {
        try {
          const response = await axiosInstance.post('/jwt/refresh/', { refresh: refreshToken });
          const { access } = response.data;

          localStorage.setItem('access', access);
          axiosInstance.defaults.headers['Authorization'] = `JWT ${access}`;
          originalRequest.headers['Authorization'] = `JWT ${access}`;

          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error('Refresh token request failed:', refreshError);
          // Handle token refresh failure
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
