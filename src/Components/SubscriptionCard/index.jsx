import React from "react";
import {
  CardContent,
  CardHeader,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export const SubscriptionCard = ({ header, body, footer, headerColor }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "15px 0px 25px 0px",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: headerColor || "#1A315C",
          marginLeft: "-3%",
          width: "105%",
          padding: "10px 0px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "24px" }}>{header}</p>
      </div>

      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "2% 0%",
          alignSelf: "center",
          height: "100%",
        }}
      >
        {body?.map((item) => (
          <FormControlLabel required control={<Checkbox />} label={item} />
        ))}
      </CardContent>
      <div
        style={{
          backgroundColor: "#1A315C",
          marginLeft: "-3%",
          width: "103%",
          padding: "10px 0px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "22px" }}>{footer}</p>
      </div>
    </div>
  );
};
