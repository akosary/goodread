import React, { useEffect, useState } from "react";
import { MDBIcon, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { booksAPI } from "../Api/Book";
import "./bookAdmin.css";
import ReactPaginate from "react-paginate";

export default function BookAdmin() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [bookList, setBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [booksPerPage] = useState(5);

  const getAllBooks = async () => {
    try {
      let response = await booksAPI.getAllBooks();
      setBook(response.data.books);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  function editBook(bookId) {
    navigate(`/books/${bookId}/edit`);
  }

  const deleteBook = async (bookId) => {
    await booksAPI.deleteBook(bookId);
    let filteredList = bookList.filter((book) => book._id !== bookId);
    setBook(filteredList);
  };

  const goToAddPage = () => {
    const data = { author: 0, category: 0 };
    navigate("/books/0/edit", { state: data });
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * booksPerPage;
  const currentBooks = bookList.slice(offset, offset + booksPerPage);

  return (
    <div className="p-5 text-center">
      <div>
        <MDBIcon fas icon="folder-plus" className="fs-1 " onClick={goToAddPage} />
      </div>
      <MDBTable align="middle" className="w-75 text-center center">
        <MDBTableHead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Photo</th>
            <th scope="col">CategoryId</th>
            <th scope="col">AuthorId</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {currentBooks.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>{index + 1 + offset}</td>
                <td>{item?.name}</td>
                <td>
                  <img src={item?.photo} alt="" className="w-100 h-100" />
                </td>
                <td>{item?.categoryId._id}</td>
                <td>{item?.authorId._id}</td>
                <td>
                  <MDBIcon fas icon="pencil-alt" onClick={() => editBook(item._id)} />
                  <MDBIcon fas icon="eraser" className="p-2" onClick={() => deleteBook(item._id)} />
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
      {!loading && (
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          pageCount={Math.ceil(bookList.length / booksPerPage)}
          onPageChange={handlePageChange}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          activeClassName={"active"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
        />
      )}
      {!loading && (
        <div className="mt-3">Number of pages: {Math.ceil(bookList.length / booksPerPage)}</div>
      )}
    </div>
  );
}
