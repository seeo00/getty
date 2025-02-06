import { configureStore } from '@reduxjs/toolkit';
import mainR from './modules/mainSlice';

export const store = configureStore({
  reducer: { mainR },
});
