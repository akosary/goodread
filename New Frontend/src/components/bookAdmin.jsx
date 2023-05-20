import React, { useEffect, useState } from "react";
import { MDBIcon, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { booksAPI } from "../Api/Book";
export default function BookAdmin() {
  const navigate = useNavigate();

  let [bookList, setBook] = useState([]);
  const getAllBooks = async () => {
    try {
      let response = await booksAPI.getAllBooks();
      setBook(response.data.books);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllBooks();
  }, []);

  const editBook = (bookId) => {
    navigate(`/books/${bookId}/edit`);
  };
  const deleteBook = async (bookId) => {
    await booksAPI.deleteBook(bookId);
    let filteredList = bookList.filter((book) => book._id != bookId);
    setBook(filteredList);
  };

  const goToAddPage = () => {
    navigate("/books/0/edit");
  };
  return (
    <div className="p-5 text-center">
      <div>
        <MDBIcon fas icon="folder-plus" className="fs-1 " onClick={goToAddPage} />
      </div>
      <MDBTable align="middle" className="w-75 text-center">
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
          {bookList.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>{index}</td>
                <td>{item?.name}</td>
                <td>
                  <img src={item?.photo} alt="" className="w-100 h-100" />
                </td>
                <td>{item?.categoryId}</td>
                <td>{item?.authorId}</td>
                <td>
                  <MDBIcon fas icon="pencil-alt" onClick={() => editBook(item._id)} />
                  <MDBIcon fas icon="eraser" className="p-2" onClick={() => deleteBook(item._id)} />
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
