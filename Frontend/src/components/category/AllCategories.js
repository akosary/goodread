import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { findAll } from "../../redux/categorySlice";
export default function AllCategories() {
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAll());
    console.log(categories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
