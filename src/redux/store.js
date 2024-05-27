// import { configureStore } from '@reduxjs/toolkit';
// import { apiSlice } from './services/apiSlice';
// import authReducer from './features/authSlice';

// export const makeStore = () => {
//   return configureStore({
//     reducer: {
//       [apiSlice.reducerPath]: apiSlice.reducer,
//       auth: authReducer,
//     },
//     middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
//     devTools: process.env.NODE_ENV !== 'production',
//   })
// }

import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './services/apiSlice';
import authReducer from './features/authSlice';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

// You can optionally create utility functions to get the state and dispatch
export const getRootState = () => store.getState();
export const getAppDispatch = () => store.dispatch;
