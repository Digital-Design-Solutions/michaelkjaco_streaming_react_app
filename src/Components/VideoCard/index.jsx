import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export const VideoCard = ({ timeStamp, title, description, imageUrl }) => {
  return (
    <div style={{ width: "500px", backgroundColor: 'green' }}>
      <img src={imageUrl} alt="" style={{width: '100%'}} />
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
          position: 'absolute',
          bottom: '8px',
          margin: '0px 8px',
          display: "flex",
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
          backgroundColor: 'red'
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

        <PlayCircleIcon fontSize="large" sx={{fontSize: '48px', color: '#fff'}} />
      </div>
    </div>
  );
  return (
    <div
      style={{
        borderRadius: "8px",
        height: "30vh",
        width: "30vw",
        ...(imageUrl && {
          backgroundImage: `url( ${imageUrl} )`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#3E4952",
      }}
    >
      <div
        style={{
          display: "flex",
          float: "right",
          margin: "10px",
          backgroundColor:
            imageUrl !== "" ? "#3E4952" : "rgba(92, 79, 92, 0.8)",
          color: "#fff",
          padding: "4px 16px",
          borderRadius: "4px",
          alignSelf: "end",
        }}
      >
        <span>{timeStamp}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          margin: "16px",
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

        <PlayCircleIcon />
      </div>
    </div>
  );
};
