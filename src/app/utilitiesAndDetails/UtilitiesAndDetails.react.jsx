import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import ViewDetails from "../viewDetails/ViewDetails.react";
import Customise from "../customise/Customise.react";
import { Image } from "semantic-ui-react";
import logo from "../../assets/logo.png";
import smallLogo from "../../assets/favicon.png";
import { Link } from "react-router-dom";

function UtilitiesAndDetails() {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);
  const [index, setIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = {
    fontSize: "1.2em",
    fontWeight: 700,
    borderRadius: "0.5em",
    color: "#fff",
    "&.Mui-selected": {
      color: "#000",
      backgroundColor: "#ffbf00",
    },
    "&:hover": {
      backgroundColor: "#ffbf00",
    },
    color: "#fff",
    transition: "1s",
    px: { xs: 0, sm: 2 },
    border: "2px solid #fff",
  };

  function handleTab(index) {
    setIndex(index);
  }

  return (
    <Box sx={{ width: "100%", backgroundColor: "#f4f4f4" }}>
      <Box>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            backgroundColor: "#686868",
            padding: "1em 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: {
              xs: "0.55em",
              sm: "0.8em",
              md: "1em",
            },
            position: "fixed",
            top: "0",
            width: "100%",
            zIndex: "99",
            boxShadow: "0 2px 10px #00000080",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContentL: "left",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                ml: { xs: 4, xl: 15 },
                display: { xs: "none", md: "inline-block" },
              }}
            >
              <Image src={logo} alt="" width="200em" />
            </Box>
            <Box
              sx={{
                ml: { xs: 1, sm: 4, xl: 15 },
                display: { md: "none" },
                width: "6em",
              }}
            >
              <Image src={smallLogo} alt="" />
            </Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "transparent",
                },
                minHeight: 0,
                "& :hover": {
                  color: "#fff",
                },
                "& .Mui-selected": {
                  border: "2px solid #000",
                },
                ml: { xs: 1, md: 4 },
              }}
            >
              <Tab
                sx={tabStyle}
                label="View Details"
                {...a11yProps(0)}
                onClick={(e) => handleTab(0)}
              />
              <Tab
                sx={{ ...tabStyle, ml: 2 }}
                label="Customise"
                {...a11yProps(1)}
                onClick={(e) => handleTab(1)}
              />
            </Tabs>
          </Box>
          <Box
            sx={{
              fontSize: "2em",
              mr: { xs: 1, sm: 5, xl: 15 },
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5em",
            }}
          >
            <Link to="#" style={{ color: "#fff" }}>
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#" style={{ color: "#fff" }}>
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" style={{ color: "#fff" }}>
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to="#" style={{ color: "#fff" }}>
              <i className="fab fa-linkedin"></i>
            </Link>
          </Box>
        </Box>
        <Box sx={{ px: { xs: 1, xl: 15 }, pt: 10 }}>
          {index === 0 && <ViewDetails />}
          {index === 1 && <Customise />}
        </Box>
      </Box>
    </Box>
  );
}

export default UtilitiesAndDetails;
