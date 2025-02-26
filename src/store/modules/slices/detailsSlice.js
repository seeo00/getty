import { createSlice } from '@reduxjs/toolkit';
import { getDetails } from '../thunks/getDetailsThunks';

const initialState = {
  detailsData: null,
  loading: false,
  error: null,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        state.detailsData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const detailsActions = detailsSlice.actions;
export default detailsSlice.reducer;
