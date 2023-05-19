/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { findAll } from "../../redux/asyncThunk";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import MKTypography from "components/MKTypography";
import { Grid } from "@mui/material";

export default function Categories() {
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
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6),
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
                    console.log(category._id);
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