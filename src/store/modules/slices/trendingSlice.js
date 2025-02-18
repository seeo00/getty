import { createSlice } from '@reduxjs/toolkit';
import { getTrendingDay, getTrendingWeek } from '../thunks/getTrending';

const initialState = {
  trendingDayData: [],
  trendingWeekData: [],
  loading: false,
  error: null,
  // loading: {
  //   day: false,
  //   week: false,
  // },
  // error: {
  //   day: null,
  //   week: null,
  // },
};

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 일간 트렌딩
      .addCase(getTrendingDay.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTrendingDay.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingDayData = action.payload;
      })
      .addCase(getTrendingDay.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // 주간 트렌딩
      .addCase(getTrendingWeek.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTrendingWeek.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingWeekData = action.payload;
      })
      .addCase(getTrendingWeek.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const trendingActions = trendingSlice.actions;
export default trendingSlice.reducer;
