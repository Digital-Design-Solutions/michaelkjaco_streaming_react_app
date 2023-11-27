import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import { Strings } from "../../Utils/strings";
import { LocalImages } from "../../Utils/images";

const txt1 =
  "Michael Jaco is a retired veteran with over 24 years in Naval Special Warfare and over two years in Naval Diving and Salvage. Over 11 years as a contract and direct contract security operative for US State Department and CIA operations in Combat Zones. Dedicated a total of 35 years serving the US Government in high-risk environments.";
const txt2 =
  "Exceptional interpesonal and public relations skills with documented success in leadership and management roles and an extraordinary ability to determine group dynamics that allow a strong rapport at all levels. Extensive background in both basic and advanced SEAL tactics, High Risk Training and Inter-agency Programs with proven expertise in risk management, risk mitigation, and conflict resolution.";

export const About = () => {
  return (
    <div style={{}}>
      <Grid container spacing={2}>
        <Grid item xs={5} marginLeft={"6%"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component={"h1"} variant="h4" fontSize={"30px"}>
              {Strings.aboutIntuitiveWarriorChannel}
            </Typography>
            <img src={LocalImages.leaveWings} style={{ width: "120px" }} />
          </div>

          <Typography
            component={"body"}
            variant="body1"
            lineHeight={"28px"}
            marginTop={"24px"}
            fontSize={"16px"}
          >
            {txt1}
          </Typography>
          <Typography
            component={"body"}
            variant="body1"
            lineHeight={"28px"}
            marginTop={"32px"}
            fontSize={"16px"}
          >
            {txt2}
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: "-120px" }}>
          <img
            src={LocalImages.michaelJaco}
            style={{
              width: "115%",
              height: "100%",
              objectFit: "cover",
              // position: "absolute",
              top: 0,
              left: 0,
              transform: "translateX(5%)",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};