import React, { useState } from "react";
import { Image, Icon } from "semantic-ui-react";
import { Button, Typography, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "../../assets/img-promo.png";
import logo from "../../assets/logo1.png";
import "semantic-ui-css/semantic.min.css";
import QuestionSlider from "../QuestionSlider/QuestionSlider.react";
import RecommendationSection from "../recommendationSection/RecommendationSection.react";
import "./Home.css";
import { borderBottom } from "@mui/system";

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
        spacing={2}
        style={{ minHeight: "100vh", backgroundColor: "#454545" }}
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
        sx={{ p: 5, overflow: "hidden" }}
        textAlign="center"
      >
        <h1>Trusted by India’s largest players…</h1>
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
      <Grid sx={{ p: 5 }} xs={12} md={12} container>
        <Grid item xs={12} md={6} sx={{ p: 3.5 }}>
          <Image
            src="assets/home-img-1.jpg"
            alt=""
            minheight="500px"
            width="auto"
          />
        </Grid>
        <Grid item xs={12} md={6} className="center-align">
          <Typography
            sx={{
              padding: "0 0 15px 0",
              color: "#454545",
              fontSize: "40px",
              lineHeight: 4,
              fontWeight: 700,
            }}
          >
            <p>
              BE PART OF OUR TEAM<br></br>OF SKILLED WRITERS
            </p>
          </Typography>
          <Typography
            sx={{
              padding: "0 0 15px 0",
              fontSize: "18px",
              lineHeight: 2,
              color: "#454545",
              letterSpacing: "0.5px",
              fontWeight: 300,
            }}
          >
            <p>
              PayPerContent’s Team of outstanding writers have provided online
              content for thousands of clients around the world. Their articles
              have appeared on various international websites and have garnered
              praise from our clients.
            </p>

            <p>
              You can join our talented team wherever you are in the world.
              PayPerContent welcomes anyone who has the skill, versatility, and
              creativity. Our freelance writers provide online content writing
              from home, and they come from the US, the UK, Kenya, India,
              Australia, Singapore, and the Philippines. Once you become a
              member of the Team, you will receive editorial guidance, excellent
              compensation, and the opportunity to write as many articles as you
              want and earn as much as you want
            </p>

            <p>
              On top of that, we give you a wonderful opportunity to do content
              writing jobs from home — or anywhere you want. Whether you want to
              write in your living room or your favorite coffee shop, it’s okay
              with us as long as you have a decent internet connection, can
              produce awesome articles, and submit your work on time.
            </p>
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ px: 5 }}>
        <Grid textAlign="center" xs={12}>
          <h1 style={{ color: " #000000", fontWeight: 500 }}>
            Services Included
          </h1>
        </Grid>
        <Grid xs={12} md={6} sx={{ p: 5, position: "relative" }}>
          <div className="custom"></div>
          <div class="services">
            <Image
              src="assets/client3.png"
              width="164"
              height="103"
              alt="Video Based Learning"
            />
            <h2 style={{ color: "#5CCCFC" }}>2D Videos</h2>
            <p class="para_style">
              Learners are being engaged in captivating 2D videos with relevant
              concepts to help them to understand any concepts from top to
              bottom.
            </p>
          </div>
        </Grid>
        <Grid xs={12} md={6} sx={{ p: 5, position: "relative" }}>
          <div className="custom"></div>
          <div class="services">
            <Image
              src="assets/client4.png"
              width="164"
              height="103"
              alt="Online Video Training Platform"
              u
            />
            <h2 style={{ color: "#5CCCFC" }}>3D Videos</h2>
            <p class="para_style">
              3D videos could accord technical concepts, walkthroughs, and other
              product demos with the well-rounded concepts in the videos.
            </p>
          </div>
        </Grid>
        <Grid xs={12} md={6} sx={{ p: 5, position: "relative" }}>
          <div className="custom"></div>
          <div class="services">
            <Image
              src="assets/client5.png"
              width="164"
              height="103"
              alt="Video Course Platform"
            />
            <h2 style={{ color: "#5CCCFC" }}>Interactive Videos</h2>
            <p class="para_style">
              Invoke the attention of learners by integrating dynamic and
              interactive elements in the environment needed to enhance their
              attention.
            </p>
          </div>
        </Grid>
        <Grid xs={12} md={6} sx={{ p: 5, position: "relative" }}>
          <div className="custom"></div>
          <div class="services">
            <Image
              src="assets/client6.png"
              width="164"
              height="103"
              alt="Video Based Learning"
            />
            <h2 style={{ color: "#5CCCFC" }}>Live Action Videos</h2>
            <p class="para_style">
              This type of videos is demonstrated live through anchors or
              instructors creating a viable environment for the learners.
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid container sx={{ p: 5 }}>
        <Grid textAlign="center" xs={12}>
          <p style={{ color: "#2D7DE2", fontWeight: 700 }}>
            THINGS THAT WE PROMISE
          </p>
          <h1>With Our Content Writing Services</h1>
        </Grid>
        <Grid xs={12} md={4} sx={{ p: 5 }} className="center-align">
          <h2>Quick Turnaround Time</h2>
          <p>
            As soon as you order your content our team of professional content
            creators in India start working as per the guidelines.
          </p>
        </Grid>
        <Grid xs={12} md={4} sx={{ p: 5 }} className="center-align">
          <h2>Well Researched</h2>
          <p>
            We focus on providing well researched content solutions through our
            services in India and everything goes as per a solid content
            strategy.
          </p>
        </Grid>
        <Grid xs={12} md={4} sx={{ p: 5 }} className="center-align">
          <h2>SEO Optimized Content</h2>
          <p>
            The content that we deliver is optimized for both the users and
            search engines. It allows our clients to get better results for
            their online SEO campaigns.
          </p>
        </Grid>
        <Grid xs={12} md={4} sx={{ p: 5 }} className="center-align">
          <h2>Copyscape Passed</h2>
          <p>
            We hate copied content as much as you people do. Plagiarism free
            content is always on our priority list and the end product for our
            clients would be 100% unique and engaging content.
          </p>
        </Grid>
        <Grid xs={12} md={4} sx={{ p: 5 }} className="center-align">
          <h2>Tailor-Made</h2>
          <p>
            We ask enough questions before starting a project to know all about
            your needs and requirements. This makes sure that the content aligns
            with your brand's goals.
          </p>
        </Grid>
        <Grid xs={12} md={4} sx={{ p: 5 }} className="center-align">
          <h2>Fully Managed</h2>
          <p>
            You don't need to manage writers and their gigs as we provide fully
            managed content writing services. Focus on the things that you are
            good at and let us do the content part for you.
          </p>
        </Grid>
      </Grid>
      <Grid
        sx={{
          px: 5,
          py: 10,
          backgroundColor: "#454545",
          color: "#fff",
          textAlign: "center",
        }}
        container
      >
        <Grid xs={6} md={3}>
          <span>
            <Icon name="smile outline" size="big" />
          </span>
          <h2>75+</h2>
          <hr
            className="seprator"
            style={{
              textAlign: "center",
              width: "25%",
              backgroundColor: "#fff",
            }}
          ></hr>
          <h3>Happy Clients</h3>
        </Grid>
        <Grid xs={6} md={3}>
          <span>
            <Icon name="user outline" size="big" />
          </span>
          <h2>5,000,000+</h2>
          <hr
            className="seprator"
            style={{
              textAlign: "center",
              width: "25%",
              backgroundColor: "#fff",
            }}
          ></hr>
          <h3>Engaged Learners</h3>
        </Grid>
        <Grid xs={6} md={3}>
          <span>
            <Icon name="trophy" size="big" />
          </span>
          <h2>500+</h2>
          <hr
            className="seprator"
            style={{
              textAlign: "center",
              width: "25%",
              backgroundColor: "#fff",
            }}
          ></hr>
          <h3>Game Constructs</h3>
        </Grid>
        <Grid xs={6} md={3}>
          <span>
            <Icon name="book" size="big" />
          </span>
          <h2>10,000+</h2>
          <hr
            className="seprator"
            style={{
              textAlign: "center",
              width: "25%",
              backgroundColor: "#fff",
            }}
          ></hr>
          <h3>Content Hours</h3>
        </Grid>
      </Grid>
      <Grid
        sx={{ px: 10, py: 5, backgroundColor: "#F5F5F5" }}
        container
        justifyContent="space-evenly"
        alignItem="center"
        position="relative"
      >
        <Grid xs={12} textAlign="center">
          <h1>Blog</h1>
        </Grid>
        <Grid
          xs={12}
          md={3}
          p="1.5em"
          sx={{ borderRadius: "2em", backgroundColor: "#fff", my: 5 }}
        >
          <Image
            src="assets/article1.jpg"
            style={{
              borderRadius: "1.5em",
              width: "100%",
              padding: " 0.5em 0em",
            }}
          />
          <p>Article</p>
          <h3>
            How hyper-casual gaming can be used to transformenterprise outcomes
          </h3>
        </Grid>
        <Grid
          xs={12}
          md={3}
          p="1.5em"
          sx={{ borderRadius: "2em", backgroundColor: "#fff", my: 5 }}
        >
          <Image
            src="assets/article2.jpg"
            style={{
              borderRadius: "1.5em",
              width: "100%",
              padding: " 0.5em 0em",
            }}
          />
          <p>Article</p>
          <h3>5 Ways to elevate your sales rep training & onboarding</h3>
        </Grid>
        <Grid
          xs={12}
          md={3}
          p="1.5em"
          sx={{ borderRadius: "2em", backgroundColor: "#fff", my: 5 }}
        >
          <Image
            src="assets/article3.jpg"
            style={{
              borderRadius: "1.5em",
              width: "100%",
              padding: " 0.5em 0em",
            }}
          />
          <p>Article</p>
          <h3>
            7 Tips for employee learning and development: expert tips on how to
            train your employees
          </h3>
        </Grid>
        <Grid
          xs={10}
          container
          sx={{ p: 8 }}
          alignItems="center"
          justifyContent="space-between"
          className="custom1 center-align"
        >
          <Grid sx={{ color: "#fff" }}>
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
      </Grid>
      <Grid
        sx={{
          px: 5,
          pt: 40,
          color: "#fff",
          backgroundColor: "#454545",
          borderBottom: "0.05px solid gray",
          clipPath: "ellipse(100% 85% at 50% 100%)",
        }}
        container
        justifyContent="space-evenly"
      >
        <Grid xs={12} md={3} p="1.5em">
          <Image src={logo} alt="" height="50m" width="180em" />
          <p style={{ padding: "1em 0em" }}>
            A simple but powerful platform builder to deliver interactive
            experiences that your learners engage with, not because they are
            forced to, but because they want to......
          </p>
          <span className="circle">
            <Icon name="facebook" size="large" />
          </span>
          <span className="circle">
            <Icon name="twitter" size="large" />
          </span>
          <span className="circle">
            <Icon name="instagram" size="large" />
          </span>
          <span className="circle">
            <Icon name="youtube" size="large" />
          </span>
          <span className="circle">
            <Icon name="linkedin" size="large" />
          </span>
        </Grid>
        <Grid xs={12} md={3} p="1.5em">
          <h3>Quick Links</h3>
          <span>----------------------------------------</span>
          <p>Privacy Policy</p>
          <p>Copyright Policy</p>
          <p>Contact us</p>
        </Grid>
        <Grid xs={12} md={3} p="1.5em">
          <h3>Get in Touch</h3>
          <span>----------------------------------------</span>
          <p>
            <Icon name="envelope" color="yellow" />
            <span> markcenter@quodeck.com</span>
          </p>
          <p>
            <Icon name="world" color="yellow" />
            <span> www.quodeck.com</span>
          </p>
        </Grid>
      </Grid>
      <Grid sx={{ backgroundColor: "#454545" }} container textAlign="center">
        <Grid xs={12} py="1em" color="gray">
          <h4>&copy; 2022 QuoDeck Technologies PLC</h4>
        </Grid>
      </Grid>
    </div>
  );
}
