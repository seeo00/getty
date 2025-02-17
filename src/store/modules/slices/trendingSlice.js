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
        state.loading.day = true;
        state.error.day = null;
      })
      .addCase(getTrendingDay.fulfilled, (state, action) => {
        state.loading.day = false;
        state.trendingDayData = action.payload;
      })
      .addCase(getTrendingDay.rejected, (state, action) => {
        state.loading.day = false;
        state.error.day = action.error.message;
      })

      // 주간 트렌딩
      .addCase(getTrendingWeek.pending, (state) => {
        state.loading.week = true;
        state.error.week = null;
      })
      .addCase(getTrendingWeek.fulfilled, (state, action) => {
        state.loading.week = false;
        state.trendingWeekData = action.payload;
      })
      .addCase(getTrendingWeek.rejected, (state, action) => {
        state.loading.week = false;
        state.error.week = action.error.message;
      });
  },
});

export const trendingActions = trendingSlice.actions;
export default trendingSlice.reducer;
