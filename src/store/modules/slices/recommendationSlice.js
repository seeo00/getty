import { createSlice } from '@reduxjs/toolkit';
import { getTVRecommendations, getMovieRecommendations } from '../thunks/getDetailsThunks';

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
    // TV 추천 처리
    builder
      .addCase(getTVRecommendations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTVRecommendations.fulfilled, (state, action) => {
        state.loading = false;
        state.Recommendations = action.payload;
        // 필요 시 다른 상태 업데이트
      })
      .addCase(getTVRecommendations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      
    // 영화 추천 처리
    builder
      .addCase(getMovieRecommendations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieRecommendations.fulfilled, (state, action) => {
        state.loading = false;
        state.Recommendations = action.payload;
        // 필요 시 다른 상태 업데이트
      })
      .addCase(getMovieRecommendations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const recommendationActions = recommendationSlice.actions;
export default recommendationSlice.reducer;
