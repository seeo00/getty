import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    onOpen: (state, action) => {
      state.isOpen = true;
    },
    onClose: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const mainActions = mainSlice.actions;
export default mainSlice.reducer;
