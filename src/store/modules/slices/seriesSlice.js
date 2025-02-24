import { createSlice } from '@reduxjs/toolkit';
import { getNewSeries, getUpcomingSeries } from '../thunks/getCommonThunks';

const initialState = {
  upcomingSeriesData: [],
  newSeriesData: [],
  loading: false,
  error: null,
};

const seriesSlice = createSlice({
  name: 'series',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // getNewSeries
      .addCase(getNewSeries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNewSeries.fulfilled, (state, action) => {
        state.loading = false;
        state.newSeriesData = action.payload;
      })
      .addCase(getNewSeries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // getUpcomingSeries
      .addCase(getUpcomingSeries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUpcomingSeries.fulfilled, (state, action) => {
        state.loading = false;
        state.upcomingSeriesData = action.payload;
      })
      .addCase(getUpcomingSeries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const seriesActions = seriesSlice.actions;
export default seriesSlice.reducer;
