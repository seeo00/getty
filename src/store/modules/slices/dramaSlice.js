import { createSlice } from '@reduxjs/toolkit';
import { getDrama } from '../thunks/getDrama';

const initialState = {
  dramaData: [],
  currentCategory: 'base',
  currentPage: 1,
  hasMore: true,
  loading: false,
  error: null,
};

const dramaSlice = createSlice({
  name: 'drama',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
      state.currentPage = 1;
      state.dramaData = [];
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDrama.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDrama.fulfilled, (state, action) => {
        state.loading = false;
        state.dramaData = action.payload.dramas;
        state.hasMore = action.payload.hasMore;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(getDrama.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const dramaActions = dramaSlice.actions;
export default dramaSlice.reducer;
