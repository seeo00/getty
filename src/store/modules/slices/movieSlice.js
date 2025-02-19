import { createSlice } from '@reduxjs/toolkit';
import { getMovie } from '../thunks/getMovie';
import { getNewMovie } from '../thunks/getNewMovie';
import { getUpcomingMovie } from '../thunks/getUpcomingMovie';

const initialState = {
  movieData: [],
  newMovieData: [],
  upcomingMovieData: [],
  currentCategory: 'base',
  currentPage: 1,
  hasMore: true,
  loading: false,
  error: null,
  // loading: {
  //   movie: false,
  //   upcoming: false,
  //   new: false,
  // },
  // error: {
  //   movie: null,
  //   upcoming: null,
  //   new: null,
  // },
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
      state.currentPage = 1;
      state.movieData = [];
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder

      // getMoive
      .addCase(getMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.movieData = action.payload.movies;
        state.hasMore = action.payload.hasMore;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // getNewMovie
      .addCase(getNewMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNewMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.newMovieData = action.payload;
      })
      .addCase(getNewMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // getUpcomingMovie
      .addCase(getUpcomingMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUpcomingMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.upcomingMovieData = action.payload;
      })
      .addCase(getUpcomingMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
