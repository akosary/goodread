import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCategories from "../components/category/AllCategories";

export default function CategoryRoutes() {
  return (
    <Routes>
      <Route path="categories" Component={AllCategories} />
    </Routes>
  );
}
