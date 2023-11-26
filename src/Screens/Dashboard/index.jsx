import React from "react";
import { About } from "./About";
import { Box, Button, Typography } from "@mui/material";
import { LocalImages } from "../../Utils/images";
import { Strings } from "../../Utils/strings";

const ovalStyles = {
  width: "100%",
  height: "100%",
  backgroundColor: "#2196F3", // Your desired background color
  borderRadius: "50%",
};

function Dashboard() {
  return (
    <>
      <img
        src={LocalImages.mountain}
        style={{ width: "100%", height: "90vh", objectFit: "cover" }}
      />
      <Box display="flex" height="100vh" width={"100vw"}>
        <Box
          sx={{
            width: "120vw",
            marginLeft: "-10%",
            marginTop: "-14%",
            height: "100vh",
            backgroundColor: "#fff",
            borderTopLeftRadius: "50%",
            borderTopRightRadius: "50%",
            padding: "5% 0px 0px 0px",
            position: "absolute",
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography component={"h4"} variant="h4">
              {Strings.watchOurLatestShows}
            </Typography>
            <Typography component={"body"} variant="subtitle1">
              {Strings.startSavingYourTimerWithFramerWireframeWebuiKit}
            </Typography>
            <img src={LocalImages.leaveWings} style={{ width: "120px" }} />
          </Box>
        </Box>
      </Box>
      <div
        style={{
          backgroundColor: "lightblue",
          width: "100%",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          paddingBottom: "5%",
        }}
      >
        <Button variant="contained" sx={{ textAlign: "center" }}>
          WATCH MORE
        </Button>
      </div>
      <About />
    </>
  );
}

export default Dashboard;
