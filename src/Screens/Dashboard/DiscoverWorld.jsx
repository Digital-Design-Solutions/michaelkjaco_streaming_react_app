import React from 'react';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Strings } from '../../Utils/strings';
import { LocalImages } from '../../Utils/images';


const ImageFrame = ({ imageUrl, width, height, marginLeft }) => {
  return (
    <div style={{ width, height, marginLeft: marginLeft || "0px" }}>
      <img src={imageUrl} style={{ width: "100%", height: "100%" }} alt="" />
    </div>
  );
};


const DiscoverWorld = () => {
  return (
    <div className='discover-world-main'>
      <div className='discover-world'>
        <Grid container sx={{width: "100%", flexDirection: {sm:"column-reverse", md:"row"}}}>
            <Grid xs={12} md={6} xl={6} sx={{py: {sm:0, md:10}}} className='discover-world-left'>
              <Box xl="6" md="12" sm="12" xs="12">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <ImageFrame
                    imageUrl={LocalImages.discoverImg01}
                    height="80%"
                    width="30%"
                  />
                  <ImageFrame imageUrl={LocalImages.discoverImg02} height="80%" width="40%" />
                </div>
                <div
                  style={{
                    marginTop: "-15%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    justifyContent: "center",
                  }}
                >
                  <ImageFrame imageUrl={LocalImages.discoverImg03} height="60%" width="35%" />
                  <ImageFrame
                    imageUrl={LocalImages.discoverImg04}
                    height="60%"
                    width="38%"
                    marginLeft="-3%"
                  />
                </div>
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                height: {sm:"50vh", md:"100vh"},
                pt: {sm:12, md:0},
              }}
              >
              <Typography
                component={"h3"}
                variant="h3"
                className="font-gloucester"
              >
                {Strings.discoverAWorldOfContent}
              </Typography>
              <Typography
                component={"body"}
                variant="subtitle1"
                className="font-notoSans color-gray"
                sx={{px: {md:20, sx:5}, pb: 3, textAlign: "center", lineHeight: 1}}
              >
                {Strings.immerseYourself}
              </Typography>
              <img src={LocalImages.leaveWings} style={{ width: "120px" }} alt="" />
              </Box>
            </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default DiscoverWorld
