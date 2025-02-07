import { createSlice } from '@reduxjs/toolkit';
import { getReality } from '../thunks/getReality';

const initialState = {
  realityData: [],
  currentCategory: 'base',
  currentPage: 1,
  hasMore: true,
  loading: false,
  error: null,
};

const realitySlice = createSlice({
  name: 'reality',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
      state.currentPage = 1;
      state.realityData = [];
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReality.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getReality.fulfilled, (state, action) => {
        state.loading = false;
        state.realityData = action.payload.realities;
        state.hasMore = action.payload.hasMore;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(getReality.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const realityActions = realitySlice.actions;
export default realitySlice.reducer;
