import React from "react";
import { Box, Button, Typography } from "@mui/material";

import { About } from "./About";
import Header from '../../components/Header';
import PartnerProducts from '../../components/PartnerProducts';
import FAQ from "../../components/faq";
import { LocalImages } from "../../Utils/images";
import { Strings } from "../../Utils/strings";

function Dashboard() {
  return (
    <>
      <Header />
      <Box sx={{width: "100%"}} className="header-bg" />
     
      <Box display="flex" height="100vh" width={"100vw"}>
        <Box
          sx={{
            width: "120vw",
            marginLeft: "-10%",
            marginTop: "-13%",
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
            <Typography component={"h4"} variant="h4" className="font-gloucester">
              {Strings.watchOurLatestShows}
            </Typography>
            <Typography component={"body"} variant="subtitle1" className="font-notoSans color-gray">
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

      <PartnerProducts />
      <FAQ />
      
    </>
  );
}

export default Dashboard;
