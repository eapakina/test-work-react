import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './slices/serviceSlice';


export const store = configureStore({
  reducer: {
    service: servicesReducer,
  },
});

