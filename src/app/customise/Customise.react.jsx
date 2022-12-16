import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import CustomizedSlider from "./component/Slider.react";
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
  margin,
  contentSlidesCalSchema,
  videoCalSchema,
  presentationCalSchema,
  accessibilityCalSchema,
  translationCalSchema,
} from "../utilities/calculations";
import "semantic-ui-css/semantic.min.css";
import "./Customise.css";

export default function Customise() {
  const [contentHours, setContentHours] = useState(6);
  const [translations, setTranslations] = useState({
    name: "translations",
    total: 0,
    value: 1,
  });

  const [schema, setSchema] = useState([
    {
      name: "textual-content-slide",
      text: "Textual Content Slide",
      OSTwords: 0,
      VOwords: 0,
      proportion: 5,
      screens: 3,
      total: 0,
    },
    {
      name: "visual-content-slide",
      text: "Visual Content Slide",
      OSTwords: 0,
      VOwords: 0,
      proportion: 14,
      screens: 8,
      total: 0,
    },
    {
      name: "interactive-visual-slide",
      text: "Interactive Visual Content Slide",
      OSTwords: 0,
      VOwords: 0,
      proportion: 26,
      screens: 16,
      total: 0,
    },
    {
      name: "textual-question-slide",
      text: "Textual Question Slide",
      OSTwords: 0,
      VOwords: 0,
      proportion: 5,
      screens: 6,
      total: 0,
    },
    {
      name: "visual-quetion-slide",
      text: "Visual Question Slide",
      OSTwords: 0,
      VOwords: 0,
      proportion: 10,
      screens: 12,
      total: 0,
    },
  ]);

  const [videos, setVideos] = useState([
    {
      name: "slideshows",
      text: "Slideshows",
      proportion: 5,
      OSTwords: 0,
      VOwords: 0,
      minutes: 3,
      total: 0,
    },
    {
      name: "story-based-slideshows",
      text: "Story-Based Slideshows",
      proportion: 5,
      OSTwords: 0,
      VOwords: 0,
      minutes: 3,
      total: 0,
    },
    {
      name: "screencasts",
      text: "Screencasts",
      proportion: 5,
      OSTwords: 0,
      VOwords: 0,
      minutes: 3,
      total: 0,
    },
    {
      name: "iconic-infographic-video",
      text: "Iconic/Infographic Video",
      proportion: 5,
      OSTwords: 0,
      VOwords: 0,
      minutes: 3,
      total: 0,
    },
    {
      name: "2d-animated-story",
      text: "2D Animated Story",
      proportion: 5,
      OSTwords: 0,
      VOwords: 0,
      minutes: 3,
      total: 0,
    },
    {
      name: "whiteboard-animation",
      text: "Whiteboard Animation",
      proportion: 5,
      OSTwords: 0,
      VOwords: 0,
      minutes: 3,
      total: 0,
    },
    {
      name: "motion-graphics",
      text: "Motion graphics",
      proportion: 5,
      OSTwords: 0,
      VOwords: 0,
      minutes: 3,
      total: 0,
    },
    {
      name: "3d-animated-story",
      text: "3D Animated Story",
      proportion: 5,
      OSTwords: 0,
      VOwords: 0,
      minutes: 3,
      total: 0,
    },
  ]);

  const [accessibility, setAccessibility] = useState([
    {
      text: "Machine Voiceovers",
      name: "machine-voiceover",
      total: 0,
      checked: false,
    },
    {
      text: "Human Voiceovers",
      name: "human-voiceover",
      total: 0,
      checked: true,
    },
    {
      text: "Gamified Story",
      name: "gamified-story",
      total: 0,
      checked: false,
    },
  ]);

  const [presentation, setPresentation] = useState([
    {
      text: "Stock Character with 6 Poses",
      name: "stock-character-with-6-poses",
      total: 0,
      value: 5,
    },
    {
      text: "Custom Illustrations",
      name: "custom-illustrations",
      total: 0,
      value: 8,
    },
  ]);

  const [translation, setTranslation] = useState([
    {
      text: "Translate Voiceover Scripts",
      name: "translate-voiceover-scripts",
      checked: false,
    },
    {
      text: "External Translation Review",
      name: "external-translation-review",
      checked: false,
    },
  ]);

  const [estimate, setEstimate] = useState([
    {
      text: "Storyboarding",
      total: 0,
    },
    {
      text: "Asset Creation",
      total: 0,
    },
    {
      text: "Authoring",
      total: 0,
    },
    {
      text: "Voiceovers",
      total: 0,
    },
    {
      text: "Translations",
      total: 0,
    },
  ]);

  const [translationEstimate, setTranslationEstimate] = useState([
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

  function stoaryboardingAuthoringEffect(
    schema,
    videos,
    translation,
    contentHours,
    accessibility
  ) {
    let totalOSTWords = 0;
    let totalVOWords = 0;
    // let translationTotal = 0;
    let storyboardingCost = 0;
    schema.forEach((ele) => {
      totalOSTWords += ele.OSTwords;
      totalVOWords += ele.VOwords;
      storyboardingCost += ele.total;
    });
    videos.forEach((ele) => {
      totalOSTWords += ele.OSTwords;
      totalVOWords += ele.VOwords;
      storyboardingCost += ele.total;
    });
    storyboardingCost += accessibility[2].total;
    estimate[0].total = Math.round(0.3 * storyboardingCost) * contentHours;
    estimate[2].total = Math.round(0.7 * storyboardingCost) * contentHours;
    // let translationEstimate_tmp = translationEstimate;
    // for (let i = 0; i < translationEstimate_tmp.length; i++) {
    //   if (
    //     translationEstimate_tmp[i].name === "ost-translation" ||
    //     translationEstimate_tmp[i].name === "ost-review"
    //   ) {
    //     translationEstimate_tmp[i].total = Math.round(
    //       totalOSTWords * translationCalSchema[i].cost_word
    //     );
    //     if (translationEstimate_tmp[i].name === "ost-translation") {
    //       translationTotal += translationEstimate_tmp[i].total;
    //     }
    //     if (
    //       translationEstimate_tmp[i].name === "ost-review" &&
    //       translation[1].checked
    //     ) {
    //       translationTotal += translationEstimate_tmp[i].total;
    //     }
    //   }
    //   if (
    //     translationEstimate_tmp[i].name === "vo-translation" ||
    //     translationEstimate_tmp[i].name === "vo-review"
    //   ) {
    //     translationEstimate_tmp[i].total = Math.round(
    //       totalVOWords * translationCalSchema[i].cost_word
    //     );
    //     if (
    //       translationEstimate_tmp[i].name === "vo-translation" &&
    //       translation[0].checked
    //     ) {
    //       translationTotal += translationEstimate_tmp[i].total;
    //     }
    //     if (
    //       translationEstimate_tmp[i].name === "vo-review" &&
    //       translation[0].checked &&
    //       translation[1].checked
    //     ) {
    //       translationTotal += translationEstimate_tmp[i].total;
    //     }
    //   }
    // }
    // translationEstimate_tmp[translationEstimate_tmp.length - 1].total =
    //   translationCalSchema[translationCalSchema.length - 1].cost;
    // translationTotal +=
    //   translationEstimate_tmp[translationEstimate_tmp.length - 1].total;
    // setTranslationEstimate([...translationEstimate_tmp]);
    // setTranslations({
    //   ...translations,
    //   total: translationTotal,
    // });
    // let translateTotal =
    //   translations.total * translations.value * (1 + margin) * contentHours;
    // estimate[4].total = Math.round(translateTotal);
    translationEffect();
    setEstimate([...estimate]);
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

  function translationsContentHoursEffect(translations, contentHours) {
    let translateTotal =
      translations.total * translations.value * (1 + margin) * contentHours;
    estimate[4].total = Math.round(translateTotal);
    setEstimate([...estimate]);
  }

  function translationEffect() {
    let totalOSTWords = 0;
    let totalVOWords = 0;
    let translationTotal = 0;
    schema.forEach((ele) => {
      totalOSTWords += ele.OSTwords;
      totalVOWords += ele.VOwords;
      console.log(ele.OSTwords, ele.VOwords);
    });
    videos.forEach((ele) => {
      totalOSTWords += ele.OSTwords;
      totalVOWords += ele.VOwords;
      console.log(ele.OSTwords, ele.VOwords);
    });
    // console.log(totalOSTWords, totalVOWords);
    let translationEstimate_tmp = translationEstimate;
    for (let i = 0; i < translationEstimate_tmp.length; i++) {
      if (
        translationEstimate_tmp[i].name === "ost-translation" ||
        translationEstimate_tmp[i].name === "ost-review"
      ) {
        translationEstimate_tmp[i].total = Math.round(
          totalOSTWords * translationCalSchema[i].cost_word
        );
        if (translationEstimate_tmp[i].name === "ost-translation") {
          translationTotal += translationEstimate_tmp[i].total;
        }
        if (
          translationEstimate_tmp[i].name === "ost-review" &&
          translation[1].checked
        ) {
          translationTotal += translationEstimate_tmp[i].total;
        }
        console.log(translationEstimate_tmp[i]);
      }
      if (
        translationEstimate_tmp[i].name === "vo-translation" ||
        translationEstimate_tmp[i].name === "vo-review"
      ) {
        translationEstimate_tmp[i].total = Math.round(
          totalVOWords * translationCalSchema[i].cost_word
        );
        if (
          translationEstimate_tmp[i].name === "vo-translation" &&
          translation[0].checked
        ) {
          translationTotal += translationEstimate_tmp[i].total;
        }
        if (
          translationEstimate_tmp[i].name === "vo-review" &&
          translation[0].checked &&
          translation[1].checked
        ) {
          translationTotal += translationEstimate_tmp[i].total;
        }
        console.log(translationEstimate_tmp[i]);
      }
    }
    translationEstimate_tmp[translationEstimate_tmp.length - 1].total =
      translationCalSchema[translationCalSchema.length - 1].cost;
    translationTotal +=
      translationEstimate_tmp[translationEstimate_tmp.length - 1].total;
    setTranslationEstimate([...translationEstimate_tmp]);
    setTranslations({
      ...translations,
      total: translationTotal,
    });
    let translateTotal =
      translations.total * translations.value * (1 + margin) * contentHours;
    estimate[4].total = Math.round(translateTotal);
    setEstimate([...estimate]);
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
      stoaryboardingAuthoringEffect(
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
      stoaryboardingAuthoringEffect(
        schema,
        video_tmp,
        translation,
        contentHours,
        accessibility
      );
      return [...video_tmp];
    });
  }

  function handleAccessibility(e) {
    let acc_tmp = accessibility;
    for (let i = 0; i < accessibility.length; i++) {
      if (acc_tmp[i].name === e.target.name) {
        acc_tmp[i].checked = e.target.checked;
        acc_tmp[i].total = e.target.checked
          ? accessibilityCalSchema[i].INR_hour * (translations.value + 1)
          : 0;
      } else {
        acc_tmp[i].total = acc_tmp[i].checked
          ? accessibilityCalSchema[i].INR_hour * (translations.value + 1)
          : 0;
      }
    }
    setAccessibility(() => {
      stoaryboardingAuthoringEffect(
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
      stoaryboardingAuthoringEffect(
        schema,
        videos,
        translation_tmp,
        contentHours,
        accessibility
      );
      // translationEffect();
      return [...translation_tmp];
    });
  }

  function calOverAllPercentage() {
    let percentage = 0;
    for (let ele of schema) {
      percentage += ele.proportion;
    }
    for (let ele of videos) {
      percentage += ele.proportion;
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
      stoaryboardingAuthoringEffect(
        schema,
        videos,
        translation,
        e.target.value,
        accessibility
      );
      accessibilityContentHoursEffect(accessibility, e.target.value);
      translationsContentHoursEffect(translations, e.target.value);
      return e.target.value;
    });
  }

  function handleTranslations(e) {
    let tmp = { ...translations, value: parseInt(e.target.value) };
    setTranslations(() => {
      translationsContentHoursEffect(tmp, contentHours);
      return tmp;
    });
  }

  return (
    <div className="customise-container">
      <h1 className="customise-header">
        What you will get per hour of content:
      </h1>
      <div>
        <Input
          type="number"
          min={0}
          value={contentHours}
          onChange={(v) => handleContentHours(v)}
        />
        <Input
          type="number"
          min={0}
          value={translations.value}
          onChange={(v) => handleTranslations(v)}
        />
      </div>
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
                      py: 4,
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
                      py: 4,
                    }}
                  >
                    Proportion
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                      py: 4,
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
                      <div>{row.screens}</div>
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
                      py: 4,
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
                      py: 4,
                    }}
                  >
                    Proportion
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                      py: 4,
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
                      <div>{row.minutes}</div>
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
                      <Input
                        type="number"
                        min={0}
                        value={calOverAllPercentage()}
                      />
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
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
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
                      <Switch
                        checked={row.checked}
                        name={row.name}
                        onChange={(v) => handleTranslationValue(v)}
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
                      <h3>{row.total}</h3>
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
                  >
                    Total Cost
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: "1.5em",
                      fontWeight: "700",
                      color: "#454545cc",
                    }}
                    align="right"
                  >
                    {getTotalCost()}
                  </TableCell>
                </TableRow>
              </TableHead>
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
