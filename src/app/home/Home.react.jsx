import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import { Typography, Grid } from "@mui/material";
import Img from "../../assets/img-promo.png";
import logo from "../../assets/logo1.png";
import "semantic-ui-css/semantic.min.css";
import QuestionSlider from "../QuestionSlider/QuestionSlider.react";
import RecommendationSection from "../recommendationSection/RecommendationSection.react"
import "./Home.css";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [rOpen, setROpen] = useState(false);
  let handleModal = () => {
    setOpen(false)
    setROpen(true)
  }

  return (
    <Grid
      container
      spacing={2}
      style={{ minHeight: "100vh", backgroundColor: "#454545" }}
      sx={{ pl: 8, pr: 8, pt: 2, overflow: "scroll" }}
      className="main-container"
    >
      <QuestionSlider open={open} />
      <RecommendationSection open={rOpen} onClose={(e) => setROpen(e)} />
      <Grid item xs={12} md={12} sm={12} className="center-align">
        <Image src={logo} alt="" height="50m" width="180em" />
      </Grid>
      <Grid item xs={12} md={6} sm={6} className="center-align">
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: "4em",
            lineHeight: "1em",
            transform: "scale(1, 1.25)",
            fontWeight: "300",
          }}
        >
          <b>Cost Estimator</b>
        </Typography>
        <Typography
          sx={{
            fontFamily: "normal",
            color: "#fff",
            fontSize: "1.5em",
            margin: "1em 0em",
            lineHeight: "1em",
          }}
        >
          <b>Kick Start your journy to awesome content with quodeck</b>
        </Typography>

        <button className="home-started-btn" onClick={() => setOpen(true)}>
          GET STARTED
        </button>
      </Grid>
      <Grid item xs={12} md={6} sm={6}>
        <Image src={Img} alt="" height="auto" />
      </Grid>
    </Grid>
  );
}
