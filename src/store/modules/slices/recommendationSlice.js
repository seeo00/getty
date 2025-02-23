import { createSlice } from '@reduxjs/toolkit';
import { getRecommendations } from '../thunks/getRecommendations';

const initialState = {
  recommendations: [],
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
      state.recommendations = [];
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
        if (state.currentPage === 1) {
          state.recommendations = action.payload;
        } else {
          state.recommendations = [...state.recommendations, ...action.payload];
        }
        state.hasMore = action.payload.length > 0;
        state.currentPage += 1;
      })
      .addCase(getRecommendations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const recommendationActions = recommendationSlice.actions;
export default recommendationSlice.reducer;
