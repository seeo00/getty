import { configureStore } from '@reduxjs/toolkit';
import dramaR from './modules/slices/dramaSlice';
import documentaryR from './modules/slices/documentarySlice';
import animationR from './modules/slices/animationSlice';
import realityR from './modules/slices/realitySlice';
import movieR from './modules/slices/movieSlice';
import trendingR from './modules/slices/trendingSlice';
import seriesR from './modules/slices/seriesSlice';
import originalR from './modules/slices/originalSlice';
import mainR from './modules/slices/mainSlice';
import authR from './modules/slices/authSlice';
import detailsR from './modules/slices/detailsSlice';
import combinedR from './modules/slices/combinedSlice';
import episodeR from './modules/slices/episodeSlice';
import RecommendationR from './modules/slices/recommendationSlice'

export const store = configureStore({
  reducer: {
    dramaR,
    documentaryR,
    animationR,
    realityR,
    movieR,
    trendingR,
    seriesR,
    originalR,
    mainR,
    authR,
    detailsR,
    combinedR,
    episodeR,
		RecommendationR,
  },
});
