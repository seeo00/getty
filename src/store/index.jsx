import { configureStore } from '@reduxjs/toolkit';

const exampleReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});
