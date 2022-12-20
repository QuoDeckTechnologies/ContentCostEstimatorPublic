import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const ColoredSlider = styled(Slider)({
  color: "#FFBF00",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#FFBF00",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    color: "#000",
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#FFBF00",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

function valueLabelFormat(value) {
  return `${value}%`;
}

export default function CustomizedSlider({ name, value, onChange }) {
  return (
    <ColoredSlider
      value={value}
      onChange={onChange}
      name={name}
      getAriaValueText={valueLabelFormat}
      valueLabelFormat={valueLabelFormat}
      valueLabelDisplay="on"
      defaultValue={20}
    />
  );
}
