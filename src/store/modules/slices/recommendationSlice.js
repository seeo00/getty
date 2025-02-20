import { createSlice } from '@reduxjs/toolkit';
import { getReality } from '../thunks/getReality';
import { getRecommendations } from '../thunks/getRecommendations';

const initialState = {
  realityData: [],
  currentCategory: 'base',
  currentPage: 1,
  hasMore: true,
  loading: false,
  error: null,
};

const RecommendationSlice = createSlice({
  name: 'reality',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
      state.currentPage = 1;
      state.realityData = [];
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
        state.realityData = action.payload.realities;
        state.hasMore = action.payload.hasMore;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(getRecommendations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const RecommendationActions = RecommendationSlice.actions;
export default RecommendationSlice.reducer;
