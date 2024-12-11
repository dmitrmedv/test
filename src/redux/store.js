import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/counterSlice";
import { toDoSReducer } from "./todo/todoSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, todo: toDoSReducer },
});
