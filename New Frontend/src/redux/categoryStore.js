import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";

const categoryStore = configureStore({
  reducer: categorySlice,
});
export default categoryStore;
