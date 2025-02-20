import { createSlice } from '@reduxjs/toolkit';
import {
  getCombinedAnimation,
  getCombinedComedy,
  getCombinedFamily,
  getCombinedMystery,
  getCombinedRealistic,
  getCombinedRomance,
} from '../thunks/geThunk';

const initialState = {
  romanceContent: [],
  mysteryContent: [],
  comedyContent: [],
  realisticContent: [],
  animationContent: [],
  familyContent: [],
  totalCount: 0,
  loading: false,
  error: null,
};

const combinedSlice = createSlice({
  name: 'combined',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCombinedRomance.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCombinedRomance.fulfilled, (state, action) => {
        state.loading = false;
        state.romanceContent = action.payload.romanceContent;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(getCombinedRomance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //
      .addCase(getCombinedMystery.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCombinedMystery.fulfilled, (state, action) => {
        state.loading = false;
        state.mysteryContent = action.payload.mysteryContent;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(getCombinedMystery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //
      .addCase(getCombinedComedy.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCombinedComedy.fulfilled, (state, action) => {
        state.loading = false;
        state.comedyContent = action.payload.comedyContent;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(getCombinedComedy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //
      .addCase(getCombinedRealistic.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCombinedRealistic.fulfilled, (state, action) => {
        state.loading = false;
        state.realisticContent = action.payload.realisticContent;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(getCombinedRealistic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //
      .addCase(getCombinedAnimation.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCombinedAnimation.fulfilled, (state, action) => {
        state.loading = false;
        state.animationContent = action.payload.animationContent;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(getCombinedAnimation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //
      .addCase(getCombinedFamily.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCombinedFamily.fulfilled, (state, action) => {
        state.loading = false;
        state.familyContent = action.payload.familyContent;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(getCombinedFamily.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const combinedActions = combinedSlice.actions;
export default combinedSlice.reducer;
