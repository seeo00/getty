import { createSlice } from '@reduxjs/toolkit';
import { originalData } from '../../../assets/api/originalData';

const initialState = {
  originalData: originalData,
  originalTopRated: [],
  originalFeatured: [],
  originalKoreanSeries: [],
  originalGlobalSeries: [],
  originalMovies: [],
  editorRecommend: [],
};

const originalSlice = createSlice({
  name: 'original',
  initialState,
  reducers: {
    filterdFeature: (state) => {
      state.originalFeatured = state.originalData.filter((item) => item.logo);
    },
    sortedTopRated: (state) => {
      state.originalTopRated = [...state.originalData].sort((a, b) => b.vote_average - a.vote_average);
    },
    filteredKoreanSeries: (state) => {
      state.originalKoreanSeries = [...state.originalData]
        .filter((item) => item.original_language === 'ko' && item.media_type === 'tv')
        .sort((a, b) => b.popularity - a.popularity);
    },
    filteredGlobalSeries: (state) => {
      state.originalGlobalSeries = [...state.originalData]
        .filter((item) => item.original_language !== 'ko' && item.media_type === 'tv')
        .sort((a, b) => b.popularity - a.popularity);
    },
    filteredMovies: (state) => {
      state.originalMovies = [...state.originalData]
        .filter((item) => item.media_type === 'movie')
        .sort((a, b) => b.popularity - a.popularity);
    },
    filteredRecommend: (state) => {
      state.editorRecommend = [...state.originalData]
        .filter((item) => item.type === 'recommend')
        .sort((a, b) => b.popularity - a.popularity);
    },
  },
});

export const originalActions = originalSlice.actions;
export default originalSlice.reducer;
