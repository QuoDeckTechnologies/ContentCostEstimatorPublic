import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import ViewDetails from "../viewDetails/ViewDetails.react";
import Customise from "../customise/Customise.react";
import { Image } from "semantic-ui-react";
import logo from "../../assets/logo.png";
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
    padding: "0 2em",
    border: "2px solid #fff",
  };

  return (
    <Box sx={{ width: "100%",backgroundColor:'#f4f4f4' }}>
      <Box>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            backgroundColor: "#454545cc",
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
          }}
        >
          <Box sx={{ display: "flex", justifyContentL: "left" }}>
            <Box sx={{ ml: { xs: 4, lg: 15 } }}>
              <Image src={logo} alt="" width="200em" />
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
                ml: 4,
              }}
            >
              <Tab sx={tabStyle} label="View Details" {...a11yProps(0)} />
              <Tab
                sx={{ ...tabStyle, ml: 2 }}
                label="Customise"
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <Box sx={{ fontSize: "2em" }}>
            <Link to="#" style={{ color: "#fff" }}>
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#" style={{ color: "#fff", marginLeft: "1em" }}>
              <i class="fab fa-twitter"></i>
            </Link>
            <Link to="#" style={{ color: "#fff", marginLeft: "1em" }}>
              <i class="fab fa-youtube"></i>
            </Link>
            {/* <Link to="#" style={{ color: "#fff", marginLeft: "1em" }}>
            <i className="fab fa-instagram-square"></i>
            </Link> */}
            <Link to="#" style={{ color: "#fff", margin: "0 1em" }}>
              <i className="fab fa-linkedin"></i>
            </Link>
          </Box>
        </Box>
        <Box sx={{ px: { xs: 4, xl: 15 }, pt: 10 }}>
          <TabPanel value={value} index={0}>
            <ViewDetails />
          </TabPanel>
          <TabPanel value={value} index={1} sx={{ backgroundColor: "#6f6f6f" }}>
            <Customise />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default UtilitiesAndDetails;
