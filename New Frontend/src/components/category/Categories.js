/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { findAll } from "../../redux/asyncThunk";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAll());
  }, []);
  return (
    <Container className="mt-4">
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={0}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
        <Card className="py-5">
          <div className="row justify-content-center align-items-center gap-4">
            {categories &&
              categories.map((category) => (
                <MKButton
                  key={category._id}
                  variant="gradient"
                  color="info"
                  className="col-4"
                  onClick={() => {
                    navigate(`/categories/${category._id}/books`);
                  }}
                >
                  {category.name}
                </MKButton>
              ))}
          </div>
        </Card>
      </Grid>
    </Container>
  );
}
