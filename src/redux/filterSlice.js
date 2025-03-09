import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "All",
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      console.log("action ", action);
      console.dir(state);
      return {
        filter: action.payload,
      };
    },
  },
});

export const { setFilter } = slice.actions;
export default slice.reducer;
