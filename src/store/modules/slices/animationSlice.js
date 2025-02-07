import { createSlice } from '@reduxjs/toolkit';
import { getAnimation } from '../thunks/getAnimation';

const initialState = {
  animationData: [],
  currentCategory: 'base',
  currentPage: 1,
  hasMore: true,
  loading: false,
  error: null,
};

const animationSlice = createSlice({
  name: 'animation',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
      state.currentPage = 1;
      state.animationData = [];
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAnimation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAnimation.fulfilled, (state, action) => {
        state.loading = false;
        state.animationData = action.payload.animations;
        state.hasMore = action.payload.hasMore;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(getAnimation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const animationActions = animationSlice.actions;
export default animationSlice.reducer;
