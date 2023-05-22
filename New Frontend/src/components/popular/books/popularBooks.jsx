import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import MKTypography from "components/MKTypography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Text from "@mui/material/Test";
import Paper from "@mui/material/Paper";
import "./popularBooks.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function popularBooks({ popularData }) {
  {
    console.log(popularData);
  }
  return (
    <Container>
      {/* <Grid item xs={12} sm={9} className="text-center">
        <MKTypography variant="h1">Popular Section</MKTypography>
      </Grid> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {popularData.map((book) => {
            <Grid item xs={4}>
              <Item>Hello</Item>
              {/* <BackgroundBlogCard
                image={book.photo}
                title={book.name}
                description="Rather than worrying about switching offices every couple years, you stay in the same place."
                action={{
                  type: "internal",
                  route: `/books/${book._id}`,
                  color: "info",
                  label: "Read More",
                }}
              /> */}
            </Grid>;
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default popularBooks;
