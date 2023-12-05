import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Box, Container } from "@mui/material";

import { Strings } from "../../Utils/strings";
import { LocalImages } from "../../Utils/images";
import UpcomingStreaming from "./UpcomingStreaming";

const txt1 =
  "Michael Jaco is a retired veteran with over 24 years in Naval Special Warfare and over two years in Naval Diving and Salvage. Over 11 years as a contract and direct contract security operative for US State Department and CIA operations in Combat Zones. Dedicated a total of 35 years serving the US Government in high-risk environments.";
const txt2 =
  "Exceptional interpesonal and public relations skills with documented success in leadership and management roles and an extraordinary ability to determine group dynamics that allow a strong rapport at all levels. Extensive background in both basic and advanced SEAL tactics, High Risk Training and Inter-agency Programs with proven expertise in risk management, risk mitigation, and conflict resolution.";

export const About = () => {
  return (
    <>
      <div style={{}} className="about-content">
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Box sx={{ marginLeft: "16%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  component={"h1"}
                  variant="h4"
                  fontSize={"42px"}
                  sx={{ pt: 10 }}
                  className="font-gloucester"
                >
                  {Strings.aboutIntuitiveWarriorChannel}
                </Typography>
                <img src={LocalImages.leaveWings} style={{ width: "120px" }} />
              </div>
              <Box sx={{ mr: 8 }}>
                <Typography
                  component={"body"}
                  variant="body1"
                  lineHeight={"28px"}
                  marginTop={"24px"}
                  fontSize={"16px"}
                  className="font-notoSans"
                >
                  {txt1}
                </Typography>
                <Typography
                  component={"body"}
                  variant="body1"
                  lineHeight={"28px"}
                  marginTop={"32px"}
                  fontSize={"16px"}
                  className="font-notoSans"
                >
                  {txt2}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ marginTop: {xs:0, md:"-100px"}}}>
            <Box sx={{
                height: "100vh",
                backgroundImage: `url( ${LocalImages.michaelJaco} )`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "right -150px bottom 100%",
                minHeight: {xs: "600px", md: "900px"},               
            }}>
            {/* <img
              src={LocalImages.michaelJaco}
              style={{
                // width: "120%",
                width: "80%",
                // objectFit: "cover",
                // position: "absolute",
                // overflowY: "overlay",
                // position: "relative", // none
                top: 30, //0
                // left: 100, //0
                right: "-30%",
                boxSizing: "border-box",
                // alignContent: "end",
                overflowX: "hidden",
              
              }}
              alt=""
            /> */}
            </Box>
          </Grid>
        </Grid>
      </div>
      <Box className="live-streaming-content">
        <Container className="live-streaming01">
          <UpcomingStreaming />
        </Container>
      </Box>
    </>
  );
};
