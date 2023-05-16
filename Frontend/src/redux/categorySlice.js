import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:3001";
const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: [],
  },
  reducers: {
    async findAll(state, action) {
      state.category.push(await axios.get(`${url}/categories`));
      console.log(state.category);
    },
  },
});

export const { findAll } = categorySlice.actions;
export default categorySlice.reducer;
