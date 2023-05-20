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
  
  import { booksAPI } from "../Api/Book";
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
        console.log(JSON.stringify(response.data.data.authors) + "author");
        const data = JSON.stringify(response.data.data.authors);
        setAuthor(JSON.parse(data));
        console.log(typeof authorList);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      getAllBooks();
      getAllAuthors();
    }, []);
  
    return (
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
    );
  }
  