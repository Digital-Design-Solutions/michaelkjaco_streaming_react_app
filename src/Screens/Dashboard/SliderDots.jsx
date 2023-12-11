import { Box } from "@mui/material";
import React from "react";

export const SliderDots = ({uniqueKey, color}) => {
  return (
    <Box
      sx={{
        background: color,
        height: "12px",
        width: "12px",
        borderRadius: "50px",
        margin: "5px 4px",
      }}
    />
  );
};
