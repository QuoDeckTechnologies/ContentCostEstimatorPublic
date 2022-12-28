import React, { useState } from "react";
import { Input, Label } from "semantic-ui-react";
import CustomizedSlider from "./component/Slider.react";
import ContactForm from "../contactForm/ContactForm.react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
} from "@mui/material";
import {
  contentSlidesCalSchema,
  videoCalSchema,
  presentationCalSchema,
  accessibilityCalSchema,
  translationCalSchema,
} from "../utilities/calculations";
import "semantic-ui-css/semantic.min.css";
import "./Customise.css";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { setCustomData, setPdf } from "../../actions";

export default function Customise() {
  const [open, setOpen] = useState(false);
  const [contentHours, setContentHours] = useState(
    useSelector((state) => state.root.recommendedLevel.list.data.hrs)
  );
  const [translations, setTranslations] = useState({
    name: "translations",
    total: 0,
    value: 1,
  });
  let dispatch = useDispatch();
  const [schema, setSchema] = useState(
    useSelector((state) => {
      let data = [...state.root.dataProportions.dataProp.contentSlideData];
      let tmp_arr = [];
      data.forEach((ele) => {
        let tmp_proportion = parseInt(ele.proportion);
        let tmp_screens = parseInt(ele.screens);
        tmp_arr.push({
          ...ele,
          proportion: tmp_proportion,
          screens: tmp_screens,
        });
      });
      return tmp_arr;
    })
  );

  const [videos, setVideos] = useState(
    useSelector((state) => {
      let data = [...state.root.dataProportions.dataProp.videosTableData];
      let tmp_arr = [];
      data.forEach((ele) => {
        let tmp_proportion = parseInt(ele.proportion);
        let tmp_minutes = parseInt(ele.minutes);
        tmp_arr.push({
          ...ele,
          proportion: tmp_proportion,
          minutes: tmp_minutes,
        });
      });
      return tmp_arr;
    })
  );

  const [accessibility, setAccessibility] = useState(
    useSelector((state) => {
      let data = [
        ...state.root.dataProportions.dataProp.accessibilityAddonsData,
      ];
      let tmp_arr = [];
      data.forEach((ele) => {
        if (ele.checked === "Y") {
          let dataT = { ...ele, checked: true };
          tmp_arr.push(dataT);
        } else {
          let dataT = { ...ele, checked: false };
          tmp_arr.push(dataT);
        }
      });
      return tmp_arr;
    })
  );

  const [presentation, setPresentation] = useState(
    useSelector(
      (state) => state.root.dataProportions.dataProp.presentationAddonsData
    )
  );

  const [translation, setTranslation] = useState(
    useSelector((state) => {
      let data = [...state.root.dataProportions.dataProp.translationAddonsData];
      let tmp_arr = [];
      data.forEach((ele) => {
        if (ele.checked === "Y") {
          let dataT = { ...ele, checked: true };
          tmp_arr.push(dataT);
        } else {
          let dataT = { ...ele, checked: false };
          tmp_arr.push(dataT);
        }
      });
      return tmp_arr;
    })
  );

  const [estimate, setEstimate] = useState(
    useSelector((state) => {
      let data = [...state.root.dataProportions.dataProp.allEstimatedCost];
      return data;
    })
  );

  const [translationEstimate] = useState([
    {
      name: "ost-translation",
    },
    {
      name: "vo-translation",
    },
    {
      name: "ost-review",
    },
    {
      name: "vo-review",
    },
    {
      name: "reauthoring",
    },
  ]);

  function storyboardingAuthoringUseEffect(
    schema,
    videos,
    translation,
    contentHours,
    accessibility
  ) {
    let total = 0;
    schema.forEach((ele) => {
      total += ele.total;
    });
    videos.forEach((ele) => {
      total += ele.total;
    });
    if (accessibility[2].checked) {
      total += accessibilityCalSchema[2].INR_hour * (translations.value + 1);
    }
    let storyboardingEstimate = Math.round(0.3 * total);
    let authoringEstimate = Math.round(0.7 * total);
    estimate[0].total = storyboardingEstimate * contentHours;
    estimate[2].total = authoringEstimate * contentHours;
    setEstimate([...estimate]);
  }

  function translationUseEffect(
    translation,
    contentH = contentHours,
    translations_tmp = translations
  ) {
    let translationEstimate_tmp = translationEstimate;
    let totalOSTWords = 0;
    let totalVOWords = 0;
    let translationsTotal = 0;
    schema.forEach((ele) => {
      totalOSTWords += ele.OSTwords;
      totalVOWords += ele.VOwords;
    });
    videos.forEach((ele) => {
      totalOSTWords += ele.OSTwords;
      totalVOWords += ele.VOwords;
    });
    translationEstimate_tmp[0].totalWords = totalOSTWords;
    translationEstimate_tmp[2].totalWords = totalOSTWords;
    translationEstimate_tmp[1].totalWords = totalVOWords;
    translationEstimate_tmp[3].totalWords = totalVOWords;
    translationEstimate_tmp[4].total = translationCalSchema[4].cost;
    translationEstimate_tmp[0].total =
      totalOSTWords * translationCalSchema[0].cost_word;
    translationEstimate_tmp[4].total = translationCalSchema[4].cost;
    if (translation[0].checked) {
      translationEstimate_tmp[1].total =
        totalVOWords * translationCalSchema[1].cost_word;
    } else {
      translationEstimate_tmp[1].total = 0;
    }
    if (translation[1].checked) {
      translationEstimate_tmp[2].total =
        totalOSTWords * translationCalSchema[2].cost_word;
    } else {
      translationEstimate_tmp[2].total = 0;
    }
    if (translation[0].checked && translation[1].checked) {
      translationEstimate_tmp[3].total =
        totalVOWords * translationCalSchema[3].cost_word;
    } else {
      translationEstimate_tmp[3].total = 0;
    }
    translationEstimate_tmp.forEach((ele) => {
      translationsTotal += ele.total;
    });
    estimate[4].total = Math.round(
      translationsTotal * translations_tmp.value * 1.55 * contentH
    );
    setTranslations({ ...translations_tmp });
  }

  function presentationEffect(presentation_tmp) {
    let assetCreationCost = 0;
    presentation_tmp.forEach((ele) => {
      assetCreationCost += ele.total;
    });
    estimate[1].total = assetCreationCost;
    setEstimate([...estimate]);
  }

  function accessibilityContentHoursEffect(accessibility, contentHours) {
    let estimate_tmp = estimate;
    let accessibility_cost = accessibility[0].total + accessibility[1].total;
    estimate_tmp[3].total = accessibility_cost * contentHours;
    setEstimate((e) => [...estimate]);
  }

  function handleContentSlidesProportion(e) {
    let contentSlides = schema;
    for (let i = 0; i < contentSlides.length; i++) {
      if (contentSlides[i].name === e.target.name) {
        contentSlides[i].proportion = e.target.value;
        contentSlides[i].screens = Math.round(
          (e.target.value / 100) * 60 * contentSlidesCalSchema[i].screen_min
        );
        contentSlides[i].total = Math.round(
          (e.target.value / 100) *
          60 *
          contentSlidesCalSchema[i].INR_screen *
          contentSlidesCalSchema[i].screen_min
        );
        contentSlides[i].OSTwords = Math.round(
          (e.target.value / 100) *
          60 *
          contentSlidesCalSchema[i].OST_screen *
          contentSlidesCalSchema[i].screen_min
        );
        contentSlides[i].VOwords = Math.round(
          (e.target.value / 100) *
          60 *
          contentSlidesCalSchema[i].VO_screen *
          contentSlidesCalSchema[i].screen_min
        );
      } else {
        contentSlides[i].total = Math.round(
          (contentSlides[i].proportion / 100) *
          60 *
          contentSlidesCalSchema[i].INR_screen *
          contentSlidesCalSchema[i].screen_min
        );
        contentSlides[i].OSTwords = Math.round(
          (contentSlides[i].proportion / 100) *
          60 *
          contentSlidesCalSchema[i].OST_screen *
          contentSlidesCalSchema[i].screen_min
        );
        contentSlides[i].VOwords = Math.round(
          (contentSlides[i].proportion / 100) *
          60 *
          contentSlidesCalSchema[i].VO_screen *
          contentSlidesCalSchema[i].screen_min
        );
      }
    }
    setSchema(() => {
      storyboardingAuthoringUseEffect(
        contentSlides,
        videos,
        translation,
        contentHours,
        accessibility
      );
      return [...contentSlides];
    });
  }

  function handleVideoProportion(e) {
    let video_tmp = videos;
    for (let i = 0; i < videos.length; i++) {
      if (video_tmp[i].name === e.target.name) {
        video_tmp[i].proportion = e.target.value;
        video_tmp[i].minutes = Math.round((e.target.value / 100) * 60);
        video_tmp[i].total = Math.round(
          (e.target.value / 100) *
          60 *
          videoCalSchema[i].INR_screen *
          videoCalSchema[i].minutes
        );
        video_tmp[i].OSTwords = Math.round(
          (e.target.value / 100) *
          60 *
          videoCalSchema[i].OST_screen *
          videoCalSchema[i].minutes
        );
        video_tmp[i].VOwords = Math.round(
          (e.target.value / 100) *
          60 *
          videoCalSchema[i].VO_screen *
          videoCalSchema[i].minutes
        );
      } else {
        video_tmp[i].total = Math.round(
          (video_tmp[i].proportion / 100) *
          60 *
          videoCalSchema[i].INR_screen *
          videoCalSchema[i].minutes
        );
        video_tmp[i].OSTwords = Math.round(
          (video_tmp[i].proportion / 100) *
          60 *
          videoCalSchema[i].OST_screen *
          videoCalSchema[i].minutes
        );
        video_tmp[i].VOwords = Math.round(
          (video_tmp[i].proportion / 100) *
          60 *
          videoCalSchema[i].VO_screen *
          videoCalSchema[i].minutes
        );
      }
    }
    setVideos(() => {
      storyboardingAuthoringUseEffect(
        schema,
        video_tmp,
        translation,
        contentHours,
        accessibility
      );
      return [...video_tmp];
    });
  }

  function handleAccessibility(e, tmp = translations) {
    let acc_tmp = accessibility;
    for (let i = 0; i < accessibility.length; i++) {
      if (acc_tmp[i].name === e?.target?.name) {
        acc_tmp[i].checked = e.target.checked;
        acc_tmp[i].total = e.target.checked
          ? accessibilityCalSchema[i].INR_hour * (tmp.value + 1)
          : 0;
      } else {
        acc_tmp[i].total = acc_tmp[i].checked
          ? accessibilityCalSchema[i].INR_hour * (tmp.value + 1)
          : 0;
      }
    }
    setAccessibility(() => {
      storyboardingAuthoringUseEffect(
        schema,
        videos,
        translation,
        contentHours,
        acc_tmp
      );
      accessibilityContentHoursEffect(acc_tmp, contentHours);
      return [...acc_tmp];
    });
  }

  function handlePresentationValue(e) {
    let present_tmp = presentation;
    for (let i = 0; i < presentation.length; i++) {
      if (present_tmp[i].name === e.target.name) {
        present_tmp[i].value = parseInt(e.target.value);
        present_tmp[i].total = Math.round(
          e.target.value *
          presentationCalSchema[i].INR_item *
          presentationCalSchema[i].item
        );
      } else {
        present_tmp[i].total = Math.round(
          present_tmp[i].value *
          presentationCalSchema[i].INR_item *
          presentationCalSchema[i].item
        );
      }
    }
    setPresentation(() => {
      presentationEffect(present_tmp);
      return [...present_tmp];
    });
  }

  function handleTranslationValue(e) {
    let translation_tmp = translation;
    translation_tmp.forEach((ele) => {
      if (ele.name === e.target.name) {
        ele.checked = e.target.checked;
      }
    });
    setTranslation(() => {
      translationUseEffect(translation_tmp);
      return [...translation_tmp];
    });
  }

  function calOverAllPercentage() {
    let percentage = 0;
    for (let ele of schema) {
      percentage += parseInt(ele.proportion);
    }
    for (let ele of videos) {
      percentage += parseInt(ele.proportion);
    }
    return percentage;
  }

  function getTotalCost() {
    let total = 0;
    for (let ele of estimate) {
      total += ele.total;
    }
    return total;
  }

  function handleContentHours(e) {
    setContentHours(() => {
      storyboardingAuthoringUseEffect(
        schema,
        videos,
        translation,
        Math.abs(e.target.value),
        accessibility
      );
      accessibilityContentHoursEffect(accessibility, Math.abs(e.target.value));
      translationUseEffect(
        translation,
        parseInt(Math.abs(e.target.value)),
        translations
      );
      return Math.abs(e.target.value);
    });
  }

  function handleTranslations(e) {
    let tmp = { ...translations, value: parseInt(e.target.value) };
    setTranslations(() => {
      handleAccessibility(null, tmp);
      translationUseEffect(translation, contentHours, tmp);
      return tmp;
    });
  }

  function numberFormat(value) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  }

  function getTotalEstimateTable() {
    return (
      <TableContainer
        component={Paper}
        sx={{ mb: { xs: 1, md: 2 }, borderRadius: "1em" }}
      >
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#ffbf00" }}>
            <TableRow>
              <TableCell sx={{ ...headerStyle, p: 2 }}>Total Cost</TableCell>
              <TableCell sx={{ ...headerStyle, p: 2 }} align="right">
                {numberFormat(getTotalCost())}
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    );
  }

  function calBaseContent() {
    let total = 0;
    schema.forEach((ele) => {
      total += ele.total;
    });
    videos.forEach((ele) => {
      total += ele.total;
    });
    return total;
  }

  const headerStyle = {
    fontSize: {
      xs: "1.2em",
      sm: "1.6em",
    },
    fontWeight: "700",
    color: "#000000cc",
    py: 2.5,
    fontFamily: "Oswald",
  };

  const cellStyle = {
    fontFamily: "Roboto",
    fontSize: {
      xs: "1em",
      sm: "1.3em",
    },
  };

  const rightCellStyle = {
    width: "20%",
  };

  const inputStyle = {
    borderRadius: "1em",
    flex: "1",
    display: "flex",
    padding: "1em",
    // justifyContent: "space-between",
  };
  let handleCustomData = () => {
    dispatch(setCustomData(schema,
      videos,
      accessibility,
      presentation,
      translation,
      estimate,
      contentHours,
      translations,
      getTotalCost(),
      calBaseContent(),
      calOverAllPercentage(),
    ))
    setOpen(true)
    dispatch(setPdf("customise"))
  }
  return (
    <div className="customise-container">
      <h1 className="customise-header">Please input your requirements:</h1>
      <Box
        sx={{
          backgroundColor: "#45454566",
          p: { xs: 1, sm: 2, md: 3, lg: 5 },
          borderRadius: "0.5em",
          boxShadow: "inset 0px 2px 10px #00000080",
          position: "relative",
        }}
      >
        <div className="customise-wrapper">
          <div className="customise-panel-container">
            <div className="customise-input-container">
              <Label style={inputStyle}>
                <p className="customise-input-label">Content Hours:</p>
                <input
                  className="customise-header-input"
                  type="number"
                  min={0}
                  value={contentHours}
                  onChange={(v) => handleContentHours(v)}
                />
              </Label>
              <Label style={inputStyle}>
                <p className="customise-input-label">Translations: </p>
                <input
                  className="customise-header-input"
                  type="number"
                  min={0}
                  value={translations.value}
                  onChange={(v) => handleTranslations(v)}
                />
              </Label>
            </div>
            <TableContainer
              component={Paper}
              sx={{
                mb: { xs: 1, md: 2 },
                borderRadius: "1em",
                border: "2px solid #45454599",
              }}
            >
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#45454533" }}>
                  <TableRow>
                    <TableCell sx={headerStyle} width="35%">
                      Content Slides
                    </TableCell>
                    <TableCell sx={headerStyle}>Proportion</TableCell>
                    <TableCell sx={headerStyle}>Screens</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {schema.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={cellStyle} component="th" scope="row">
                        {row.text}
                      </TableCell>
                      <TableCell>
                        <CustomizedSlider
                          value={row.proportion}
                          name={row.name}
                          onChange={(v) => handleContentSlidesProportion(v)}
                        />
                      </TableCell>
                      <TableCell sx={{ ...cellStyle, ...rightCellStyle }}>
                        <Paper sx={{ lineHeight: "2em", textIndent: "0.5em" }}>
                          {row.screens}
                        </Paper>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer
              component={Paper}
              sx={{
                mb: { xs: 1, md: 2 },
                borderRadius: "1em",
                border: "2px solid #45454599",
              }}
            >
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#45454533" }}>
                  <TableRow>
                    <TableCell sx={headerStyle} width="35%">
                      Videos
                    </TableCell>
                    <TableCell sx={headerStyle}>Proportion</TableCell>
                    <TableCell sx={headerStyle}>Minutes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {videos.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={cellStyle} component="th" scope="row">
                        {row.text}
                      </TableCell>
                      <TableCell>
                        <CustomizedSlider
                          value={row.proportion}
                          name={row.name}
                          onChange={(v) => handleVideoProportion(v)}
                        />
                      </TableCell>
                      <TableCell sx={{ ...cellStyle, ...rightCellStyle }}>
                        <Paper sx={{ lineHeight: "2em", textIndent: "0.5em" }}>
                          {row.minutes}
                        </Paper>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="customise-total-base-contest">
              <TableContainer
                component={Paper}
                sx={{
                  mb: { xs: 1, md: 2 },
                  borderRadius: "1em",
                  border: "2px solid #45454599",
                }}
              >
                <Table aria-label="simple table">
                  <TableHead sx={{ backgroundColor: "#ffbf00" }}>
                    <TableRow>
                      <TableCell sx={headerStyle} width="34%">
                        Total Base Content
                      </TableCell>
                      <TableCell sx={{ ...cellStyle, width: "33%" }}>
                        <Paper
                          sx={{
                            lineHeight: "2.5em",
                            borderRadius: "0.5em",
                            textIndent: "0.5em",
                            fontWeight: "700",
                          }}
                        >
                          {calOverAllPercentage()}%
                        </Paper>
                      </TableCell>
                      <TableCell
                        sx={{ ...cellStyle, ...rightCellStyle, width: "33%" }}
                        width="35%"
                      >
                        <Paper
                          sx={{
                            lineHeight: "2.5em",
                            borderRadius: "0.5em",
                            textIndent: "0.5em",
                            fontWeight: "700",
                          }}
                        >
                          {numberFormat(calBaseContent())}
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            </div>
            <TableContainer
              component={Paper}
              sx={{
                mb: { xs: 1, md: 2 },
                borderRadius: "1em",
                border: "2px solid #45454599",
              }}
            >
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#45454533" }}>
                  <TableRow>
                    <TableCell sx={headerStyle} width="35%">
                      Accessibility AddOns
                    </TableCell>
                    <TableCell sx={headerStyle}>Required</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {accessibility.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell sx={cellStyle} component="th" scope="row">
                        {row.text}
                      </TableCell>
                      <TableCell>
                        <Switch
                          checked={row.checked}
                          name={row.name}
                          onChange={(v) => handleAccessibility(v)}
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
            <TableContainer
              component={Paper}
              sx={{
                mb: { xs: 1, md: 2 },
                borderRadius: "1em",
                border: "2px solid #45454599",
              }}
            >
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#45454533" }}>
                  <TableRow>
                    <TableCell sx={headerStyle} width="35%">
                      Presentation AddOns
                    </TableCell>
                    <TableCell sx={headerStyle}>Required</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {presentation.map((row) => (
                    <TableRow
                      key={row.text}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={cellStyle} component="th" scope="row">
                        {row.text}
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          size="big"
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
            <TableContainer
              component={Paper}
              sx={{
                mb: { xs: 1, md: 2 },
                borderRadius: "1em",
                border: "2px solid #45454599",
              }}
            >
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#45454533" }}>
                  <TableRow>
                    <TableCell sx={headerStyle} width="35%">
                      Translation AddOns
                    </TableCell>
                    <TableCell sx={headerStyle}>Required</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {translation.map((row) => (
                    <TableRow
                      key={row.text}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={cellStyle} component="th" scope="row">
                        {row.text}
                      </TableCell>
                      <TableCell>
                        <Switch
                          checked={row.checked}
                          name={row.name}
                          onChange={(v) => handleTranslationValue(v)}
                          sx={{
                            "& .MuiSwitch-switchBase.Mui-checked": {
                              color: "#ffbf00",
                              "&:hover": {
                                backgroundColor: "#ffbf0040",
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
          </div>
          <div className="customise-panel-price-estimator">
            <ContactForm openModal={open} onClose={(state) => setOpen(state)} />
            <TableContainer
              component={Paper}
              sx={{
                mb: { xs: 1, md: 2 },
                borderRadius: "1em",
                border: "2px solid #45454599",
              }}
            >
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#45454533" }}>
                  <TableRow>
                    <TableCell sx={headerStyle}>Price Estimator</TableCell>
                    <TableCell sx={headerStyle} align="right">
                      INR for 10 hours in {translations.value} languages
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {estimate.map((row) => (
                    <TableRow
                      key={row.text}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={cellStyle} component="th" scope="row">
                        {row.text}
                      </TableCell>
                      <TableCell sx={cellStyle} align="right">
                        <h3>{numberFormat(row.total)}</h3>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="customise-total-price-container">
              <div className="customise-total-price-container-table">
                {getTotalEstimateTable()}
              </div>
              <div className="cta-button">
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: "0.4em",
                    fontSize: "1.5em",
                    color: "#fff",
                    borderColor: "#fff",
                    transition: "1s",
                    ":hover": {
                      backgroundColor: "#ffbf00",
                      borderColor: "#000",
                      color: "#000",
                    },
                    fontWeight: "700",
                  }}
                  onClick={() => handleCustomData()}
                >
                  proceed to get the PDF
                </Button>
              </div>
            </div>
          </div>

          <div className="cusomise-price-total-mobile-container">
            <div className="cusomise-price-total-mobile-wrapper">
              <div className="estimatetable-mobile-container">
                <h4 className="customise-price-total-text">Total Cost</h4>
                <h4 className="customise-price-total-text">
                  {numberFormat(getTotalCost())}
                </h4>
              </div>
              {/* <div className="cta-button-mobile-container">
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    borderRadius: "0.4em",
                    fontSize: {
                      xs: "0.8em",
                      sm: "1em",
                    },
                    color: "#000",
                    borderColor: "#000",
                    transition: "1s",
                    ":hover": {
                      backgroundColor: "#ffbf00",
                      color: "#fff",
                    },
                    fontWeight: "700",
                  }}
                  onClick={() => setOpen(true)}
                >
                  proceed to get the PDF
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </Box>
      <div className="cusomise-price-total-mobile-seperator"></div>
    </div>
  );
}
