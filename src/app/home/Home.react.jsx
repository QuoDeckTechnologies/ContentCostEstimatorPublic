import React, { useState } from "react";
import { Image, Icon } from "semantic-ui-react";
import { Button, Typography, Grid } from "@mui/material";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "../../assets/img-promo1.png";
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
          <Image src={logo} alt="" minheight="43px" width="174px" />
        </div>
        <Grid
          item
          xs={12}
          md={6}
          sm={12}
          mt={7}
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
            Cost Estimator
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
          >
            Kick Start your journey to awesome content with quodeck
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
          mt={7}
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
      <Grid item sx={{ p: 5 }} xs={12} md={12} container>
        <Grid item xs={12} md={6} sx={{ p: 3.5 }}>
          <Image
            src="assets/home-img-3.png"
            alt=""
            minheight="50em"
            width="auto"
          />
        </Grid>
        <Grid item xs={12} md={6} className="center-align">
          <Typography
            sx={{
              padding: "0 0 15px 0",
              color: "#454545",
              fontSize: "3em",
              letterSpacing: 1,
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
      <Grid item container sx={{ px: 5 }}>
        <Grid item textAlign="center" xs={12}>
          <h1
            style={{ color: "#454545", fontSize: "3em", marginBottom: "0.8em" }}
          >
            Services Included
          </h1>
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 5, position: "relative" }}>
          <div className="custom"></div>
          <div className="services">
            <Image
              src="assets/service1.png"
              width="164"
              height="103"
              alt="Video Based Learning"
            />
            <h2 style={{ color: "#454545" }}>2D Videos</h2>
            <p className="para_style">
              Learners are being engaged in captivating 2D videos with relevant
              concepts to help them to understand any concepts from top to
              bottom.
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
            <h2 style={{ color: "#454545" }}>3D Videos</h2>
            <p className="para_style">
              3D videos could accord technical concepts, walkthroughs, and other
              product demos with the well-rounded concepts in the videos.
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
            <h2 style={{ color: "#454545" }}>Interactive Videos</h2>
            <p className="para_style">
              Invoke the attention of learners by integrating dynamic and
              interactive elements in the environment needed to enhance their
              attention.
            </p>
          </div>
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
            <h2 style={{ color: "#454545" }}>Live Action Videos</h2>
            <p className="para_style">
              This type of videos is demonstrated live through anchors or
              instructors creating a viable environment for the learners.
            </p>
          </div>
        </Grid>
      </Grid>
      <Grid item container sx={{ p: 5 }}>
        <Grid item textAlign="center" xs={12}>
          <h1 style={{ color: "#454545", fontSize: "3em" }}>
            THINGS THAT WE PROMISE
          </h1>
          <h1
            style={{ color: "#454545", fontSize: "1.7em", marginTop: "-0.3em" }}
          >
            With Our Content Writing Services
          </h1>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 5 }}>
          <div className="alignment center-align">
            <span style={{ padding: "0 1em 0 0" }}>
              <Icon name="checkmark box" />
            </span>
            <span>
              <h3 style={{ color: "#43454599" }}>Quick Turnaround Time</h3>
              <p>
                As soon as you order your content our team of professional
                content creators in India start working as per the guidelines.
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
              <h3 style={{ color: "#43454599" }}>Well Researched</h3>
              <p>
                We focus on providing well researched content solutions through
                our services in India and everything goes as per a solid content
                strategy.
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
              <h3 style={{ color: "#43454599" }}>SEO Optimized Content</h3>
              <p>
                The content that we deliver is optimized for both the users and
                search engines. It allows our clients to get better results for
                their online SEO campaigns.
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
              <h3 style={{ color: "#43454599" }}>Copyscape Passed</h3>
              <p>
                We hate copied content as much as you people do. Plagiarism free
                content is always on our priority list and the end product for
                our clients would be 100% unique and engaging content.
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
              <h3 style={{ color: "#43454599" }}>Tailor-Made</h3>
              <p>
                We ask enough questions before starting a project to know all
                about your needs and requirements. This makes sure that the
                content aligns with your brand's goals.
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
              <h3 style={{ color: "#43454599" }}>Fully Managed</h3>
              <p>
                You don't need to manage writers and their gigs as we provide
                fully managed content writing services. Focus on the things that
                you are good at and let us do the content part for you.
              </p>
            </span>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          px: 5,
          py: 10,
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
        sx={{ px: 10, py: 5, backgroundColor: "#F5F5F5" }}
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
        >
          <Image
            src="assets/article1.jpg"
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
            How hyper-casual gaming can be used to transformenterprise outcomes
          </h3>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          p="1.2em"
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
          <span>Article</span>
          <h3
            style={{
              marginTop: "0.5em",
            }}
          >
            5 Ways to elevate your sales rep training & onboarding
          </h3>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          p="1.2em"
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
          <span>Article</span>
          <h3
            style={{
              marginTop: "0.5em",
            }}
          >
            7 Tips for employee learning and development: expert tips on how to
            train your employees
          </h3>
        </Grid>
        <Grid
          item
          xs={10}
          container
          sx={{ py: { xs: 7, md: 10 }, px: { xs: 5, md: 8 } }}
          alignitems="center"
          justifyContent="space-between"
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
          px: 5,
          pt: 35,
          color: "#fff",
          backgroundColor: "#454545",
          borderBottom: "0.05px solid gray",
          clipPath: "ellipse(100% 80% at 50% 100%)",
        }}
        container
        justifyContent="space-evenly"
      >
        <Grid item xs={12} md={3} p="1.5em">
          <Image src={logo} alt="" height="50m" width="180em" />
          <p style={{ padding: "1em 0 0 0" }}>
            A simple but powerful platform builder to deliver interactive
            experiences that your learners engage with, not because they are
            forced to, but because they want to......
          </p>
          <Link to="http://www.facebook.com/QuoDeck" style={{ color: "#fff" }}>
            <i className="circle fab fa-facebook"></i>
          </Link>
          <Link
            to="http://twitter.com/QuoDeck"
            style={{ color: "#fff", marginLeft: "0.5em" }}
          >
            <i className="circle fab fa-twitter"></i>
          </Link>
          <Link
            to="http://www.instagram.com/quodeck/"
            style={{ color: "#fff", marginLeft: "0.5em" }}
          >
            <i className="circle fab fa-youtube"></i>
          </Link>
          <Link
            to="http://www.youtube.com/channel/UCfyQaRg6MiZG_42qy8hCyww/videos?disable_polymer=true"
            style={{ color: "#fff", marginLeft: "0.5em" }}
          >
            <i className="circle fab fa-instagram"></i>
          </Link>
          <Link
            to="http://www.linkedin.com/company/quodeck/"
            style={{ color: "#fff", margin: "0 0.5em" }}
          >
            <i className="circle fab fa-linkedin"></i>
          </Link>
        </Grid>
        <Grid item xs={12} md={3} p="1.5em">
          <h3>Quick Links</h3>
          <span>----------------------------------------</span>
          <p>Privacy Policy</p>
          <p>Copyright Policy</p>
          <p>Contact us</p>
        </Grid>
        <Grid item xs={12} md={3} p="1.5em">
          <h3>Get in Touch</h3>
          <span>----------------------------------------</span>
          <div>
            <Icon name="envelope" color="yellow"></Icon>
            <span>markcenter@quodeck.com</span>
          </div>
          <div>
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
