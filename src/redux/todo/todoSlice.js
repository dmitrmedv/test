import { createSlice } from "@reduxjs/toolkit";
import { fetchAll, addTodo, removeTodo } from "./operations";

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
      .addCase(addTodo.fulfilled, (state, actions) => {
        state.todos.push(actions.payload);
      })
      .addCase(removeTodo.fulfilled, (state, actions) => {
        state.todos = state.todos.filter(({ id }) => id !== actions.payload.id);
      }),
});

export const toDoSReducer = slice.reducer;
