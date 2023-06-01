/* eslint-disable no-unused-vars */
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import "./book.css";
import headerImg from "assets/images/home/bg-book-5.jpg";

import { booksAPI } from "../Api/Book";
import MKBox from "./MKBox";
export default function Book() {
  let [bookList, setBook] = useState([]);
  let [authorList, setAuthor] = useState([]);
  const getAllBooks = async () => {
    let response = await booksAPI.getAllBooks();
    setBook(response.data.books);
  };

  const getAllAuthors = async () => {
    try {
      let response = await booksAPI.getAllAuthors();
      const data = JSON.stringify(response.data.data.authors);
      setAuthor(JSON.parse(data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllBooks();
    getAllAuthors();
  }, []);

  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      ></MKBox>
      <div className="p-5 text-center rounded">
        <div className="container">
          <h2>All Books</h2>
          <div className="row">
            {bookList.map((item) => {
              return (
                <MDBRow className="col-sm-6 col-lg-4 " key={item._id}>
                  <MDBCol className="border mx-1 my-1">
                    <MDBCard className="h-50 border">
                      <MDBCardImage src={item?.photo} alt="..." position="top" />
                      <MDBCardBody>
                        <MDBCardTitle>{item?.name}</MDBCardTitle>
                        <MDBCardText>{item?.authorId}</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
