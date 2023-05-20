/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { findAll } from "../../redux/asyncThunk";
export default function Categories() {
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAll());
  }, []);
  return (
    <div className="row justify-content-center gap-4">
      {categories &&
        categories.map((category) => (
          <Card style={{ width: "28rem" }} key={category._id}>
            <ListGroup variant="flush">
              <ListGroup.Item
                className="btn"
                onClick={() => {
                  console.log(category._id);
                }}
              >
                {category.name}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
    </div>
  );
}
