import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import { LocalImages } from "../../Utils/images";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import QueuePlayNextOutlinedIcon from "@mui/icons-material/QueuePlayNextOutlined";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SliderDots } from "./SliderDots";
import { Strings } from "../../Utils/strings";
// import "./Slider.css";

const UpcomingStreaming = () => {
  const [showSwiper, setShowSwiper] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const swiperRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setShowSwiper(true);
    }, 100);
  }, []);

  const onBackClick = () => {
    const currentActiveIndex = swiperRef?.current?.swiper?.activeIndex;
    if (currentActiveIndex >= 1) {
      swiperRef?.current.swiper.slideTo(currentActiveIndex - 1);
    } else {
      swiperRef?.current.swiper.slideTo(0);
    }
  };

  const onForwardClick = () => {
    const currentActiveIndex = swiperRef?.current?.swiper?.activeIndex;
    if (currentActiveIndex <= 1) {
      swiperRef?.current.swiper.slideTo(currentActiveIndex + 1);
    } else {
      swiperRef?.current.swiper.slideTo(2);
    }
  };

  return (
    <div style={{ color: "#fff" }}>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid
          xs={12}
          md={6}
          xl={6}
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#000",
            padding: "15% 0",
            justifyContent: "left",
            // paddingLeft: "80px",
          }}
        >
          <Box sx={{p:0, pt: 30}}>
            <Typography
              component={"h3"}
              variant="h3"
              className="font-gloucester color-white text-left"
            >
              {Strings.watchUsLive}
              <br />
              {Strings.upcomingStreamingSessions}
            </Typography>
            <Typography
              component={"body"}
              variant="subtitle1"
              className="font-notoSans color-gray text-left"
              sx={{ pr: { md: 20, sx: 5 }, pb: 3, lineHeight: 1 }}
            >
              {Strings.homeIsBehind}
            </Typography>

            <span className="btn-style01">VIEW SCHEDULE</span>
          </Box>
        </Grid>
        <Grid style={{}} xs={12} md={6} xl={6}>
          {!showSwiper ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: "18px", color: "black" }}>Loading...</h1>
            </div>
          ) : (
            <Grid xs={12} className="scheduleCardContent" sx={{position: "relative", top: {xs:-150, md:30}}}>
              <div
                style={{
                  position: "relative",
                  width: "93%",
                  height: "100%",
                }}
              >
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 100,
                    depth: 600,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  spaceBetween={0}
                  slidesPerView={3}
                  modules={[EffectCoverflow]}
                  navigation
                  direction="vertical"
                  className="mySwiper"
                  initialSlide={1}
                  ref={swiperRef}
                  onSlideChange={(swiper) =>
                    setActiveSlide(swiper?.activeIndex)
                  }
                >
                  <SwiperSlide style={{ width: 500, height: 250 }}>
                    <ScheduleCard
                      eventDate={{ day: "THURS", date: "09", month: "AUG" }}
                      isActive={activeSlide == 0}
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ width: 500, height: 250 }}>
                    <ScheduleCard
                      eventDate={{ day: "THURS", date: "17", month: "AUG" }}
                      isActive={activeSlide == 1}
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ width: 500, height: 250 }}>
                    <ScheduleCard
                      eventDate={{ day: "THURS", date: "28", month: "AUG" }}
                      isActive={activeSlide == 2}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              {/* <SliderNav
                onBackClick={onBackClick}
                onForwardClick={onForwardClick}
                currentActiveIndex={activeSlide}
              /> */}
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default UpcomingStreaming;
const SliderNav = (onBackClick, onForwardClick, currentActiveIndex) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10%",
      }}
    >
      <button onClick={onBackClick} fill="default">
        <img
          src={LocalImages.playBtnTop}
          style={{
            width: "25px",
            height: "25px",
            filter: "brightness(255) invert(1)",
          }}
        />
      </button>
      <div
        style={{
          padding: "16px 0px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {new Array(3).fill(0).map((item, index) => (
          <SliderDots
            color={currentActiveIndex === index ? "#000" : "rgba(0,0,0,0.4)"}
            uniqueKey={index}
          />
        ))}
      </div>
      <Box onClick={onForwardClick} fill="default">
        <img
          src={LocalImages.playBtnTop}
          style={{
            width: "25px",
            height: "25px",
            filter: "brightness(255) invert(1)",
            transform: "rotate(180deg)",
          }}
        />
      </Box>
    </div>
  );
};

const ScheduleCard = ({ eventDate, isActive }) => {
  const { day, date, month } = eventDate;

  return (
    <div
      style={{
        border: "none",
        borderTopLeftRadius: "6px",
        borderBottomLeftRadius: "6px",
        padding: "16px",
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#1A315C",
        boxShadow: isActive ? "12px 0px 25px 12px rgba(200,0,0,0.7)" : "",
      }}
    >
      {/* date */}
      <Box
        style={{
          flex: 1,
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          component={"h1"}
          style={{
            fontWeight: "400",
            fontSize: "3.5vh",
            padding: "0px",
            margin: "0px",
          }}
        >
          {day}
        </Typography>
        <Typography
          variant="h1"
          component={"h1"}
          style={{
            fontWeight: "400",
            fontSize: "12vh",
            padding: "0px",
            margin: "0px",
          }}
        >
          {date}
        </Typography>
        <Typography
          variant="h1"
          component={"h1"}
          style={{
            fontWeight: "400",
            fontSize: "6vh",
            padding: "0px",
            margin: "0px",
          }}
        >
          {month}
        </Typography>
      </Box>

      {/* live info */}
      <Box
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
        }}
      >
        <img src={LocalImages.liveTv} alt="live_tv" style={{ width: "30px" }} />
        <h1
          style={{
            fontWeight: "400",
            padding: "0px 0px 0px 0px",
            margin: "0px 0px 0px 0px",
            fontSize: "3.4vh",
          }}
        >
          IWC LIVE
        </h1>
        <h1
          style={{
            fontWeight: "400",
            padding: "0px",
            margin: "2% 0px 6% 0px",
            fontSize: "3.4vh",
          }}
        >
          05:00 PM
        </h1>

        <span
          style={{
            border: "1.5px solid #fff",
            borderRadius: "4px",
            padding: "4px 16px",
            color: "#fff",
            fontSize: "12px",
            alignSelf: "self-start",
          }}
        >
          WATCH NOW
        </span>
      </Box>

      {/* nav links */}
      <Box
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "24px",
        }}
      >
        <QueuePlayNextOutlinedIcon style={{ fontSize: "36px" }} />
        <MarkunreadIcon style={{ fontSize: "36px", margin: "8px 0px" }} />
        <SmsOutlinedIcon style={{ fontSize: "36px" }} />
      </Box>

      <div
        style={{
          position: "absolute",
          left: 0,
          top: "25%",
          height: "50%",
          width: "1%",
          backgroundColor: isActive ? "red" : "rgba(255,255,255,0.6)",
        }}
      />
    </div>
  );
};
