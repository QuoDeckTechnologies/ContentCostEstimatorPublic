import React, { useEffect, useState } from "react";
import { Input } from "semantic-ui-react";
import CustomizedSlider from "./component/Slider.react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Switch from "@mui/material/Switch";
import {
  calContentSlides,
  calVideo,
  calPresentation,
  calAccessibility,
} from "../utilities/calculations";
import "semantic-ui-css/semantic.min.css";
import "./Customise.css";

export default function Customise() {
  const [schema, setSchema] = useState([
    {
      name: "textual-content-slide",
      text: "Textual Content Slide",
      proportion: 20,
      screens: 30,
      total: 0,
    },
    {
      name: "visual-content-slide",
      text: "Visual Content Slide",
      proportion: 30,
      screens: 10,
      total: 0,
    },
    {
      name: "interactive-visual-slide",
      text: "Interactive Visual Content Slide",
      proportion: 10,
      screens: 60,
      total: 0,
    },
    {
      name: "textual-question-slide",
      text: "Textual Question Slide",
      proportion: 90,
      screens: 5,
      total: 0,
    },
    {
      name: "visual-quetion-slide",
      text: "Visual Question Slide",
      proportion: 10,
      screens: 90,
      total: 0,
    },
  ]);

  const [videos, setVideos] = useState([
    {
      name: "slideshows",
      text: "Slideshows",
      proportion: 10,
      minutes: 5,
      total: 0,
    },
    {
      name: "story-based-slideshows",
      text: "Story-Based Slideshows",
      proportion: 30,
      minutes: 10,
      total: 0,
    },
    {
      name: "screencasts",
      text: "Screencasts",
      proportion: 60,
      minutes: 23,
      total: 0,
    },
    {
      name: "iconic-infographic-video",
      text: "Iconic/Infographic Video",
      proportion: 70,
      minutes: 30,
      total: 0,
    },
    {
      name: "2d-animated-story",
      text: "2D Animated Story",
      proportion: 20,
      minutes: 1,
      total: 0,
    },
    {
      name: "whiteboard-animation",
      text: "Whiteboard Animation",
      proportion: 90,
      minutes: 65,
      total: 0,
    },
    {
      name: "motion-graphics",
      text: "Motion graphics",
      proportion: 55,
      minutes: 59,
      total: 0,
    },
    {
      name: "3d-animated-story",
      text: "3D Animated Story",
      proportion: 55,
      minutes: 21,
      total: 0,
    },
  ]);

  const [accessibility, setAccessibility] = useState([
    {
      text: "Machine Voiceovers",
      name: "machine-voiceover",
      checked: false,
    },
    {
      text: "Human Voiceovers",
      name: "human-voiceover",
      checked: true,
    },
    {
      text: "Gamified Story",
      name: "gamified-story",
      checked: false,
    },
  ]);

  const [presentation, setPresentation] = useState([
    {
      text: "Stock Character with 6 Poses",
      name: "stock-character-with-6-poses",
      value: 5,
    },
    {
      text: "Custom Illustrations",
      name: "custom-illustrations",
      value: 8,
    },
  ]);

  const [translation, setTranslation] = useState([
    {
      text: "Translate Voiceover Scripts",
      name: "translate-voiceover-scripts",
      value: 11,
    },
    {
      text: "External Translation Review",
      name: "external-translation-review",
      value: 20,
    },
  ]);

  const [estimate, setEstimate] = useState([
    {
      text: "Storyboarding",
      value: "461,745",
    },
    {
      text: "Asset Creation",
      value: "46,500",
    },
    {
      text: "Authoring",
      value: "1,077,405",
    },
    {
      text: "Voiceovers",
      value: "279,000",
    },
    {
      text: "Translations",
      value: "-",
    },
  ]);

  useEffect(() => {
    console.log(accessibility);
  }, [accessibility]);

  function handleContentSlidesProportion(e) {
    let contentSlides = schema;
    contentSlides.forEach((ele) => {
      if (ele.name === e.target.name) {
        ele.proportion = e.target.value;
      }
    });
    setSchema([...contentSlides]);
    calContentSlides(contentSlides);
  }

  function handleContentSlidesScreens(e) {
    let contentSlides = schema;
    contentSlides.forEach((ele) => {
      if (ele.name === e.target.name) {
        ele.screens = parseInt(e.target.value);
      }
    });
    setSchema([...contentSlides]);
    calContentSlides(contentSlides);
  }

  function handleVideoProportion(e) {
    let video_tmp = videos;
    video_tmp.forEach((ele) => {
      if (ele.name === e.target.name) {
        ele.proportion = e.target.value;
      }
    });
    setVideos([...video_tmp]);
    calVideo(video_tmp);
  }

  function handleVideoMinutes(e) {
    let video_tmp = videos;
    video_tmp.forEach((ele) => {
      if (ele.name === e.target.name) {
        ele.minutes = parseInt(e.target.value);
      }
    });
    setVideos([...video_tmp]);
    calVideo(video_tmp);
  }

  function handleSwitch(e) {
    let acc_tmp = accessibility;
    acc_tmp.forEach((ele) => {
      if (ele.name === e.target.name) {
        ele.checked = e.target.checked;
      }
    });
    setAccessibility([...acc_tmp]);
    calAccessibility(acc_tmp);
  }

  function handlePresentationValue(e) {
    let present_tmp = presentation;
    present_tmp.forEach((ele) => {
      if (ele.name === e.target.name) {
        ele.value = parseInt(e.target.value);
      }
    });
    setPresentation([...present_tmp]);
    calPresentation(present_tmp);
  }

  function handleTranslationValue(e) {
    let translation_tmp = translation;
    translation_tmp.forEach((ele) => {
      if (ele.name === e.target.name) {
        ele.value = e.target.value;
      }
    });
    setTranslation([...translation_tmp]);
  }

  return (
    <div className="customise-container">
      <h1 className="customise-header">
        What you will get per hour of content:
      </h1>
      <div className="customise-wrapper">
        <div className="customise-panel-container">
          <TableContainer component={Paper} sx={{ mb: 1, borderRadius: "1em" }}>
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#45454533" }}>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                    width="35%"
                  >
                    Content Slides
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                  >
                    Proportion
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                  >
                    Screens
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {schema.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.text}
                    </TableCell>
                    <TableCell>
                      <CustomizedSlider
                        value={row.proportion}
                        name={row.name}
                        onChange={(v) => handleContentSlidesProportion(v)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min={0}
                        value={row.screens}
                        name={row.name}
                        onChange={(v) => handleContentSlidesScreens(v)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ mb: 2, borderRadius: "1em" }}>
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#45454533" }}>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                    width="35%"
                  >
                    Videos
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                  >
                    Proportion
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                  >
                    Minutes
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {videos.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.text}
                    </TableCell>
                    <TableCell>
                      <CustomizedSlider
                        value={row.proportion}
                        name={row.name}
                        onChange={(v) => handleVideoProportion(v)}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min={0}
                        value={row.minutes}
                        name={row.name}
                        onChange={(v) => handleVideoMinutes(v)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="customise-total-base-contest">
            <TableContainer
              component={Paper}
              sx={{ mb: 5, borderRadius: "1em" }}
            >
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#ffbf0099" }}>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontSize: "1.5em",
                        fontWeight: "700",
                      }}
                      width="70%"
                    >
                      Total Base Content
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "700",
                        pr: 5,
                      }}
                    >
                      <Input type="number" min={0} value="100" />
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </div>
          <TableContainer component={Paper} sx={{ mb: 5, borderRadius: "1em" }}>
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#45454533" }}>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                    width="35%"
                  >
                    Accessibility AddOns in 1 languages
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                  >
                    Required
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accessibility.map((row) => (
                  <TableRow
                    key={row.text}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.text}
                    </TableCell>
                    <TableCell>
                      <Switch
                        checked={row.checked}
                        name={row.name}
                        onChange={(v) => handleSwitch(v)}
                        sx={{
                          "& .MuiSwitch-switchBase.Mui-checked": {
                            color: "#ffbf00",
                            "&:hover": {
                              backgroundColor: "##ffbf0040",
                            },
                          },
                          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                            {
                              backgroundColor: "#ffbf00",
                            },
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ mb: 5, borderRadius: "1em" }}>
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#45454533" }}>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                    width="35%"
                  >
                    Presentation AddOns
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                  >
                    Required
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {presentation.map((row) => (
                  <TableRow
                    key={row.text}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.text}
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min={0}
                        value={row.value}
                        name={row.name}
                        onChange={(v) => handlePresentationValue(v)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ mb: 5, borderRadius: "1em" }}>
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#45454533" }}>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                    width="35%"
                  >
                    Translation AddOns
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                  >
                    Required
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {translation.map((row) => (
                  <TableRow
                    key={row.text}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.text}
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min={0}
                        value={row.value}
                        name={row.name}
                        onChange={(v) => handleTranslationValue(v)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="customise-panel-price-estimator">
          <TableContainer component={Paper} sx={{ mb: 5, borderRadius: "1em" }}>
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#45454533" }}>
                <TableRow>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                  >
                    Price Estimator
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                    align="right"
                  >
                    INR for 10 hours in 1 languages
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {estimate.map((row) => (
                  <TableRow
                    key={row.text}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.text}
                    </TableCell>
                    <TableCell align="right">
                      <h3>{row.value}</h3>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "0.4em",
              fontSize: "1.5em",
              color: "#fff",
              borderColor: "#fff",
              transition: "1s",
              ":hover": {
                backgroundColor: "#ffbf00",
                color: "#000",
              },
              fontWeight: "700",
            }}
          >
            proceed to get the PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
