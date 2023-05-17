import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";
import MKInput from "../../components/MKInput";
import MKButton from "../../components/MKButton";
import bgImage from "../../assets/images/bg-sign-in-basic.jpeg";
import SimpleFooter from "../../examples/Footers/SimpleFooter";
function LoginPage() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [filename, setFilename] = useState("");
  const [errors, setErrors] = useState({});

  const handleFnameChange = (event) => {
    setFname(event.target.value);
  };
  const handleLnameChange = (event) => {
    setLname(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRetypePasswordChange = (event) => {
    setRetypePassword(event.target.value);
  };
  const handleFilenameChange = (event) => {
    setFilename(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!fname) {
      validationErrors.fname = "First name is required";
    }
    if (!lname) {
      validationErrors.lname = "Last name is required";
    }
    if (!email) {
      validationErrors.email = "Email is required";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    }
    if (!retypePassword) {
      validationErrors.retypePassword = "retype Password !!";
    }
    if (!filename) {
      validationErrors.filename = "image is required";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const formData = new FormData();
    formData.append("file", filename);
    const data = {
      firstname: fname,
      lastname: lname,
      email: email,
      password: password,
      confirmPassword: retypePassword,
      filename: formData,
    };
    console.log(data);
    fetch("http://127.0.0.1:3500/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const token = data.token;
        if (token && data.message) {
          window.alert(data.message);
          localStorage.setItem("authToken", token);
          if (data.redirectUrl) {
            window.location.href = data.redirectUrl;
          }
        } else {
          window.alert(data.message);
        }
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  return (
    <>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
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
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Register
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox
                  component="form"
                  role="form"
                  onSubmit={handleSubmit}
                  enctype="multipart/form-data"
                >
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="First Name"
                      fullWidth
                      value={fname}
                      onChange={handleFnameChange}
                    />
                  </MKBox>
                  {errors.fname && (
                    <MKTypography className="text-danger" variant="inherit">
                      {errors.fname}
                    </MKTypography>
                  )}
                  <MKBox mb={2}>
                    <MKInput
                      type="text"
                      label="Last Name"
                      fullWidth
                      value={lname}
                      onChange={handleLnameChange}
                    />
                  </MKBox>
                  {errors.lname && (
                    <MKTypography className="text-danger" variant="inherit">
                      {errors.lname}
                    </MKTypography>
                  )}
                  <MKBox MB={2} mt={2}>
                    <MKInput
                      type="email"
                      label="Email"
                      fullWidth
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </MKBox>
                  {errors.email && (
                    <MKTypography className="text-danger" variant="inherit">
                      {errors.email}
                    </MKTypography>
                  )}
                  <MKBox mb={2} mt={2}>
                    <MKInput
                      type="password"
                      label="Password"
                      fullWidth
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </MKBox>
                  {errors.password && (
                    <MKTypography className="text-danger" variant="inherit">
                      {errors.password}
                    </MKTypography>
                  )}
                  <MKBox mb={2} mt={2}>
                    <MKInput
                      type="password"
                      label="Retype Password"
                      fullWidth
                      value={retypePassword}
                      onChange={handleRetypePasswordChange}
                    />
                  </MKBox>
                  {errors.retypePassword && (
                    <MKTypography className="text-danger" variant="inherit">
                      {errors.retypePassword}
                    </MKTypography>
                  )}
                  <MKBox mb={2} mt={2}>
                    <MKTypography variant="subtitle2" fontWeight="light" color="dark" mt={1}>
                      upload image
                    </MKTypography>
                    <MKInput
                      type="file"
                      fullWidth
                      value={filename}
                      onChange={handleFilenameChange}
                    />
                  </MKBox>
                  {errors.filename && (
                    <MKTypography className="text-danger" variant="inherit">
                      {errors.filename}
                    </MKTypography>
                  )}
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth type="submit">
                      submit
                    </MKButton>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default LoginPage;
