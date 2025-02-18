import { createSlice } from '@reduxjs/toolkit';
import { getCombinedMystery, getCombinedRomance } from '../thunks/geThunk';

const initialState = {
  romanceContent: [],
  mysteryContent: [],
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
      });
  },
});

export const combinedActions = combinedSlice.actions;
export default combinedSlice.reducer;
