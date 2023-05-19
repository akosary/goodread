import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice";

const store = configureStore({
  reducer: {
    userDashboard: dataReducer,
  },
});

export default store;
