/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ModalForm from "./ModalForm";
import {
  addCategory,
  deleteCategory,
  editCategory,
  findAll,
} from "../../redux/asyncThunk";
import { deleteMessage } from "../../redux/categorySlice";
export default function AllCategories() {
  const categories = useSelector((state) => state.category);
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAll());
  }, []);

  const handleSubmit = (value) => {
    if (value._id) dispatch(editCategory(value));
    else dispatch(addCategory(value));
    dispatch(findAll());
    setTimeout(() => {
      dispatch(deleteMessage());
    }, 5000);
  };

  const handelDeleteCategory = (_id) => {
    dispatch(deleteCategory(_id));
    dispatch(findAll());
    setTimeout(() => {
      dispatch(deleteMessage());
    }, 5000);
  };

  return (
    <>
      <ModalForm
        content={<i className="bi bi-plus-square"></i>}
        styleBtn={"float-end mb-3"}
        status={"Add Category"}
        handleSubmit={handleSubmit}
      />
      {message && <div className="alert alert-success">{message}</div>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((category, index) => (
              <tr key={category._id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td className="d-flex justify-content-around">
                  <ModalForm
                    content={<i className="btn btn-warning bi bi-pencil"></i>}
                    styleBtn={""}
                    status={"Edit Category"}
                    handleSubmit={handleSubmit}
                    _id={category._id}
                  />
                  <ModalForm
                    content={<i className="btn btn-danger bi bi-trash3"></i>}
                    styleBtn={""}
                    status={"Delete Category"}
                    handleSubmit={handleSubmit}
                    _id={category._id}
                    delete={1}
                    deleteCategory={handelDeleteCategory}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
