import { createSlice } from '@reduxjs/toolkit';
import { originalData } from '../../../assets/api/originalData';

const initialState = {
  originalData: originalData,
  originalTopRated: [],
  originalFeatured: [],
  originalKoreanSeries: [],
  originalGlobalSeries: [],
  originalMovies: [],
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
  },
});

export const originalActions = originalSlice.actions;
export default originalSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { originalData } from '../../../assets/api/originalData';

// const initialState = {
//   originalData: originalData,
//   originalTopRated: [],
//   originalFeatured: [],
//   originalKoreanSeries: [],
//   originalGlobalSeries: [],
//   originalMovies: [],
//   hasMore: false,
// };

// const originalSlice = createSlice({
//   name: 'original',
//   initialState,
//   reducers: {
//     filterdFeature: (state) => {
//       const filteredItems = state.originalData.filter((item) => item.logo);
//       state.originalFeatured = filteredItems;
//       state.hasMore = filteredItems.length > 20;
//     },
//     sortedTopRated: (state) => {
//       const sortedItems = [...state.originalData].sort((a, b) => b.vote_average - a.vote_average);
//       state.originalTopRated = sortedItems;
//       state.hasMore = sortedItems.length > 20;
//     },
//     filteredKoreanSeries: (state) => {
//       const filteredItems = [...state.originalData]
//         .filter((item) => item.original_language === 'ko' && item.media_type === 'tv')
//         .sort((a, b) => b.popularity - a.popularity);
//       state.originalKoreanSeries = filteredItems;
//       state.hasMore = filteredItems.length > 20;
//     },
//     filteredGlobalSeries: (state) => {
//       const filteredItems = [...state.originalData]
//         .filter((item) => item.original_language !== 'ko' && item.media_type === 'tv')
//         .sort((a, b) => b.popularity - a.popularity);
//       state.originalGlobalSeries = filteredItems;
//       state.hasMore = filteredItems.length > 20;
//     },
//     filteredMovies: (state) => {
//       const filteredItems = [...state.originalData]
//         .filter((item) => item.media_type === 'movie')
//         .sort((a, b) => b.popularity - a.popularity);
//       state.originalMovies = filteredItems;
//       state.hasMore = filteredItems.length > 20;
//     },
//   },
// });

// export const originalActions = originalSlice.actions;
// export default originalSlice.reducer;
