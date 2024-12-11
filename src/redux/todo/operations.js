import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAll = createAsyncThunk(
  "todo/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/todos`);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
