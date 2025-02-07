import { createSlice } from '@reduxjs/toolkit';
import { getDocumentary } from '../thunks/getDocumentary';

const initialState = {
  documentaryData: [],
  currentCategory: 'base',
  currentPage: 1,
  hasMore: true,
  loading: false,
  error: null,
};

const documentarySlice = createSlice({
  name: 'documentary',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
      state.currentPage = 1;
      state.documentaryData = [];
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDocumentary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDocumentary.fulfilled, (state, action) => {
        state.loading = false;
        state.documentaryData = action.payload.documentaries;
        state.hasMore = action.payload.hasMore;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(getDocumentary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const documentaryActions = documentarySlice.actions;
export default documentarySlice.reducer;
