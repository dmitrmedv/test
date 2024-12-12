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

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async (body, thunkApi) => {
    try {
      const currentState = thunkApi.getState().todo.todos;
      if (currentState.find((item) => item.name === body.name)) {
        console.log("все існує....");
        return thunkApi.rejectWithValue("error");
      }
      const { data } = await axios.post(`http://localhost:3000/todos`, body);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const removeTodo = createAsyncThunk(
  "todo/removeTodo",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`http://localhost:3000/todos/${id}`);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
