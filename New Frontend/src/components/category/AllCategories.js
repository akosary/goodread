import React, { useEffect } from "react";
// import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ModalForm from "./ModalForm";
import { addCategory, deleteCategory, editCategory, findAll } from "Redux/asyncThunk";
import { deleteMessage } from "Redux/categorySlice";
import MKAlert from "components/MKAlert";
import { TableContainer, TableRow } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";

export default function AllCategories() {
  const categories = useSelector((state) => state.categorySlice.category);
  const message = useSelector((state) => state.categorySlice.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAll());
  }, [message]);

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
    setTimeout(() => dispatch(deleteMessage()), 5000);
  };

  return (
    <div className="container">
      <ModalForm
        content={<i className="bi bi-plus-square"></i>}
        styleBtn={"info"}
        status={"Add Category"}
        handleSubmit={handleSubmit}
        categoryName=""
      />
      {message && <MKAlert color="success">{message}</MKAlert>}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableRow>
            <TableCell align="center" className="bold">
              ID
            </TableCell>
            <TableCell align="center" className="bold">
              Category Name
            </TableCell>
            <TableCell align="center" className="bold">
              Actions
            </TableCell>
          </TableRow>
          <TableBody>
            {categories &&
              categories.map((category, index) => (
                <TableRow
                  key={category._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <tr  style={{ height: "60px" }}> */}
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{category.name}</TableCell>
                  <TableCell className="d-flex justify-content-around">
                    <ModalForm
                      content={<i className="bi bi-pencil"></i>}
                      styleBtn={"warning"}
                      status={"Edit Category"}
                      handleSubmit={handleSubmit}
                      categoryName={category.name}
                      _id={category._id}
                    />
                    <ModalForm
                      content={<i className="bi bi-trash3"></i>}
                      styleBtn={"error"}
                      status={"Delete Category"}
                      handleSubmit={handleSubmit}
                      _id={category._id}
                      delete={1}
                      deleteCategory={handelDeleteCategory}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
