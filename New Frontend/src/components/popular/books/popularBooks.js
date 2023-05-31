import Grid from "@mui/material/Grid";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import MKTypography from "components/MKTypography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./popularBooks.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#808080",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function popularBooks({ popularData }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="mb-4">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} className="text-center">
            <MKTypography variant="h1">Popular Books</MKTypography>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2} className="mb-4">
        {popularData.map((book) => (
          <Grid item xs={4} key={book._id} className="mb-4">
            <BackgroundBlogCard
              image={book.photo}
              title={book.name}
              description="Rather than worrying about switching offices every couple years, you stay in the same place."
              action={{
                type: "internal",
                route: `/books/${book._id}`,
                color: "info",
                label: "Read More",
              }}
            />
          </Grid>
        ))}
        <Grid item xs={12} sm={12} className="text-center mb-4">
          <MKTypography variant="h1">Popular Authors</MKTypography>
        </Grid>
        {popularData.map((book) => (
          <Grid item xs={4} key={book._id}>
            <Item>{"book.authorId.firstName"}</Item>
          </Grid>
        ))}
        <Grid item xs={12} sm={12} className="text-center mb-4">
          <MKTypography variant="h1">Popular Categories</MKTypography>
        </Grid>
        {popularData.map((book) => (
          <Grid item xs={4} key={book._id}>
            <Item>{book.categoryId.name}</Item>
          </Grid>
        ))}
      </Grid>
    </>
    // <>
    //   {Data.map((book) => (
    //   ))}
    // </>

    // <Container>
    //   <Box sx={{ flexGrow: 1 }}>
    //     <Grid container spacing={2}>
    //       <Grid item xs={12} sm={9} className="text-center">
    //         <MKTypography variant="h1">Popular</MKTypography>
    //       </Grid>
    //     </Grid>
    //   </Box>
    // </Container>
  );
}

export default popularBooks;
