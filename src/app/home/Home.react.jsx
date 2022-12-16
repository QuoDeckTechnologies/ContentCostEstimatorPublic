import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import { Button, Typography, Grid } from "@mui/material";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
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
    <div>
      <Grid
        container
        spacing={2}
        style={{ minHeight: "100vh", backgroundColor: "#454545" }}
        // sx={{ pl: 8, pr: 8 }}
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
          sm={12}
          className="center-align"
          order={{ xs: 2, sm: 2, md: 1, lg: 1 }}
        >
          <Typography
            sx={{
              padding: "0 0 15px 0",
              color: "#fff",
              fontSize: "40px",
              lineHeight: 4,
              fontWeight: 700,
            }}
          >
            <p>Cost Estimator</p>
          </Typography>
          <Typography
            sx={{
              padding: "0 0 15px 0",
              fontSize: "18px",
              lineHeight: 2,
              color: "#fff",
              letterSpacing: "0.5px",
              fontWeight: 300,
            }}
            className="fontstyle"
          >
            <p>Kick Start your journey to awesome content with quodeck</p>
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
              lineHeight: 2,
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
        <Grid
          item
          xs={12}
          md={6}
          sm={12}
          order={{ xs: 1, sm: 1, md: 2, lg: 2 }}
        >
          <Image src={Img} alt="" height="auto" />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sm={12}
        sx={{ p: 10 }}
        justifyContent="center"
        textAlign="center"
      >
        <h1>Trusted by India’s largest players…</h1>
        <div className="carousel" loop>
          <div class="item">
            <Image alt="" src="assets/client3.png" />
          </div>

          <div class="item">
            <Image alt="" src="assets/client4.png" />
          </div>

          <div class="item">
            <Image alt="" src="assets/client5.png" />
          </div>

          <div class="item">
            <Image alt="" src="assets/client6.png" />
          </div>

          <div class="item">
            <Image alt="" src="assets/client7.png" />
          </div>

          <div class="item">
            <Image alt="" src="assets/client8.png" />
          </div>
        </div>
      </Grid>
    </div>
  );
}
