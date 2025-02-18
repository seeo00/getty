import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDrama } from '../thunks/getDrama';
import { getMovie } from '../thunks/getMovie';

export const getCombinedRomance = createAsyncThunk('combined/getCombinedRomance', async (_, { dispatch }) => {
  try {
    const [dramaResult, movieResult] = await Promise.all([
      dispatch(getDrama({ category: 'romance', currentPage: 1 })).unwrap(),
      dispatch(getMovie({ category: 'romance', currentPage: 1 })).unwrap(),
    ]);

    const combinedResults = [...dramaResult.dramas, ...movieResult.movies];
    const sortedResults = combinedResults.sort((a, b) => b.popularity - a.popularity);
    return {
      romanceContent: sortedResults,
      totalCount: sortedResults.length,
    };
  } catch (error) {
    console.error(error);
  }
});

export const getCombinedMystery = createAsyncThunk('combined/getCombinedMystery', async (_, { dispatch }) => {
  try {
    const [dramaResult, movieResult] = await Promise.all([
      dispatch(getDrama({ category: 'mystery', currentPage: 1 })).unwrap(),
      dispatch(getMovie({ category: 'mystery', currentPage: 1 })).unwrap(),
    ]);

    const combinedResults = [...dramaResult.dramas, ...movieResult.movies];
    const sortedResults = combinedResults.sort((a, b) => b.popularity - a.popularity);
    return {
      mysteryContent: sortedResults,
      totalCount: sortedResults.length,
    };
  } catch (error) {
    console.error(error);
  }
});
