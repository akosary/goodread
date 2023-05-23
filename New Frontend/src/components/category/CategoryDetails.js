import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryDetails } from "Redux/asyncThunk";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import mainImage from "assets/images/main.jpg";
import { Grid } from "@mui/material";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
export default function CategoryDetails() {
  const categoryBooks = useSelector((state) => state.categorySlice.categoryBooks);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(categoryDetails(id));
    console.log(categoryBooks);
  }, [dispatch]);
  return (
    <Container className="mt-5">
      {categoryBooks[0] && (
        <>
          <h1 className="mb-4">{categoryBooks[0].categoryId.name}</h1>
          <div className="row justify-content-center gap-4">
            {categoryBooks.map((book) => (
              <Grid item xs={12} sm={6} lg={3} key={book._id}>
                <BackgroundBlogCard
                  // image={book.photo}
                  image={mainImage}
                  title={book.name}
                  description="author name."
                  // description={book.authorId.name}
                  action={{
                    type: "internal",
                    route: "/pages/blogs/author",
                    // route: `${book._id}/details`,
                    label: "read more",
                  }}
                />
              </Grid>
            ))}
          </div>
        </>
      )}
    </Container>
  );
}
