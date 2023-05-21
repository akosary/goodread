import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice";
import categorySlice from "Redux/categorySlice";
// import { popularBooksSlice } from "Redux/home/popularBookSlice";

const store = configureStore({
  reducer: {
    userDashboard: dataReducer,
    categorySlice,
    // popularBooksSlice,
  },
});

export default store;
