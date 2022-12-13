import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Image } from "semantic-ui-react";
import { Button, Typography, Grid } from "@mui/material";
import Img from "../../assets/img-promo.png";
import logo from "../../assets/logo1.png";
import "semantic-ui-css/semantic.min.css";
import QuestionSlider from "../QuestionSlider/QuestionSlider.react";
import RecommendationSection from "../recommendationSection/RecommendationSection.react";
import "./Home.css";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [rOpen, setROpen] = useState(false);
  let handleModal = () => {
    setOpen(false);
    setROpen(true);
  };

  return (
    <Grid
      container
      spacing={2}
      style={{ minHeight: "100vh", backgroundColor: "#454545" }}
      sx={{ pl: 8, pr: 8 }}
      className="main-container"
    >
      <QuestionSlider open={open} onSubmit={() => handleModal()} />
      <RecommendationSection
        open={rOpen}
        onClose={(e) => setROpen(e)}
        level={4}
        showButton
      />
      <div className="logoimg">
        <Image src={logo} alt="" height="50m" width="180em" />
      </div>
      <Grid
        item
        xs={12}
        md={6}
        sm={6}
        className="center-align"
        order={{ xs: 2, sm: 2, lg: 1 }}
      >
        <Typography
          sx={{
            padding: "0 0 15px 0",
            color: "#fff",
            fontSize: "48px",
            lineHeight: "54px",
            fontWeight: 700,
          }}
        >
          <h1>Cost Estimator</h1>
        </Typography>
        <Typography
          sx={{
            padding: "0 0 15px 0",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#fff",
            letterSpacing: "0.5px",
            fontWeight: 100,
          }}
        >
          Kick Start your journy to awesome content with quodeck
        </Typography>
        <Button
          variant="outlined"
          sx={{
            background: "transparent",
            border: "1px solid #fff",
            borderRadius: "4px",
            display: "inline-block",
            padding: " 11px 32px",
            fontSize: " 15px",
            lineHeight: "28px",
            fontWeight: 500,
            textTransform: "uppercase",
            transition: "1s",
            marginTop: "2em",
            color: "#fff",
            ":hover": {
              backgroundColor: "#ffbf00",
              color: "#000",
            },
          }}
          onClick={() => setOpen(true)}
        >
          Get Started
        </Button>
      </Grid>
      <Grid item xs={12} md={6} sm={6} order={{ xs: 1, sm: 2, lg: 2 }}>
        <Image src={Img} alt="" height="auto" />
      </Grid>
    </Grid>
  );
}
