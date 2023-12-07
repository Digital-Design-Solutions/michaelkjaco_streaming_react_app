import { Typography } from "@mui/material";
import React, { useState } from "react";

const CustomInput = ({
  value,
  onChangeText,
  handleBlur,
  isError,
  errorMsg,
  isRequired,
  label,
  type,
  prefixIcon,
  suffixIcon,
  placeholder,
}) => {
  const [getInputFocus, setInputFocused] = useState(false);
  const [toggleSuffixIcon, setToggleSuffixIcon] = useState(false);

  return (
    <div style={{ marginTop: "8px" }}>
      <Typography
        component={"body"}
        variant="subtitle1"
        style={{ color: getInputFocus ? "#464A5" : isError ? "red" : "#464A53", fontSize: "14px" }}
      >
        {label}
        {isRequired ? "*" : ""}
      </Typography>
      <div
        style={{
          border: `2px solid ${
            getInputFocus ? "#3880ff" : isError ? "red" : "#DDDFE1"
          }`,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginBottom: isError ? "4px" : "0px",
          alignItems: "center",
        }}
      >
        {prefixIcon !== undefined ? (
          <div
            style={{
              backgroundColor: "#6A707E1A",
              padding: "12px 0px 12px 12px",
            }}
          >
            {prefixIcon}
          </div>
        ) : null}
        <input
          onFocus={() => setInputFocused(true)}
          onBlur={(e) => {
            handleBlur && handleBlur(e);
            setInputFocused(false);
          }}
          value={value}
          onChange={(e) => onChangeText(e.target.value)}
          type={type === "password" && toggleSuffixIcon ? "text" : type}
          placeholder={placeholder}
          required={isRequired}
          style={{ border: "none", outline: "none", padding: "8px", flex: 1 }}
        />
        {suffixIcon !== undefined ? (
          <div
            style={{ padding: "12px" }}
            onClick={() => setToggleSuffixIcon(!toggleSuffixIcon)}
          >
            {suffixIcon(toggleSuffixIcon)}
          </div>
        ) : null}
      </div>
      {isError ? (
        <Typography variant="body1" component={"body"} style={{ color: "red" }}>
          {errorMsg}
        </Typography>
      ) : null}
    </div>
  );
};

export default CustomInput;
