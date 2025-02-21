import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDrama } from '../thunks/getDrama';
import { getMovie } from '../thunks/getMovie';
import { getAnimation } from './getAnimation';

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

export const getCombinedComedy = createAsyncThunk('combined/getCombinedComedy', async (_, { dispatch }) => {
  try {
    const [dramaResult, movieResult] = await Promise.all([
      dispatch(getDrama({ category: 'comedy', currentPage: 1 })).unwrap(),
      dispatch(getMovie({ category: 'comedy', currentPage: 1 })).unwrap(),
    ]);
    const combinedResults = [...dramaResult.dramas, ...movieResult.movies];
    const sortedResults = combinedResults.sort((a, b) => b.popularity - a.popularity);
    return {
      comedyContent: sortedResults,
      totalCount: sortedResults.length,
    };
  } catch (error) {
    console.error(error);
  }
});

export const getCombinedRealistic = createAsyncThunk('combined/getCombinedRealistic', async (_, { dispatch }) => {
  try {
    const [medicalResult, lawyerResult, officeResult] = await Promise.all([
      dispatch(getDrama({ category: 'medical', currentPage: 1 })).unwrap(),
      dispatch(getDrama({ category: 'lawyer', currentPage: 1 })).unwrap(),
      dispatch(getDrama({ category: 'office', currentPage: 1 })).unwrap(),
    ]);

    const combinedResults = [...medicalResult.dramas, ...lawyerResult.dramas, ...officeResult.dramas];

    const sortedResults = combinedResults.sort((a, b) => b.popularity - a.popularity);

    return {
      realisticContent: sortedResults,
      totalCount: sortedResults.length,
    };
  } catch (error) {
    console.error(error);
  }
});

export const getCombinedAnimation = createAsyncThunk('combined/getCombinedAnimation', async (_, { dispatch }) => {
  try {
    const [movieAnimationResult, baseAnimationResult] = await Promise.all([
      dispatch(getMovie({ category: 'animation', currentPage: 1 })).unwrap(),
      dispatch(getAnimation({ category: 'base', currentPage: 1 })).unwrap(),
    ]);

    const combinedResults = [...movieAnimationResult.movies, ...baseAnimationResult.animations];

    const sortedResults = combinedResults.sort((a, b) => b.popularity - a.popularity);

    return {
      animationContent: sortedResults,
      totalCount: sortedResults.length,
    };
  } catch (error) {
    console.error(error);
  }
});

export const getCombinedFamily = createAsyncThunk('combined/getCombinedFamily', async (_, { dispatch }) => {
  try {
    const [movieResult, animationResult] = await Promise.all([
      dispatch(getMovie({ category: 'family', currentPage: 1 })).unwrap(),
      dispatch(getAnimation({ category: 'kids', currentPage: 1 })).unwrap(),
    ]);

    const combinedResults = [...movieResult.movies, ...animationResult.animations];
    const sortedResults = combinedResults.sort((a, b) => b.popularity - a.popularity);

    return {
      familyContent: sortedResults,
      totalCount: sortedResults.length,
    };
  } catch (error) {
    console.error(error);
  }
});
