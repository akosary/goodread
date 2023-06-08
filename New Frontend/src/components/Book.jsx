import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBRow, MDBCol } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";

import { booksAPI } from "../Api/Book";

export default function Book() {
  const [bookList, setBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  setItemsPerPage;
  const getAllBooks = async () => {
    let response = await booksAPI.getAllBooks();
    setBook(response.data.books);
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentBooks = bookList.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(bookList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return (
      <nav>
        <ul className="pagination justify-content-center">
          {pageNumbers.map((number) => {
            return (
              <li key={number} className="page-item">
                <button className="page-link" onClick={() => handlePageChange(number)}>
                  {number}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };

  return (
    <div className="p-5 text-center rounded">
      <div className="container">
        <h2>All Books</h2>
        <div className="row">
          {currentBooks.map((item) => {
            return (
              <MDBRow className="col-sm-6 col-lg-4 mx-auto" key={item._id}>
                <MDBCol className=" mx-1 mt-1 mb-4">
                  <MDBCard className=" border border-primary">
                    <MDBCardImage src={item?.photo} alt="..." position="top" className="w-100" />
                    <MDBCardBody>
                      <MDBCardTitle>
                        {" "}
                        <span className="text-danger">Name:</span> {item?.name}
                      </MDBCardTitle>
                      <MDBCardTitle>
                        <span className="text-danger">Author:</span> {item?.authorId.firstName}
                      </MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            );
          })}
        </div>
        {/* Render the pagination buttons */}
        {renderPageNumbers()}
        {/* Display the total number of pages */}
        <p className="text-center">Total number of pages: {totalPages}</p>
      </div>
    </div>
  );
}
