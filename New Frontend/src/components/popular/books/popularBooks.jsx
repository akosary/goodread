import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import MKTypography from "components/MKTypography";
import "./popularBooks.css";

function popularBooks({ popularData }) {
  {
    console.log(popularData);
  }
  return (
    <Container>
      <Grid item xs={12} sm={9} className="text-center">
        <MKTypography variant="h1">Popular Section</MKTypography>
      </Grid>
      <Grid container spacing={2}>
        {popularData.map((book) => {
          <Grid item xs={4} key={book._id}>
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
          </Grid>;
        })}
      </Grid>
    </Container>
  );
}

export default popularBooks;
