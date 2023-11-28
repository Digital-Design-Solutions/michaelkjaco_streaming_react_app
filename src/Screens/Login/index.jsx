import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./Login.css";
import CustomInput from "../../Components/Form/CustomInput";
import { isValidString } from "../../Utils/validators";
import { LocalImages } from "../../Utils/images";

const initialValues = {
  email: "",
  password: "",
};

const signinSchema = Yup.object().shape({
  email: Yup.string().email("Enter valid email").required("Email is required"),
  password: Yup.string().required("Enter valid password"),
});

const Login = () => {
  const loginForm = useFormik({
    initialValues,
    validationSchema: signinSchema,
    onSubmit: () => {},
    validateOnMount: true,
  });

  const doLogin = async (event) => {
    event.preventDefault();
  };

  const formContent = () => (
    <form onSubmit={doLogin} style={{ minWidth: "90%" }}>
      <CustomInput
        value={loginForm.values.email}
        onChangeText={(value) => loginForm.setFieldValue("email", value)}
        handleBlur={loginForm.handleBlur("email")}
        isError={
          isValidString(loginForm.errors.email) && loginForm.touched.email
        }
        errorMsg={loginForm.errors.email}
        isRequired={true}
        label={"User Name"}
        type="text"
        placeholder={"User Name"}
        prefixIcon={
          <img
            src={LocalImages.user}
            style={{ width: "60%", height: "auto" }}
          />
        }
      />

      <CustomInput
        value={loginForm.values.password}
        onChangeText={(value) => loginForm.setFieldValue("password", value)}
        handleBlur={loginForm.handleBlur("password")}
        isError={
          isValidString(loginForm.errors.password) && loginForm.touched.password
        }
        errorMsg={loginForm.errors.password}
        isRequired={true}
        label={"Password"}
        type="password"
        placeholder="Password"
        prefixIcon={
          <img
            src={LocalImages.lock}
            style={{ width: "60%", height: "auto" }}
          />
        }
        suffixIcon={(toggleSuffixIcon) => (
          <img
            src={LocalImages.eyeClose}
            style={{ width: "50%", height: "auto", float: "right" }}
          />
        )}
      />

      <Grid style={{ paddingTop: "4px" }}>
        <Grid xs="12" sm="6" md="6" lg="6" xl="6">
          <CheckBox>Keep me signed in</CheckBox>
        </Grid>
        <Grid
          xs="12"
          sm="6"
          md="6"
          lg="6"
          xl="6"
          style={{ textAlign: "right", color: "#1A315C" }}
        >
          <Typography variant="body1" component={"body"}>
            Forgot Password?
          </Typography>
        </Grid>
      </Grid>

      <button
        type="submit"
        style={{
          marginTop: "24px",
          background: "#1A315C  0% 0% no-repeat padding-box",
          color: "#fff",
          textAlign: "center",
          width: "100%",
          padding: "12px",
          textTransform: "uppercase",
        }}
        disabled={!loginForm.isValid}
      >
        Submit
      </button>
      <Grid
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <div
          style={{
            width: "15%",
            height: "2%",
            border: "1px solid #ccc",
          }}
        />
        <Typography
          variant="body1"
          component={"body"}
          style={{ margin: "0px 8px" }}
        >
          OR
        </Typography>
        <div
          style={{
            width: "15%",
            height: "2%",
            border: "1px solid #ccc",
          }}
        />
      </Grid>

      <button
        type="submit"
        style={{
          marginTop: "16px",
          background: "#fff  0% 0% no-repeat padding-box",
          color: "#1A315C",
          textAlign: "center",
          width: "100%",
          padding: "12px",
          border: "1px solid #1A315C",
          textTransform: "uppercase",
        }}
      >
        Create account
      </button>
    </form>
  );

  return (
    <Box maxWidth={true} style={{ height: "100vh", overflow: "hidden" }}>
      <Card
        style={{
          padding: "4vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={LocalImages.logo}
          style={{ width: "180px", position: "absolute", top: "0px" }}
        />
      </Card>
      <Grid
        style={{
          height: "100%",
          background: `url(${LocalImages.bgURL}) 0 0/100% 100% no-repeat`,
          overflow: "scroll",
          alignItems: "center",
          justifyContent: "center",
        }}
        container
      >
        <Grid xs="10" sm="6" md="10" lg="4" xl="4">
          <Card style={{ padding: "48px" }}>
            <Typography
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "700",
                color: "#464A53",
              }}
              variant="h4"
              component={"h4"}
            >
              Sign In to Your Account
            </Typography>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
              }}
            >
              {formContent()}

              <Typography
                style={{
                  color: "#ABAFB3",
                  fontSize: "0.7rem",
                  margin: "2vh 0px 0px 0px",
                }}
                variant="body"
                component={"body"}
              >
                This page is protected by Google reCAPTCHA to ensure you’re not
                a bot. <span style={{ color: "#1A315C" }}>Learn more.</span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
