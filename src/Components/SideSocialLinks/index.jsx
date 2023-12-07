import React from "react";

import { LocalImages } from "../../Utils/images";

export const SideSocialLinks = () => {
  return (
    <div className="side-social-link-container">
      <div
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50px",
          backgroundColor: "rgba(0,255,0,0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <img
          src={LocalImages.youtubeLogo}
          style={{ width: "25px", height: "25px" }}
          alt="logo"
        />
        <div
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50px",
            position: "absolute",
            backgroundColor: "rgba(0,255,0,0.7)",
          }}
        />
      </div>
      <LogoContainer
        bgColor="rgba(255,255,255,1)"
        imgUrl={LocalImages.cabLogo}
        imagStyle={{
          width: "35%",
          height: "35%",
        }}
      />
      <LogoContainer bgColor="rgba(66, 103, 178, 1)" imgUrl={LocalImages.fbLogo} />
      <div
        style={{
          width: "50px",
          height: "35px",
          display: "block",
          marginBottom: "12px",
          marginLeft: "-10px",
        }}
      >
        <img
          src={LocalImages.instaLogo}
          style={{ width: "100%", height: "100%" }}
          alt="logo"
        />
      </div>
      <div
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <img
          src={LocalImages.twitterLogo}
          style={{ width: "100%", height: "100%" }}
          alt="logo"
        />
      </div>
      <div
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <img
          src={LocalImages.telegramLogo}
          style={{ width: "100%", height: "100%" }}
          alt="logo"
        />
      </div>
    </div>
  );
};

const LogoContainer = ({ bgColor, imgUrl, imagStyle }) => {
  return (
    <div
      style={{
        width: "35px",
        height: "35px",
        borderRadius: "50px",
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "12px",
      }}
    >
      <img
        src={imgUrl}
        style={{ width: "25px", height: "25px", ...imagStyle }}
        alt="logo"
      />
    </div>
  );
};
