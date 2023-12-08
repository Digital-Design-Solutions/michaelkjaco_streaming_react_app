import React from "react";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

export const VideoCard = ({ timeStamp, title, description, imageUrl }) => {
  return (
    <div
    // style={{ width: "400px" }}
    >
      {imageUrl === "" ? (
        <div
          style={{ backgroundColor: "#3E4952", width: "100%", height: "400px" }}
        />
      ) : (
        <img src={imageUrl} alt="" style={{ width: "100%", height: 300 }} />
      )}
      <div
        style={{
          position: "absolute",
          backgroundColor:
            imageUrl !== "" ? "#3E4952" : "rgba(92, 79, 92, 0.8)",
          color: "#fff",
          padding: "0px 8px",
          borderRadius: "4px",
          alignSelf: "start",
          top: "10px",
          right: "10px",
        }}
      >
        <span style={{ fontSize: "16px" }}>{timeStamp}</span>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "8px",
          margin: "0px 16px 8px",
          display: "flex",
          alignItems: "center",
          width: "95%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ padding: "8px" }}>
          <h4
            style={{
              color: imageUrl !== "" ? "#fff" : "grey",
              fontSize: "16px",
              padding: "0px",
              margin: "0px",
            }}
          >
            {title}
          </h4>
          <span
            style={{
              fontSize: "12px",
              color: imageUrl !== "" ? "#C7C7C7" : "grey",
            }}
          >
            {description}
          </span>
        </div>

        <PlayCircleFilledIcon
          fontSize="large"
          sx={{ fontSize: "64px", color: "#fff" }}
        />
      </div>
    </div>
  );
};
