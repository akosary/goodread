import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:3001";

export const findAll = createAsyncThunk("category/findAll", async () => {
  return (await axios.get(`${url}/categories`)).data;
});

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (category) => {
    await axios.post(`${url}/categories`, category);
  },
);

export const editCategory = createAsyncThunk(
  "category/editCategory",
  async (category) => {
    await axios.put(`${url}/categories/${category._id}`, {
      name: category.name,
    });
  },
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (_id) => {
    await axios.delete(`${url}/categories/${_id}`);
  },
);

export const categoryDetails = createAsyncThunk(
  "category/findAllBooks",
  async (_id) => {
    return (await axios.get(`${url}/categories/${_id}/books`)).data;
  },
);
