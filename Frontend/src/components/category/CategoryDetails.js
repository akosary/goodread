/* eslint-disable react-hooks/exhaustive-deps */
// 64662883ed840c1c83c05822
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryDetails } from "../../redux/asyncThunk";
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
export default function CategoryDetails() {
  const categoryBooks = useSelector((state) => state.categoryBooks);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(categoryDetails(id));
  }, []);
  return (
    <>
      {categoryBooks[0] && (
        <>
          <h1 className="mb-4">{categoryBooks[0].categoryId.name}</h1>
          <div className="row justify-content-center gap-4">
            {categoryBooks.map((book) => (
              <Card style={{ width: "22rem" }} key={book._id}>
                <Card.Img variant="top" src={book.photo} />
                <Card.Body>
                  <Card.Title>{book.name}</Card.Title>
                  {/* <Card.Title>{book.authorId.name}</Card.Title> */}
                  <Button
                    variant="primary"
                    onClick={() => {
                      console.log(book._id);
                    }}
                  >
                    Read More ...
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  );
}
