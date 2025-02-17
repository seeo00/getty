import { createSlice } from '@reduxjs/toolkit';
import { originalData } from '../../../assets/api/originalData';

const initialState = {
  // originalMovieData,
  // originalSeriesData,
  originalData,
};

const originalSlice = createSlice({
  name: 'original',
  initialState,
  reducers: {},
});

export const originalActions = originalSlice.actions;
export default originalSlice.reducer;
