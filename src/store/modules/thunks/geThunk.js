import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDrama } from '../thunks/getDrama';
import { getMovie } from '../thunks/getMovie';
import { getAnimation } from '../thunks/getAnimation';

export const CONTENT_CONFIGS = {
  romance: {
    name: 'Romance',
    sources: [
      { thunk: getDrama, category: 'romance', resultKey: 'dramas' },
      { thunk: getMovie, category: 'romance', resultKey: 'movies' },
    ],
    outputKey: 'romanceContent',
  },
  mystery: {
    name: 'Mystery',
    sources: [
      { thunk: getDrama, category: 'mystery', resultKey: 'dramas' },
      { thunk: getMovie, category: 'mystery', resultKey: 'movies' },
    ],
    outputKey: 'mysteryContent',
  },
  comedy: {
    name: 'Comedy',
    sources: [
      { thunk: getDrama, category: 'comedy', resultKey: 'dramas' },
      { thunk: getMovie, category: 'comedy', resultKey: 'movies' },
    ],
    outputKey: 'comedyContent',
  },
  realistic: {
    name: 'Realistic',
    sources: [
      { thunk: getDrama, category: 'medical', resultKey: 'dramas' },
      { thunk: getDrama, category: 'lawyer', resultKey: 'dramas' },
      { thunk: getDrama, category: 'office', resultKey: 'dramas' },
    ],
    outputKey: 'realisticContent',
  },
  animation: {
    name: 'Animation',
    sources: [
      { thunk: getMovie, category: 'animation', resultKey: 'movies' },
      { thunk: getAnimation, category: 'base', resultKey: 'animations' },
    ],
    outputKey: 'animationContent',
  },
  family: {
    name: 'Family',
    sources: [
      { thunk: getMovie, category: 'family', resultKey: 'movies' },
      { thunk: getAnimation, category: 'kids', resultKey: 'animations' },
    ],
    outputKey: 'familyContent',
  },
};

const createCombinedContentThunk = (contentType, config) => {
  return createAsyncThunk(`combined/getCombined${config.name}`, async (_, { dispatch }) => {
    try {
      const results = await Promise.all(
        config.sources.map((source) =>
          dispatch(
            source.thunk({
              category: source.category,
              currentPage: 1,
            })
          ).unwrap()
        )
      );

      const combinedResults = results.flatMap((result, index) => result[config.sources[index].resultKey] || []);

      const sortedResults = combinedResults.sort((a, b) => b.popularity - a.popularity);

      return {
        [config.outputKey]: sortedResults,
        totalCount: sortedResults.length,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
};

export const getCombinedRomance = createCombinedContentThunk('romance', CONTENT_CONFIGS.romance);
export const getCombinedMystery = createCombinedContentThunk('mystery', CONTENT_CONFIGS.mystery);
export const getCombinedComedy = createCombinedContentThunk('comedy', CONTENT_CONFIGS.comedy);
export const getCombinedRealistic = createCombinedContentThunk('realistic', CONTENT_CONFIGS.realistic);
export const getCombinedAnimation = createCombinedContentThunk('animation', CONTENT_CONFIGS.animation);
export const getCombinedFamily = createCombinedContentThunk('family', CONTENT_CONFIGS.family);
