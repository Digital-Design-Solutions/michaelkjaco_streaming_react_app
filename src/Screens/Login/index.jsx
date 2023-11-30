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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
    <form onSubmit={doLogin} style={{ minWidth: "100%" }}>
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
        style={{background: "red"}}
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

      {/* <Grid style={{ paddingTop: "4px" }}>
        <Grid xs="12" sm="8" md="8" lg="8" xl="8">
          <Checkbox>Keep me signed in</Checkbox>
        </Grid>
        <Grid style={{ textAlign: "right", color: "#1A315C" }}>
          <Typography variant="body1" component={"body"}>
            Forgot Password?
          </Typography>
        </Grid>
        
      </Grid> */}
     
      <Grid container >
          <Grid item xs={6} className="login-content-style01">
             {/* <Typography><CheckBox /> <span style={{position: "relative", top: -10, left: -2}}>Keep me signed in</span></Typography> */}
             <FormGroup><FormControlLabel control={<Checkbox />} label="Keep me signed in" /></FormGroup>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right", paddingTop: 1, fontSize: 11}}>
          <Typography variant="body1" component={"body"} className="login-forgot-pass">
            Forgot Password?
          </Typography>
          </Grid>
      </Grid>
      <button
        type="submit"
        className="login-btn-submit"
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
            border: "1px solid #adb2bd",
          }}
        />
        <Typography
          variant="body1"
          component={"body"}
          style={{ margin: "0px 8px", color: "#adb2bd" }}
        >
          OR
        </Typography>
        <div
          style={{
            width: "15%",
            height: "2%",
            border: "1px solid #adb2bd",
          }}
        />
      </Grid>

      <button
        type="submit"
        className="login-btn-submit login-btn-create-ac"
      >
        Create account
      </button>
    </form>
  );

  return (
    <Box maxWidth={true} style={{ height: "100vh", /*overflow: "hidden"*/ }}>
      <Card
        style={{
          padding: "4vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={LocalImages.logo}
          style={{ width: "180px", position: "absolute", top: "-20px" }}
        />
      </Card>
      <Grid
        style={{
          // height: "100%",
          background: `url(${LocalImages.bgURL}) 0 0/100% 100% no-repeat`,
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
          // overflow: "scroll",
          alignItems: "center",
          justifyContent: "center",
        }}
        container
      >
        <Grid xs="10" sm="6" md="10" lg="4" xl="4" sx={{mt:15}}>
          <Card className="login-card">
            <Typography
              variant="h3"
              component={"h3"}
              className="font-gloucester title-style01">
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

        <Box style={{
          height: "100px",
          width:"100%",
          backgroundImage: `url( ${LocalImages.loginBottomBg} )`,
          backgroundSize: "cover",
          backgroundPosition: "cetner bottom",
          position: "relative",
          top: -80,
        }}>
        <p></p>
      </Box>        
      </Grid>
      
      

    </Box>
  );
};

export default Login;
