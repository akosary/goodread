import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
export default function ModalForm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [category, setCategory] = useState({ categoryName: "" });

  const validationForm = Yup.object().shape({
    categoryName: Yup.string()
      .min(3, "This name is too short!")
      .required("This name is required"),
  });

  return (
    <>
      <Button className={props.styleBtn} onClick={handleShow}>
        {props.content}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.status}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!props.delete && (
            <Formik
              validationSchema={validationForm}
              initialValues={category}
              enableReinitialize={category}
              onSubmit={(value) => {
                value.name = value.categoryName;
                if (props._id) value._id = props._id;
                props.handleSubmit(value);
                handleClose();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <label htmlFor="categoryName" className="form-label">
                    Category Name
                  </label>
                  <Field
                    name="categoryName"
                    id="categoryName"
                    className="my-3 mb-3 form-control"
                    type="text"
                    placeholder="Category Name"
                  />
                  {errors.categoryName && touched.categoryName && (
                    <div className="text-muted alert alert-danger">
                      <ErrorMessage name="categoryName" />
                    </div>
                  )}
                  <Modal.Footer>
                    <button
                      className={`m-auto btn btn-primary ${
                        errors.categoryName ? "disabled" : ""
                      }`}
                      type="submit"
                    >
                      {props.status}
                    </button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          )}
          {props.delete && (
            <>
              Are you sure to delete this category ?
              <Modal.Footer className="mt-4">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    props.deleteCategory(props._id);
                    handleClose();
                  }}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
