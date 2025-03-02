import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCombinedAnimation,
  getCombinedComedy,
  getCombinedFamily,
  getCombinedMystery,
  getCombinedRealistic,
  getCombinedRomance,
} from '../store/modules/thunks/getCombinedThunks';
import { originalActions } from '../store/modules/slices/originalSlice';
import {
  getNewMovie,
  getNewSeries,
  getUpcomingMovie,
  getUpcomingSeries,
} from '../store/modules/thunks/getCommonThunks';

export const useMoreData = (section) => {
  const dispatch = useDispatch();
  const { romanceContent, mysteryContent, comedyContent, realisticContent, animationContent, familyContent } =
    useSelector((state) => state.combinedR);
  const { newMovieData, upcomingMovieData } = useSelector((state) => state.movieR);
  const { newSeriesData, upcomingSeriesData } = useSelector((state) => state.seriesR);
  const { originalTopRated, originalKoreanSeries, originalGlobalSeries, originalMovies, editorRecommend } = useSelector(
    (state) => state.originalR
  );

  const sectionData = useMemo(() => {
    switch (section) {
      case 'romanceContent':
        return romanceContent;
      case 'mysteryContent':
        return mysteryContent;
      case 'comedyContent':
        return comedyContent;
      case 'realisticContent':
        return realisticContent;
      case 'animationContent':
        return animationContent;
      case 'familyContent':
        return familyContent;
      case 'originalTopRated':
        return originalTopRated;
      case 'originalKoreanSeries':
        return originalKoreanSeries;
      case 'originalGlobalSeries':
        return originalGlobalSeries;
      case 'originalMovies':
        return originalMovies;
      case 'editorRecommend':
        return editorRecommend;
      case 'newMovieData':
        return newMovieData;
      case 'upcomingMovieData':
        return upcomingMovieData;
      case 'newSeriesData':
        return newSeriesData;
      case 'upcomingSeriesData':
        return upcomingSeriesData;
      default:
        return [];
    }
  }, [
    section,
    romanceContent,
    mysteryContent,
    comedyContent,
    realisticContent,
    animationContent,
    familyContent,
    originalTopRated,
    originalKoreanSeries,
    originalGlobalSeries,
    originalMovies,
    newMovieData,
    upcomingMovieData,
    newSeriesData,
    upcomingSeriesData,
    editorRecommend,
  ]);

  useEffect(() => {
    if (!sectionData.length) {
      switch (section) {
        case 'romanceContent':
          dispatch(getCombinedRomance());
          break;
        case 'mysteryContent':
          dispatch(getCombinedMystery());
          break;
        case 'comedyContent':
          dispatch(getCombinedComedy());
          break;
        case 'realisticContent':
          dispatch(getCombinedRealistic());
          break;
        case 'animationContent':
          dispatch(getCombinedAnimation());
          break;
        case 'familyContent':
          dispatch(getCombinedFamily());
          break;
        case 'originalTopRated':
          dispatch(originalActions.sortedTopRated());
          break;
        case 'originalKoreanSeries':
          dispatch(originalActions.filteredKoreanSeries());
          break;
        case 'originalGlobalSeries':
          dispatch(originalActions.filteredGlobalSeries());
          break;
        case 'originalMovies':
          dispatch(originalActions.filteredMovies());
          break;
        case 'editorRecommend':
          dispatch(originalActions.filteredRecommend());
          break;
        case 'newMovieData':
          dispatch(getNewMovie());
          break;
        case 'upcomingMovieData':
          dispatch(getUpcomingMovie());
          break;
        case 'newSeriesData':
          dispatch(getNewSeries());
          break;
        case 'upcomingSeriesData':
          dispatch(getUpcomingSeries());
          break;
      }
    }
  }, [section, dispatch, sectionData]);

  return sectionData;
};
