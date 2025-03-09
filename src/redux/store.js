import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    modals: modalReducer,
  },
});
