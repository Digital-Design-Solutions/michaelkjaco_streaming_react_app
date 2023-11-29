import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

import { About } from "./About";
import Header from "../../Components/Header";
import PartnerProducts from "../../Components/PartnerProducts";
import FAQ from "../../Components/faq";
import { LocalImages } from "../../Utils/images";
import { Strings } from "../../Utils/strings";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper/modules";
import { VideoCard } from "../../Components/VideoCard";

const listData = [
  "https://carousel-slider.uiinitiative.com/images/thor-ragnarok.jpg",
  "https://carousel-slider.uiinitiative.com/images/suicide-squad.jpg",
  "https://carousel-slider.uiinitiative.com/images/spider-man.jpg",
  // "https://carousel-slider.uiinitiative.com/images/justice-league.jpg",
  // "https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg",
  // "https://carousel-slider.uiinitiative.com/images/eternals.jpg",
  // "https://carousel-slider.uiinitiative.com/images/dr-strange.jpg",
];

function Dashboard() {
  const [showSwiper, setShowSwiper] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSwiper(true);
    }, 50);
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ width: "100%" }} className="header-bg" />

      <Box display="flex" height="100vh" width={"100vw"}>
        <Box
          sx={{
            width: "120vw",
            marginLeft: "-10%",
            marginTop: "-13%",
            // height: "100vh",
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
            <Typography
              component={"h4"}
              variant="h4"
              className="font-gloucester"
            >
              {Strings.watchOurLatestShows}
            </Typography>
            <Typography
              component={"body"}
              variant="subtitle1"
              className="font-notoSans color-gray"
            >
              {Strings.startSavingYourTimerWithFramerWireframeWebuiKit}
            </Typography>
            <img src={LocalImages.leaveWings} style={{ width: "120px" }} />
          </Box>

          <div style={{ margin: "4% 4% 0px" }}>
            {showSwiper && (
              <Swiper
                navigation={true}
                modules={[Navigation, EffectCoverflow]}
                initialSlide={1}
                className="mySwiper"
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 100,
                  depth: 1000,
                  modifier: 1,
                  slideShadows: true,
                }}
                spaceBetween={0}
                slidesPerView={2}
                autoplay
                loop
                style={{
                  width: '100%', overflow: 'hidden'
                }}
              >
                {listData.map((item) => (
                  <SwiperSlide style={{ width: "500px" }}>
                    <VideoCard
                      description={
                        "Start saving your time with Framer Wireframe Web UI Kit."
                      }
                      title={"Admin Panel"}
                      timeStamp={"01:34:45"}
                      imageUrl={item}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
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
