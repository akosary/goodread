import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

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

  return (
    <div className="row row-cols-lg-4 row-cols-md-3 row-cols-md-2 g-3">
      {authors.map((author) => (
        <div key={author._id} className="col">
          <div className="card">
            <img src={author.image} className="card-img-top" alt={author.firstName} />
            <div className="card-body">
              <Link to={`/users/authors/${author._id}/books`}>
                <h5 className="card-title">{`${author.firstName} ${author.firstName}`}</h5>
              </Link>
              {/* <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthorList;
