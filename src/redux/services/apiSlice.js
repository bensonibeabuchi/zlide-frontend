'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth, logout } from '../features/authSlice';
import { Mutex } from 'async-mutex';


const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  // baseUrl: 'https://zlide-backend-production.up.railway.app/api',
  baseUrl: 'http://localhost:8000/api',
  credentials: 'include',
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  // if (result.error) {
  //   console.error('ERROR from HERE apiSlice:', result.error);
  // }

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          {
            url: '/jwt/refresh/',
            method: 'POST',
            headers: {
              Authorization: `JWT ${localStorage.getItem('access')}`
          },
    			body: { refresh: refreshToken }, // Include the refresh token in the request body
          },
          api,
          extraOptions
        );
		// console.log('REFRSHRESULT:', refreshResult)

        if (refreshResult.data) {
          api.dispatch(setAuth(refreshResult.data)); // Ensure you pass the correct data
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logout());
        }
      } catch (refreshError) {
        console.error('Refresh token request failed:', refreshError);
        api.dispatch(logout());
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }

    if (result.error && result.error.status === 401) {
      api.dispatch(logout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
