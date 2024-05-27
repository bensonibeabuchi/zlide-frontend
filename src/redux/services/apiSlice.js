'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth, logout } from '../features/authSlice';
import { Mutex } from 'async-mutex';
import Cookies from 'js-cookie';


const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:8000/api',
  credentials: 'include',
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    console.error('ERROR from HERE apiSlice:', result.error);
  }

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
		// Get the refresh token from cookies
        const refreshToken = Cookies.get('refresh');
        const accessToken = Cookies.get('access');
		console.log('ACCESS TOKEN:', accessToken);
		console.log('REFRESH TOKEN:', refreshToken);
		
		if (!refreshToken) {
			throw new Error('No refresh token found');
		  }

        const refreshResult = await baseQuery(
          {
            url: '/jwt/refresh/',
            method: 'POST',
			body: { refresh: refreshToken }, // Include the refresh token in the request body
          },
          api,
          extraOptions
        );
		console.log('REFRSHRESULT:', refreshResult)

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
