import { createSlice } from '@reduxjs/toolkit';
import { originalMovieData } from '../../../assets/api/originalMovieData';
import { originalSeriesData } from '../../../assets/api/originalSeriesData';

const initialState = {
  originalMovieData,
  originalSeriesData,
};

const originalSlice = createSlice({
  name: 'original',
  initialState,
  reducers: {},
});

export const originalActions = originalSlice.actions;
export default originalSlice.reducer;
