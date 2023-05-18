/* eslint-disable react-hooks/exhaustive-deps */
// 64662883ed840c1c83c05822
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryDetails } from "../../redux/asyncThunk";
import { useParams } from "react-router-dom";
export default function CategoryDetails() {
  const categoryBooks = useSelector((state) => state.categoryBooks);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(categoryDetails(id));
  }, []);
  return <></>;
}
