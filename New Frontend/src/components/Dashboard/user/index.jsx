/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import routes from "routes";
import UserLogin from "../../user Login/userLogin.jsx";
import footerRoutes from "footer.routes";

import Data from "./allread.jsx";
// import Card from "@mui/material/Card";
import bgImage from "assets/images/user/Dashboard/main.jpg";
import "./index.css";
import MKTypography from "components/MKTypography";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Container>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    </Container>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function index() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <DefaultNavbar
        className="nav"
        routes={routes}
        action={{
          type: "internal",
          route: "/userLogin",
          component: <UserLogin />,
          label: "Login",
          color: "info",
        }}
        sticky
      />

      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      ></MKBox>
      <MKTypography variant="h1" className="heading">
        User Dashboard
      </MKTypography>

      <Container className="tabs">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="All Read" {...a11yProps(0)} />
              <Tab label="Read" {...a11yProps(1)} />
              <Tab label="Currently reading" {...a11yProps(2)} />
              <Tab label="Want To Read" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Data filter="All" />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Data filter="Read" />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Data filter="Reading" />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Data filter="Want to read" />
          </TabPanel>
        </Box>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </Container>
    </>
  );
}
