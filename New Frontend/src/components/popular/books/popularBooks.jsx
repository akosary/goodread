import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import MKTypography from "components/MKTypography";
import "./popularBooks.css";

function AutoLayoutExample() {
  return (
    <Container>
      <Grid item xs={12} sm={9} className="text-center">
        <MKTypography variant="h1">Popular Section</MKTypography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <BackgroundBlogCard
            image="https://bit.ly/31BuIti"
            title="Flexible work hours"
            description="Rather than worrying about switching offices every couple years, you stay in the same place."
            action={{
              type: "internal",
              route: "/somewhere",
              color: "info",
              label: "Read More",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <BackgroundBlogCard
            image="https://bit.ly/31BuIti"
            title="Flexible work hours"
            description="Rather than worrying about switching offices every couple years, you stay in the same place."
            action={{
              type: "internal",
              route: "/somewhere",
              color: "info",
              label: "Read More",
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <BackgroundBlogCard
            image="https://bit.ly/31BuIti"
            title="Flexible work hours"
            description="Rather than worrying about switching offices every couple years, you stay in the same place."
            action={{
              type: "internal",
              route: "/somewhere",
              color: "info",
              label: "Read More",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AutoLayoutExample;
