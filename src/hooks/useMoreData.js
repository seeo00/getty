import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCombinedMystery, getCombinedRomance } from '../store/modules/thunks/geThunk';
import { originalActions } from '../store/modules/slices/originalSlice';
import { getNewMovie } from '../store/modules/thunks/getNewMovie';
import { getUpcomingMovie } from '../store/modules/thunks/getUpcomingMovie';
import { getNewSeries } from '../store/modules/thunks/getNewSeries';
import { getUpcomingSeries } from '../store/modules/thunks/getUpcomingSeries';

export const useMoreData = (section) => {
  const dispatch = useDispatch();
  const { romanceContent, mysteryContent } = useSelector((state) => state.combinedR);
  const { newMovieData, upcomingMovieData } = useSelector((state) => state.movieR);
  const { newSeriesData, upcomingSeriesData } = useSelector((state) => state.seriesR);
  const { originalTopRated, originalKoreanSeries, originalGlobalSeries, originalMovies } = useSelector(
    (state) => state.originalR
  );

  const sectionData = useMemo(() => {
    switch (section) {
      case 'romanceContent':
        return romanceContent;
      case 'mysteryContent':
        return mysteryContent;
      case 'originalTopRated':
        return originalTopRated;
      case 'originalKoreanSeries':
        return originalKoreanSeries;
      case 'originalGlobalSeries':
        return originalGlobalSeries;
      case 'originalMovies':
        return originalMovies;
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
    originalTopRated,
    originalKoreanSeries,
    originalGlobalSeries,
    originalMovies,
    newMovieData,
    upcomingMovieData,
    newSeriesData,
    upcomingSeriesData,
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
