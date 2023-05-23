import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AuthorTable = () => {
  // Authors State
  const [authors, setAuthors] = useState([]);

  // Model State
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Add new author form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    image: "",
  });

  const clearFormDara = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      image: "",
    });
  };

  // Fetching authors data when component mounted to the DOM
  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = () => {
    fetch("http://localhost:8000/api/v1/authors")
      .then((res) => res.json())
      .then((authorsData) => {
        console.log(authorsData);
        setAuthors(authorsData.data.authors);
      })
      .catch((err) => console.log(err));
  };

  // deleteing authors
  const deleteAuthor = (id) => {
    console.log("DELETE");
    fetch(`http://localhost:8000/api/v1/authors/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        fetchAuthors();
      }
    });
  };

  // handel add new author form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("dateOfBirth", formData.dateOfBirth);
    formDataToSend.append("image", formData.image);

    try {
      const response = await fetch("http://localhost:8000/api/v1/authors", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        // handle successful form submission
        console.log(response);
        // reset form data
        clearFormDara();
        // close the model
        handleClose();
        // fetching authors
        fetchAuthors();
      }
    } catch (error) {
      // handle error
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <Button className="my-3" variant="primary" onClick={handleShow}>
        Add Author
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Author</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Profile image</Form.Label>
              <Form.Control
                onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                type="file"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                type="date"
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Table triped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/*  */}
          {authors.map((author, index) => (
            <tr className="text-center" key={author._id}>
              <td>{index + 1}</td>
              <td>
                <img
                  className="img-thumbnail"
                  style={{ width: "96", height: "96px" }}
                  src={author.image}
                  alt={author.title}
                />
              </td>
              <td>{author.firstName}</td>
              <td>{author.lastName}</td>
              <div className="d-flex align-items-center gap-2 justify-content-center">
                <button className="btn btn-outline-primary btn-sm">
                  <i className="bi bi-pencil"></i>
                </button>
                <button
                  onClick={() => deleteAuthor(author._id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AuthorTable;
