import { createSlice } from '@reduxjs/toolkit';
import {
  getCombinedRomance,
  getCombinedMystery,
  getCombinedComedy,
  getCombinedRealistic,
  getCombinedAnimation,
  getCombinedFamily,
} from '../thunks/getCombinedThunks';

const initialState = {
  romanceContent: [],
  mysteryContent: [],
  comedyContent: [],
  realisticContent: [],
  animationContent: [],
  familyContent: [],
  loading: false,
  error: null,
};

const combinedContentSlice = createSlice({
  name: 'combinedContent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Romance
    builder
      .addCase(getCombinedRomance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCombinedRomance.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.romanceContent = action.payload.romanceContent;
        }
      })
      .addCase(getCombinedRomance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Mystery
      .addCase(getCombinedMystery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCombinedMystery.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.mysteryContent = action.payload.mysteryContent;
        }
      })
      .addCase(getCombinedMystery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Comedy
      .addCase(getCombinedComedy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCombinedComedy.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.comedyContent = action.payload.comedyContent;
        }
      })
      .addCase(getCombinedComedy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Realistic
      .addCase(getCombinedRealistic.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCombinedRealistic.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.realisticContent = action.payload.realisticContent;
        }
      })
      .addCase(getCombinedRealistic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Animation
      .addCase(getCombinedAnimation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCombinedAnimation.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.animationContent = action.payload.animationContent;
        }
      })
      .addCase(getCombinedAnimation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Family
      .addCase(getCombinedFamily.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCombinedFamily.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.familyContent = action.payload.familyContent;
        }
      })
      .addCase(getCombinedFamily.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default combinedContentSlice.reducer;
