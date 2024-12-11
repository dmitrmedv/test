import { createSlice } from "@reduxjs/toolkit";
import { fetchAll } from "./operations";

const initialState = {
  todos: [],
};

export const slice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (build) =>
    build
      .addCase(fetchAll.fulfilled, (state, actions) => {
        state.todos = actions.payload;
      })
      .addCase(fetchAll.rejected, (state) => {
        state.todos = "";
      }),
});

export const toDoSReducer = slice.reducer;
