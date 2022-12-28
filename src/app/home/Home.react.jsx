import React, { useState } from "react";
import { Image, Icon } from "semantic-ui-react";
import { Button, Typography, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "5em",
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipe: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <div>
      <Grid
        container
        item
        style={{ minheight: "100vh", backgroundColor: "#454545" }}
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
          <Image src={logo} alt="" height="50em" width="200em" />
        </div>
        <Grid
          item
          xs={12}
          md={6}
          sm={12}
          mt={7}
          sx={{ pr: { xs: 0, md: 10 } }}
          className="center-align"
          order={{ xs: 2, sm: 2, md: 1, lg: 1 }}
        >
          <Typography
            sx={{
              padding: "0 0 15px 2px",
              margin: "-0.5em  0em",
              color: "#fff",
              fontSize: "18px",
              lineHeight: 1.2,
              fontWeight: 700,
            }}
          >
            Looking to get a content cost estimate?
          </Typography>
          <Typography
            sx={{
              padding: "0 0 15px 0",
              color: "#fff",
              fontSize: "38px",
              lineHeight: 1.2,
              fontWeight: 700,
            }}
          >
            Get an instant estimate with just a few clicks
          </Typography>
          <Typography
            sx={{
              padding: "1.2em 0 3em 0",
              fontSize: "18px",
              lineHeight: 1.2,
              color: "#fff",
              letterSpacing: "0.5px",
              fontWeight: 300,
            }}
          >
            QuoDeck content cost estimator helps you to estimate your cost in
            content creation and ensure that it is not at an exorbitant price
            tag.
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
          mt={7}
          className="center-align"
          order={{ xs: 1, sm: 1, md: 2, lg: 2 }}
        >
          <Image src="assets/img-promo1.png" alt="" />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sm={12}
        sx={{ p: 5, pt: 8, overflow: "hidden" }}
        textAlign="center"
      >
        <h1
          style={{ marginBottom: "0.8em", fontSize: "3em", color: "#454545" }}
        >
          Trusted by India’s largest players…
        </h1>
        <Slider className="carousel" {...settings}>
          <div>
            <Image alt="" src="assets/client3.png" />
          </div>
          <div>
            <Image alt="" src="assets/client4.png" />
          </div>
          <div>
            <Image alt="" src="assets/client5.png" />
          </div>
          <div>
            <Image alt="" src="assets/client6.png" />
          </div>
          <div>
            <Image alt="" src="assets/client7.png" />
          </div>
          <div>
            <Image alt="" src="assets/client8.png" />
          </div>
        </Slider>
      </Grid>
      <Grid
        item
        sx={{ px: { md: 10, xs: 5 }, py: { md: 5, xs: 2 } }}
        xs={12}
        md={12}
        container
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ mb: { xs: 2, md: 0 } }}
          className="center-align"
        >
          <Image src="assets/home-img-3.png" alt="" width="auto" />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          className="center-align"
          sx={{
            flexDirection: { md: "column" },
            display: { md: "flex", xs: "block" },
            justifyContent: { md: "center" },
            alignItems: { md: "center" },
          }}
        >
          <h1
            style={{ marginBottom: "0.8em", fontSize: "3em", color: "#454545" }}
          >
            <p>TEAM OF PROFESSIONAL CONTENT CREATORS</p>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#454545",
            }}
          >
            We are a team of professional content creators with over 6+ years of
            combined experience in the industry.We believe in providing great
            customer experience through excellent content writing services
            keeping your business goals and target audience in mind.
            <br></br>
            <br></br>
            Our goal is to ensure that the customers get what they need – expert
            quality content written to your specifications using a variety of
            techniques and resources.
          </p>
        </Grid>
      </Grid>
      <Grid item container sx={{ px: { md: 5, xs: 2 }, py: { md: 5, xs: 5 } }}>
        <Grid item textAlign="center" xs={12}>
          <h1
            style={{
              color: "#454545",
              fontSize: "3em",
              margin: "0",
              padding: "0",
            }}
          >
            Make your business work smarter, not harder
          </h1>
          <h1
            style={{ color: "#454545", fontSize: "1.7em", margin: "0 0 2em 0" }}
          >
            Services Included
          </h1>
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 5, position: "relative" }}>
          <div className="custom"></div>
          <div className="services">
            <Image
              src="assets/service4.png"
              width="164"
              height="103"
              alt="Video Based Learning"
            />
            <h2 style={{ color: "#454545" }}>Interactive Content</h2>
            <p className="para_style">
              Invoke the attention of learners by integrating dynamic and
              interactive which will enhance their learning, allowing them to
              engage in a more active way with the course content.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 5, position: "relative" }}>
          <div className="custom"></div>
          <div className="services">
            <Image
              src="assets/service2.png"
              width="164"
              height="103"
              alt="Online Video Training Platform"
              u
            />
            <h2 style={{ color: "#454545" }}>Videos</h2>
            <p className="para_style">
              Videos are here to stay. Engaging videos allow your customers to
              learn about your products in a way that was never possible before.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 5, position: "relative" }}>
          <div className="custom"></div>
          <div className="services">
            <Image
              src="assets/service3.png"
              width="164"
              height="103"
              alt="Video Course Platform"
            />
            <h2 style={{ color: "#454545" }}>Illustrations</h2>
            <p className="para_style">
              Our engaging illustrations, appropriate graphics and helpful text
              make the material easy to understand and help you retain more of
              the information.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 5, position: "relative" }}>
          <div className="custom"></div>
          <div className="services">
            <Image
              src="assets/services5.png"
              width="164"
              height="103"
              alt="Video Based Learning"
            />
            <h2 style={{ color: "#454545" }}>Voiceover and translations</h2>
            <p className="para_style">
              Voice-overs and translations can be of great help in many ways.
              Voice overs can clearly persuade your target audience and hold
              their interest for longer.
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid item container sx={{ p: { md: 5, xs: 2 } }}>
        <Grid item textAlign="center" xs={12}>
          <h1 style={{ color: "#454545", fontSize: "3em" }}>
            THINGS THAT WE PROMISE
          </h1>
          <h1
            style={{ color: "#454545", fontSize: "1.7em", marginTop: "-0.3em" }}
          >
            With Our Content Creation Services
          </h1>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 5 }}>
          <div className="alignment center-align">
            <span style={{ padding: "0 1em 0 0" }}>
              <Icon name="checkmark box" />
            </span>
            <span>
              <h3 style={{ color: "#454545cc" }}>Speedy Turnaround Time</h3>
              <p className="para_style">
                We take pride in our ability to deliver on time, every time.Our
                team is ready to start working on your content as soon as you
                order it.
              </p>
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 5 }}>
          <div className=" alignment center-align">
            <span style={{ padding: "0 1em 0 0" }}>
              <Icon name="checkmark box" fontSize="3em" />
            </span>
            <span>
              <h3 style={{ color: "#454545cc" }}>High quality content</h3>
              <p className="para_style">
                We offer focused, reliable and high quality Content Solutions
                Services in business and personal domains across the globe.
              </p>
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 5 }}>
          <div className=" alignment center-align">
            <span style={{ padding: "0 1em 0 0" }}>
              <Icon name="checkmark box" />
            </span>
            <span>
              <h3 style={{ color: "#454545cc" }}>flexible pricing </h3>
              <p className="para_style">
                It lets you create content without breaking the bank. We offer
                both the best creative design at a point that matches your
                budget, while still staying within your target budget.
              </p>
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 5 }}>
          <div className=" alignment center-align">
            <span style={{ padding: "0 1em 0 0" }}>
              <Icon name="checkmark box" />
            </span>
            <span>
              <h3 style={{ color: "#454545cc" }}>Customised Content</h3>
              <p className="para_style">
                We understand how important your brand is to you, and that’s why
                we work closely with you to ensure that our materials will
                deliver exactly what you need.
              </p>
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 5 }}>
          <div className=" alignment center-align">
            <span style={{ padding: "0 1em 0 0" }}>
              <Icon name="checkmark box" />
            </span>
            <span>
              <h3 style={{ color: "#454545cc" }}>We’re here to Manage</h3>
              <p className="para_style">
                Let us manage all aspects of getting your content ready so that
                you can focus on what is important: your business!
              </p>
            </span>
          </div>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 5 }}>
          <div className=" alignment center-align">
            <span style={{ padding: "0 1em 0 0" }}>
              <Icon name="checkmark box" />
            </span>
            <span>
              <h3 style={{ color: "#454545cc" }}>Plagiarism Free</h3>
              <p className="para_style">
                We focus on making content that is unique, simple and engaging.
                So you can rest assured that your content will reach the right
                audience.
              </p>
            </span>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          px: { md: 5, xs: 2 },
          py: { md: 10, xs: 5 },
          backgroundColor: "#454545",
          color: "#fff",
          textAlign: "center",
        }}
        container
      >
        <Grid
          item
          xs={6}
          md={3}
          sx={{ fontWeight: "bolder", pb: { xs: 5, md: 0 } }}
        >
          <span style={{ fontSize: "1.8em" }}>
            <Icon name="smile outline" size="large" />
          </span>
          <h2 className="fontstyle">75+</h2>
          <hr
            className="seprator"
            style={{
              textAlign: "center",
              width: "15%",
              backgroundColor: "#fff",
            }}
          ></hr>
          <h3 className="fontstyle1">Happy Clients</h3>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          sx={{ fontWeight: "bolder", pb: { xs: 5, md: 0 } }}
        >
          <span style={{ fontSize: "1.8em" }}>
            <Icon name="user outline" size="large" />
          </span>
          <h2 className="fontstyle">5,000,000+</h2>
          <hr
            className="seprator"
            style={{
              textAlign: "center",
              width: "15%",
              backgroundColor: "#fff",
            }}
          ></hr>
          <h3 className="fontstyle1">Engaged Learners</h3>
        </Grid>
        <Grid item xs={6} md={3} sx={{ fontWeight: "bolder" }}>
          <span style={{ fontSize: "1.8em" }}>
            <Icon name="trophy" size="large" />
          </span>
          <h2 className="fontstyle">500+</h2>
          <hr
            className="seprator"
            style={{
              textAlign: "center",
              width: "15%",
              backgroundColor: "#fff",
            }}
          ></hr>
          <h3 className="fontstyle1">Game Constructs</h3>
        </Grid>
        <Grid item xs={6} md={3} sx={{ fontWeight: "bolder" }}>
          <span style={{ fontSize: "1.8em" }}>
            <Icon name="book" size="large" />
          </span>
          <h2 className="fontstyle">10,000+</h2>
          <hr
            className="seprator"
            style={{
              textAlign: "center",
              width: "15%",
              backgroundColor: "#fff",
            }}
          ></hr>
          <h3 className="fontstyle1">Content Hours</h3>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          px: 10,
          py: 5,
          backgroundColor: "#F5F5F5",
          display: { md: "flex", xs: "none" },
        }}
        container
        justifyContent="space-evenly"
        alignitems="center"
        position="relative"
      >
        <Grid item xs={12} textAlign="center">
          <h1 style={{ color: "#454545", fontSize: "3em" }}>Blog</h1>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          p="1.2em"
          sx={{ borderRadius: "2em", backgroundColor: "#fff", my: 5 }}
          className="article"
        >
          <a
            target="_blank"
            href="https://quodeckspeak.com/2022/10/06/game-based-learning-market-worth-29-7-billion-by-2026-report-by-marketsandmarkets/"
          >
            <Image
              src="assets/article1.png"
              style={{
                borderRadius: "1.5em",
                width: "100%",
                padding: " 0.5em 0em",
              }}
            />
            <span>Article</span>
            <h3
              style={{
                marginTop: "0.5em",
              }}
            >
              GAME-BASED LEARNING MARKET WORTH $29.7 BILLION BY 2026 – REPORT BY
              MARKETS AND MARKETS
            </h3>
          </a>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          p="1.2em"
          sx={{ borderRadius: "2em", backgroundColor: "#fff", my: 5 }}
          className="article"
        >
          <a
            target="_blank"
            href=" https://quodeckspeak.com/2019/07/15/reasons-to-use-videos-for-employee-training/"
          >
            <Image
              src="assets/article2.png"
              style={{
                borderRadius: "1.5em",
                width: "100%",
                padding: " 0.5em 0em",
              }}
            />
            <span>Article</span>
            <h3
              style={{
                marginTop: "0.5em",
              }}
            >
              REASONS TO USE VIDEOS FOR EMPLOYEE TRAINING
            </h3>
          </a>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          p="1.2em"
          sx={{ borderRadius: "2em", backgroundColor: "#fff", my: 5 }}
          className="article"
        >
          <a
            target="_blank"
            href="https://quodeckspeak.com/2021/01/14/4-micro-learning-strategies-for-employee-engagement/"
          >
            <Image
              src="assets/article3.png"
              style={{
                borderRadius: "1.5em",
                width: "100%",
                padding: " 0.5em 0em",
              }}
            />
            <span>Article</span>
            <h3
              style={{
                marginTop: "0.5em",
              }}
            >
              MICRO-LEARNING STRATEGIES FOR EMPLOYEE- ENGAGEMENT
            </h3>
          </a>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          py: { md: 10, xs: 5 },
          px: { md: 5, xs: 2 },
          display: { md: "none", xs: "flex" },
        }}
        container
        // justifyContent="space-evenly"
        // alignitems="center"
      >
        <Grid item xs={12} textAlign="center">
          <h1 style={{ color: "#454545", fontSize: "3em" }}>Blog</h1>
        </Grid>
        <Grid item sx={{ py: 3 }}>
          <a
            target="_blank"
            href="https://quodeckspeak.com/2022/10/06/game-based-learning-market-worth-29-7-billion-by-2026-report-by-marketsandmarkets/"
          >
            <div className="flex">
              <div style={{ maxWidth: "50%" }}>
                <Image
                  src="assets/article1.png"
                  style={{
                    // minHeight: "100px",
                    // minWidth: "200px",
                    padding: " 0.5em",
                  }}
                />
              </div>
              <div style={{ maxWidth: "50%" }}>
                Article
                <h3
                  style={{
                    marginTop: "0.5em",
                  }}
                >
                  GAME-BASED LEARNING MARKET WORTH $29.7 BILLION BY 2026 –
                  REPORT BY MARKETS AND MARKETS
                </h3>
              </div>
            </div>
          </a>
        </Grid>
        <Grid item sx={{ py: 3 }}>
          <a
            target="_blank"
            href="https://quodeckspeak.com/2019/07/15/reasons-to-use-videos-for-employee-training/"
          >
            <div className="flex">
              <div style={{ maxWidth: "50%" }}>
                <Image
                  src="assets/article2.png"
                  style={{
                    // minHeight: "100px",
                    // minWidth: "200px",
                    padding: " 0.5em",
                  }}
                />
              </div>
              <div style={{ maxWidth: "50%" }}>
                Article
                <h3
                  style={{
                    marginTop: "0.5em",
                  }}
                >
                  REASONS TO USE VIDEOS FOR EMPLOYEE TRAINING
                </h3>
              </div>
            </div>
          </a>
        </Grid>
        <Grid item sx={{ py: 3 }}>
          <a
            target="_blank"
            href="https://quodeckspeak.com/2021/01/14/4-micro-learning-strategies-for-employee-engagement/"
          >
            <div className="flex">
              <div style={{ maxWidth: "50%" }}>
                <Image
                  src="assets/article3.png"
                  style={{
                    // minHeight: "100px",
                    // minWidth: "200px",
                    padding: " 0.5em",
                  }}
                />
              </div>
              <div style={{ maxWidth: "50%" }}>
                Article
                <h3
                  style={{
                    marginTop: "0.5em",
                  }}
                >
                  MICRO-LEARNING STRATEGIES FOR EMPLOYEE- ENGAGEMENT
                </h3>
              </div>
            </div>
          </a>
        </Grid>
      </Grid>
      <Grid position="relative" container justifyContent="center">
        <Grid
          item
          md={10}
          xs={11.5}
          container
          sx={{
            py: { xs: 7, md: 10 },
            px: { xs: 5, md: 8 },
            justifyContent: { xs: "center", md: "space-between" },
          }}
          alignItems="center"
          className="custom1 center-align"
        >
          <Grid item sx={{ color: "#fff" }}>
            <h1 style={{ fontSize: "2.5em" }}>Why to wait?</h1>
          </Grid>
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
      </Grid>
      <Grid
        item
        sx={{
          px: { md: 5, xs: 2 },
          pt: 35,
          color: "#fff",
          backgroundColor: "#454545",
          borderBottom: "0.05px solid gray",
          clipPath: {
            md: "ellipse(100% 80% at 50% 100%)",
            xs: "inset(20% 0% 0% 0%);",
          },
        }}
        container
        justifyContent="space-evenly"
      >
        <Grid item xs={12} md={3} p="1.5em">
          <Image src={logo} alt="" height="50m" width="180em" />
          <p style={{ margin: "1em 0", fontSize: "1.25em" }}>
            A simple but powerful platform builder to deliver interactive
            experiences that your learners engage with, not because they are
            forced to, but because they want to......
          </p>
          <a
            target="_blank"
            href="https://www.facebook.com/QuoDeck"
            style={{ color: "#fff" }}
          >
            <i className="circle fab fa-facebook"></i>
          </a>
          <a
            target="-blank"
            href="https://twitter.com/QuoDeck"
            style={{ color: "#fff", marginLeft: "0.5em" }}
          >
            <i className="circle fab fa-twitter"></i>
          </a>
          <a
            target="-blank"
            href="https://www.instagram.com/quodeck/"
            style={{ color: "#fff", marginLeft: "0.5em" }}
          >
            <i className="circle fab fa-youtube"></i>
          </a>
          <a
            target="-blank"
            href="https://www.youtube.com/channel/UCfyQaRg6MiZG_42qy8hCyww/videos?disable_polymer=true"
            style={{ color: "#fff", marginLeft: "0.5em" }}
          >
            <i className="circle fab fa-instagram"></i>
          </a>
          <a
            target="-blank"
            href="https://www.linkedin.com/company/quodeck/"
            style={{ color: "#fff", margin: "0 0.5em" }}
          >
            <i className="circle fab fa-linkedin"></i>
          </a>
        </Grid>
        <Grid item xs={12} md={3} p="1.5em">
          <h3 style={{ padding: 0, margin: 0 }}>Quick Links</h3>
          <span>----------------------------------------</span>
          <a target="_blank" href="https://www.quodeck.com/welcome/">
            <p
              style={{ color: "#fff", margin: "0.5em 0em", fontSize: "1.25em" }}
            >
              Privacy Policy
            </p>
          </a>
          <a target="_blank" href="https://www.quodeck.com/welcome/">
            <p
              style={{ color: "#fff", margin: "0.5em 0em", fontSize: "1.25em" }}
            >
              Copyright Policy
            </p>
          </a>
          <a target="_blank" href="https://www.quodeck.com/welcome/">
            <p
              style={{ color: "#fff", margin: "0.5em 0em", fontSize: "1.25em" }}
            >
              Contact us
            </p>
          </a>
        </Grid>
        <Grid item xs={12} md={3} p="1.5em">
          <h3 style={{ padding: 0, margin: 0 }}>Get in Touch</h3>
          <span>----------------------------------------</span>
          <div className="footer">
            <Icon name="envelope" color="yellow"></Icon>
            <span>markcenter@quodeck.com</span>
          </div>
          <div className="footer">
            <Icon name="world" color="yellow" />
            <span>www.quodeck.com</span>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{ backgroundColor: "#454545" }}
        container
        textAlign="center"
      >
        <Grid item xs={12} py="1em" color="gray">
          <h4>&copy; 2022 QuoDeck Technologies PLC</h4>
        </Grid>
      </Grid>
    </div>
  );
}
