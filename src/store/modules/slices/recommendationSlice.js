import { createSlice } from '@reduxjs/toolkit';
import { getRecommendations } from '../thunks/getDetailsThunks';

const initialState = {
  Recommendations: [],
  currentCategory: 'base',
  currentPage: 1,
  hasMore: true,
  loading: false,
  error: null,
};

const recommendationSlice = createSlice({
  name: 'recommendation',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
      state.currentPage = 1;
      state.Recommendations = [];
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRecommendations.fulfilled, (state, action) => {
        state.loading = false;
        state.Recommendations = action.payload.recommendations;
        state.hasMore = action.payload.hasMore;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(getRecommendations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const recommendationActions = recommendationSlice.actions;
export default recommendationSlice.reducer;
