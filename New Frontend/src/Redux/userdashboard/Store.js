import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice";
import categorySlice from "Redux/categorySlice";

const store = configureStore({
  reducer: {
    userDashboard: dataReducer,
    categorySlice,
  },
});

export default store;
