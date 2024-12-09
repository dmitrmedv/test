import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
  step: 1,
};

export const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return (state = { ...state, count: state.count + 1 });
    },
    decrement: (state) => {
      return (state = { ...state, count: state.count - 1 });
    },
  },
});

export const { increment, decrement } = slice.actions;
export const counterReducer = slice.reducer;
