import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:3500";
const authToken = localStorage.getItem("authToken");

export const findAll = createAsyncThunk("category/findAll", async () => {
  return (
    await axios.get(`${url}/categories`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
  ).data;
});

export const addCategory = createAsyncThunk("category/addCategory", async ({ name }) => {
  await axios.post(`${url}/categories`, { name });
});

export const editCategory = createAsyncThunk("category/editCategory", async (category) => {
  await axios.put(`${url}/categories/${category._id}`, {
    name: category.name,
  });
});

export const deleteCategory = createAsyncThunk("category/deleteCategory", async (_id) => {
  await axios.delete(`${url}/categories/${_id}`);
});

export const categoryDetails = createAsyncThunk("category/findAllBooks", async (_id) => {
  return (await axios.get(`${url}/categories/${_id}/books`)).data;
});

export const popular = createAsyncThunk("category/popular", async () => {
  return (await axios.get(`${url}/books/popularBooks`)).data;
});
