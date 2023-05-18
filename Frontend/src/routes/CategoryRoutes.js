import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCategories from "../components/category/AllCategories";
import Categories from "../components/category/Categories";
import CategoryDetails from "../components/category/CategoryDetails";

export default function CategoryRoutes() {
  return (
    <Routes>
      <Route path="categories" Component={AllCategories} />
      <Route path="categories/groups" Component={Categories} />
      <Route path="categories/:id/books" Component={CategoryDetails} />
    </Routes>
  );
}
