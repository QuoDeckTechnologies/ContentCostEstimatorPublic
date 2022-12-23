import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  Grid,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Button,
} from "@mui/material";
import { Label } from "semantic-ui-react";
import { setDetailsData } from "../../actions/index";
import recommendedLevel from "../../reducers/dataReducer";
import ContactForm from "../contactForm/ContactForm.react";

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

function ViewDetails() {
  const [open, setOpen] = useState(false);
  const dataDetails = useSelector((state) => state.root.recommendedLevel.list);
  const [level, setLevel] = useState();
  const [hrs, setHrs] = useState();
  const [translation, setTranslation] = useState("N");
  const [languages, setLanguages] = useState(0);
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.screen.width,
    height: window.screen.height,
  });
  let dispatch = useDispatch();
  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  let machineVoiceOver =
    level === "1" ? "Y" : level === "2" ? "N" : level === "3" ? "N" : "-";
  let humanVoiceOver =
    level === "1" ? "N" : level === "2" ? "Y" : level === "3" ? "Y" : "-";
  let gamifiedStory =
    level === "1" ? "N" : level === "2" ? "N" : level === "3" ? "N" : "-";
  let textualContentSlideProportion =
    level === "1" ? "32" : level === "2" ? "0" : level === "3" ? "0" : "0";
  let visualContentSlideProportion =
    level === "1" ? "32" : level === "2" ? "45" : level === "3" ? "14" : "0";
  let interactiveVisualcontentSlideProportion =
    level === "1" ? "16" : level === "2" ? "30" : level === "3" ? "56" : "0";
  let textualQuestionSlideProportion =
    level === "1" ? "15" : level === "2" ? "10" : level === "3" ? "5" : "0";
  let visualQuestionSlideProportion =
    level === "1" ? "0" : level === "2" ? "5" : level === "3" ? "10" : "0";
  let slideShowsProportion =
    level === "1" ? "5" : level === "2" ? "10" : level === "3" ? "5" : "0";
  let storyBasedSlideShowsProportion =
    level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "10" : "0";
  let screenCastsProportion =
    level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0";
  let iconicInfographicVideoProportion =
    level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0";
  let ddAnimatedStoryProportion =
    level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0";
  let whiteboardAnimationProportion =
    level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0";
  let motionGraphicsProportion =
    level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0";
  let dddAnimationStoryProportion =
    level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0";
  let stockCharacter =
    level === "1" ? "0" : level === "2" ? "1" : level === "3" ? "2" : "-";
  let customeIllustrations =
    level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "-";

  let oneScreenPerMinute = 1;
  let twoScreenPerMinute = 2;

  //OST words Values
  let tcsOSTwords =
    textualContentSlideProportion > 0
      ? (textualContentSlideProportion / 100) * (oneScreenPerMinute * 60 * 80)
      : 0;
  let vcsOSTwords =
    visualContentSlideProportion > 0
      ? (visualContentSlideProportion / 100) * (oneScreenPerMinute * 60 * 50)
      : 0;
  let ivcsOSTwords =
    interactiveVisualcontentSlideProportion > 0
      ? (interactiveVisualcontentSlideProportion / 100) *
      (oneScreenPerMinute * 60 * 100)
      : 0;
  let tqsOSTwords =
    textualQuestionSlideProportion > 0
      ? (textualQuestionSlideProportion / 100) * (twoScreenPerMinute * 60 * 100)
      : 0;
  let vqsOSTwords =
    visualQuestionSlideProportion > 0
      ? (visualQuestionSlideProportion / 100) * (twoScreenPerMinute * 60 * 50)
      : 0;
  let slideSOSTwords =
    slideShowsProportion > 0
      ? (slideShowsProportion / 100) * (oneScreenPerMinute * 60 * 30)
      : 0;
  let sbsOSTwords =
    storyBasedSlideShowsProportion > 0
      ? (storyBasedSlideShowsProportion / 100) * (oneScreenPerMinute * 60 * 30)
      : 0;
  let scOSTwords =
    screenCastsProportion > 0
      ? (screenCastsProportion / 100) * (oneScreenPerMinute * 60 * 30)
      : 0;
  let iivOSTwords =
    iconicInfographicVideoProportion > 0
      ? (iconicInfographicVideoProportion / 100) *
      (oneScreenPerMinute * 60 * 30)
      : 0;
  let ddasOSTwords =
    ddAnimatedStoryProportion > 0
      ? (ddAnimatedStoryProportion / 100) * (oneScreenPerMinute * 60 * 30)
      : 0;
  let waOSTwords =
    whiteboardAnimationProportion > 0
      ? (whiteboardAnimationProportion / 100) * (oneScreenPerMinute * 60 * 30)
      : 0;
  let mgOSTwords =
    motionGraphicsProportion > 0
      ? (motionGraphicsProportion / 100) * (oneScreenPerMinute * 60 * 30)
      : 0;
  let dddOSTwords =
    dddAnimationStoryProportion > 0
      ? (dddAnimationStoryProportion / 100) * (oneScreenPerMinute * 60 * 30)
      : 0;

  //VO words Values
  let tcsVOwords =
    textualContentSlideProportion > 0
      ? (textualContentSlideProportion / 100) * (oneScreenPerMinute * 60 * 50)
      : 0;
  let vcsVOwords =
    visualContentSlideProportion > 0
      ? (visualContentSlideProportion / 100) * (oneScreenPerMinute * 60 * 75)
      : 0;
  let ivcsVOwords =
    interactiveVisualcontentSlideProportion > 0
      ? (interactiveVisualcontentSlideProportion / 100) *
      (oneScreenPerMinute * 60 * 100)
      : 0;
  let tqsVOwords =
    textualQuestionSlideProportion > 0
      ? (textualQuestionSlideProportion / 100) * (twoScreenPerMinute * 60 * 0)
      : 0;
  let vqsVOwords =
    visualQuestionSlideProportion > 0
      ? (visualQuestionSlideProportion / 100) * (twoScreenPerMinute * 60 * 0)
      : 0;
  let slideSVOwords =
    slideShowsProportion > 0
      ? (slideShowsProportion / 100) * (oneScreenPerMinute * 60 * 100)
      : 0;
  let sbsVOwords =
    storyBasedSlideShowsProportion > 0
      ? (storyBasedSlideShowsProportion / 100) * (oneScreenPerMinute * 60 * 100)
      : 0;
  let scVOwords =
    screenCastsProportion > 0
      ? (screenCastsProportion / 100) * (oneScreenPerMinute * 60 * 100)
      : 0;
  let iivVOwords =
    iconicInfographicVideoProportion > 0
      ? (iconicInfographicVideoProportion / 100) *
      (oneScreenPerMinute * 60 * 100)
      : 0;
  let ddasVOwords =
    ddAnimatedStoryProportion > 0
      ? (ddAnimatedStoryProportion / 100) * (oneScreenPerMinute * 60 * 100)
      : 0;
  let waVOwords =
    whiteboardAnimationProportion > 0
      ? (whiteboardAnimationProportion / 100) * (oneScreenPerMinute * 60 * 100)
      : 0;
  let mgVOwords =
    motionGraphicsProportion > 0
      ? (motionGraphicsProportion / 100) * (oneScreenPerMinute * 60 * 100)
      : 0;
  let dddVOwords =
    dddAnimationStoryProportion > 0
      ? (dddAnimationStoryProportion / 100) * (oneScreenPerMinute * 60 * 100)
      : 0;

  let OSTTranslation =
    (tcsOSTwords +
      vcsOSTwords +
      ivcsOSTwords +
      tqsOSTwords +
      vqsOSTwords +
      slideSOSTwords +
      sbsOSTwords +
      scOSTwords +
      iivOSTwords +
      ddasOSTwords +
      waOSTwords +
      mgOSTwords +
      dddOSTwords) *
    1.75;

  let VoTranslation =
    (tcsVOwords +
      vcsVOwords +
      ivcsVOwords +
      tqsVOwords +
      vqsVOwords +
      slideSVOwords +
      sbsVOwords +
      scVOwords +
      iivVOwords +
      ddasVOwords +
      waVOwords +
      mgVOwords +
      dddVOwords) *
    1.75;

  let OSTReview =
    (tcsOSTwords +
      vcsOSTwords +
      ivcsOSTwords +
      tqsOSTwords +
      vqsOSTwords +
      slideSOSTwords +
      sbsOSTwords +
      scOSTwords +
      iivOSTwords +
      ddasOSTwords +
      waOSTwords +
      mgOSTwords +
      dddOSTwords) *
    0.75;

  let VoReview =
    (tcsVOwords +
      vcsVOwords +
      ivcsVOwords +
      tqsVOwords +
      vqsVOwords +
      slideSVOwords +
      sbsVOwords +
      scVOwords +
      iivVOwords +
      ddasVOwords +
      waVOwords +
      mgVOwords +
      dddVOwords) *
    0.75;
  let reauthoring = 15000;
  let pricingModalMargin = 55;

  //Asset Creation
  let stockCharacterInitialCost = 10000 * (1 + pricingModalMargin / 100);
  let stockCharacterCost = stockCharacterInitialCost * stockCharacter;
  let finalStockCharacterCost = (stockCharacterCost + 0) * (1 + 0);

  let customeIllustrationsCost = 2500 * (1 + pricingModalMargin / 100);
  let customeIllustrationsP = customeIllustrationsCost * customeIllustrations;
  let customeIllustrationsTotalCost = (customeIllustrationsP + 0) * (1 + 0);

  //Authoring Estimated Price
  let textualContentSlideCost = 700 * (1 + pricingModalMargin / 100);
  let visualContentSlideCost = 1500 * (1 + pricingModalMargin / 100);
  let interactiveVisualcontentSlideCost = 1500 * (1 + pricingModalMargin / 100);
  let textualQuestionSlideCost = 250 * (1 + pricingModalMargin / 100);
  let visualQuestionSlideCost = 750 * (1 + pricingModalMargin / 100);
  let slideShowsCost = 2000 * (1 + pricingModalMargin / 100);
  let storyBasedSlideShowsCost = 4000 * (1 + pricingModalMargin / 100);
  let screenCastsCost = 7000 * (1 + pricingModalMargin / 100);
  let iconicInfographicVideoCost = 7000 * (1 + pricingModalMargin / 100);
  let ddAnimationStoryCost = 7000 * (1 + pricingModalMargin / 100);
  let whiteboardAnimationStoryCost = 8000 * (1 + pricingModalMargin / 100);
  let motionGraphicsCost = 12500 * (1 + pricingModalMargin / 100);
  let dddAnimationStoryCost = 25000 * (1 + pricingModalMargin / 100);
  let gamifiedStoryCost = 25000 * (1 + pricingModalMargin / 100);
  let textualContentSlideTotalCost =
    (textualContentSlideProportion / 100) *
    60 *
    oneScreenPerMinute *
    textualContentSlideCost;
  let visualContentSlideTotalCost =
    (visualContentSlideProportion / 100) *
    60 *
    oneScreenPerMinute *
    visualContentSlideCost;
  let interactiveVisualContentSlideTotalCost =
    (interactiveVisualcontentSlideProportion / 100) *
    60 *
    oneScreenPerMinute *
    interactiveVisualcontentSlideCost;
  let textualQuestionSlideTotalCost =
    (textualQuestionSlideProportion / 100) *
    60 *
    twoScreenPerMinute *
    textualQuestionSlideCost;
  let visualQuestionSlideTotalCost =
    (visualQuestionSlideProportion / 100) *
    60 *
    twoScreenPerMinute *
    visualQuestionSlideCost;
  let slideShowsTotalCost =
    (slideShowsProportion / 100) * 60 * oneScreenPerMinute * slideShowsCost;
  let storyBasedSlideShowsTotalCost =
    (storyBasedSlideShowsProportion / 100) *
    60 *
    oneScreenPerMinute *
    storyBasedSlideShowsCost;
  let screenCastsTotalCost =
    (screenCastsProportion / 100) * 60 * oneScreenPerMinute * screenCastsCost;
  let iconicInfographicVideoTotalCost =
    (iconicInfographicVideoProportion / 100) *
    60 *
    oneScreenPerMinute *
    iconicInfographicVideoCost;
  let ddAnimationStoryTotalCost =
    (ddAnimatedStoryProportion / 100) *
    60 *
    oneScreenPerMinute *
    ddAnimationStoryCost;
  let whiteboardAnimationTotalCost =
    (whiteboardAnimationProportion / 100) *
    60 *
    oneScreenPerMinute *
    whiteboardAnimationStoryCost;
  let motionGraphicsTotalCost =
    (motionGraphicsProportion / 100) *
    60 *
    oneScreenPerMinute *
    motionGraphicsCost;
  let dddAnimationStoryTotalCost =
    (ddAnimatedStoryProportion / 100) *
    60 *
    oneScreenPerMinute *
    dddAnimationStoryCost;
  let gamifiedStoryTotalCost =
    gamifiedStory === "Y" ? gamifiedStoryCost * languages : 0;

  let authoringTotalCost =
    textualContentSlideTotalCost +
    visualContentSlideTotalCost +
    interactiveVisualContentSlideTotalCost +
    textualQuestionSlideTotalCost +
    visualQuestionSlideTotalCost +
    slideShowsTotalCost +
    storyBasedSlideShowsTotalCost +
    screenCastsTotalCost +
    iconicInfographicVideoTotalCost;

  let totalAuthoringCost =
    (70 / 100) * (authoringTotalCost + gamifiedStoryTotalCost) * (1 + 0);
  let finalAuthoringCost = totalAuthoringCost * hrs;

  //StoryBoarding Price
  let totalStoryBoardingCost =
    (30 / 100) * (authoringTotalCost + gamifiedStoryTotalCost) * (1 + 0);
  let finalStoryBoardingCost = totalStoryBoardingCost * hrs;

  // Voiceovers Estimated Price
  let machineVoiceoversPrice = 3000;
  let calulatedMachineVoiceoverPrice =
    machineVoiceoversPrice * (1 + pricingModalMargin / 100);
  let totalMachineVoiceOverPrice =
    machineVoiceOver === "Y"
      ? calulatedMachineVoiceoverPrice * (parseInt(languages) + 1)
      : 0;
  let humanVoiceoverPrice = 18000;
  let calculatedHumanVoiceoversPrice = humanVoiceoverPrice * (1 + 55 / 100);
  let totalHumanVoiceoverPrice =
    humanVoiceOver === "Y"
      ? calculatedHumanVoiceoversPrice * (parseInt(languages) + 1)
      : 0;
  let voiceOverPrice =
    (totalMachineVoiceOverPrice + totalHumanVoiceoverPrice) * (1 + 0);
  let finalVoiceOverCost = voiceOverPrice * hrs;

  // Translation Estimated Price
  let initialTranslationCost =
    (OSTTranslation + reauthoring + VoTranslation + OSTReview + VoReview) *
    (1 + pricingModalMargin / 100);
  let calculatedTranslationCost = initialTranslationCost * (1 + 0);
  let totalTranslationCost = calculatedTranslationCost * languages;
  let finalTranslationCost = calculatedTranslationCost * hrs * languages;
  // total cost
  let totalEstimatedCost =
    finalAuthoringCost +
    finalStockCharacterCost +
    finalStoryBoardingCost +
    finalTranslationCost +
    finalVoiceOverCost;

  let allEstimatedCost = (text, total) => {
    return { text, total };
  };
  let allEstimatedCosts = [
    allEstimatedCost("Storyboarding", finalStoryBoardingCost),
    allEstimatedCost("Asset Creation", finalStockCharacterCost),
    allEstimatedCost("Authoring", finalAuthoringCost),
    allEstimatedCost("Voiceovers", finalVoiceOverCost),
    allEstimatedCost("Translations", finalTranslationCost),
  ];

  let csDetailsData = (name, text, proportion, screens, total, OSTwords, VOwords) => {
    return { name, text, proportion, screens, total, OSTwords, VOwords };
  };
  let vDetailsData = (name, text, proportion, minutes, total, OSTwords, VOwords) => {
    return { name, text, proportion, minutes, total, OSTwords, VOwords };
  };
  let accessAddonsData = (name, text, checked, total) => {
    return { name, text, checked, total };
  };
  let presentAddonsData = (name, text, value, total) => {
    return { name, text, value, total };
  };
  let translationAddons = (name, text, checked) => {
    return { name, text, checked };
  };
  let priceEstimatorData = (name, estimatePrice) => {
    return { name, estimatePrice };
  };

  let totalCost = () => {
    return (
      <Paper elevation={3} align="center" sx={{ width: "7em", p: 1 }}>
        <b>Total Cost</b>
      </Paper>
    );
  };
  const contentSlidesData = [
    csDetailsData(
      "textual-content-slide",
      "Textual Content Slide",
      textualContentSlideProportion,
      level === "1" ? "19" : level === "2" ? "0" : level === "3" ? "0" : "0",
      textualContentSlideTotalCost, tcsOSTwords, tcsVOwords
    ),
    csDetailsData(
      "visual-content-slide",
      "Visual Content Slide",
      visualContentSlideProportion,
      level === "1" ? "19" : level === "2" ? "27" : level === "3" ? "8" : "8",
      visualContentSlideTotalCost, vcsOSTwords, vcsVOwords
    ),
    csDetailsData(
      "interactive-content",
      "Interactive Content",
      interactiveVisualcontentSlideProportion,
      level === "1" ? "10" : level === "2" ? "18" : level === "3" ? "34" : "0",
      interactiveVisualContentSlideTotalCost, ivcsOSTwords, ivcsVOwords
    ),
    csDetailsData(
      "textual-question-slide",
      "Textual Question Slide",
      textualQuestionSlideProportion,
      level === "1" ? "18" : level === "2" ? "12" : level === "3" ? "6" : "0",
      textualQuestionSlideTotalCost, tqsOSTwords, tqsVOwords
    ),
    csDetailsData(
      "visual-question-slide",
      "Visual Question Slide",
      visualQuestionSlideProportion,
      level === "1" ? "0" : level === "2" ? "6" : level === "3" ? "12" : "0",
      visualQuestionSlideTotalCost, vqsOSTwords, vqsVOwords
    ),
  ];
  const videosTableData = [
    vDetailsData(
      "slideshows",
      "Slideshows",
      slideShowsProportion,
      level === "1" ? "3" : level === "2" ? "6" : level === "3" ? "3" : "0",
      slideShowsTotalCost, slideSOSTwords, slideSVOwords
    ),

    vDetailsData(
      "story-based-slideshows",
      "Story Based Slideshows",
      storyBasedSlideShowsProportion,
      level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "6" : "0",
      storyBasedSlideShowsTotalCost, sbsOSTwords, sbsVOwords
    ),

    vDetailsData(
      "screencasts",
      "Screencasts",
      screenCastsProportion,
      level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0",
      screenCastsTotalCost, scOSTwords, scVOwords
    ),
    vDetailsData(
      "iconic-infographic-video/ Infograph Video",
      "Iconic / Infograph Video",
      iconicInfographicVideoProportion,
      level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0",
      iconicInfographicVideoTotalCost, iivOSTwords, iivVOwords
    ),
    vDetailsData(
      "2D-animated-story",
      "2D Animated Story",
      ddAnimatedStoryProportion,
      level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0",
      ddAnimationStoryTotalCost, ddasOSTwords, ddasVOwords
    ),
    vDetailsData(
      "whiteboard-animation",
      "Whiteboard Animation",
      whiteboardAnimationProportion,
      level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0",
      whiteboardAnimationTotalCost, waOSTwords, waVOwords
    ),
    vDetailsData(
      "motion-graphics",
      "Motion Graphics",
      motionGraphicsProportion,
      level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0",
      motionGraphicsTotalCost, mgOSTwords, mgVOwords
    ),
    vDetailsData(
      "3d-animation",
      "3D Animation Story",
      dddAnimationStoryProportion,
      level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0",
      dddAnimationStoryTotalCost, dddOSTwords, dddVOwords
    ),
  ];
  const accessibilityAddonsData = [
    accessAddonsData(
      "machine-voiceovers",
      "Machine VoiceOvers",
      machineVoiceOver,
      totalMachineVoiceOverPrice
    ),
    accessAddonsData(
      "human-voiceovers",
      "Human VoiceOvers",
      humanVoiceOver,
      totalHumanVoiceoverPrice
    ),
    accessAddonsData(
      "gamified-story",
      "Gamified story",
      gamifiedStory,
      gamifiedStoryTotalCost
    ),
  ];
  const presentationAddonsData = [
    presentAddonsData(
      "stock-character-with-6-poses",
      "Stock Character with 6 Poses",
      stockCharacter,
      finalStockCharacterCost
    ),
    presentAddonsData(
      "custom-illustrations",
      "Custom Illustrations",
      customeIllustrations,
      customeIllustrationsTotalCost
    ),
  ];
  const translationAddonsData = [
    translationAddons(
      "translate-voiceover-scripts",
      "Translate Voiceover Scripts",
      translation
    ),
    translationAddons(
      "external-translation-review",
      "External Translation Review",
      translation
    ),
  ];

  const estimatorPriceRow = [
    priceEstimatorData("Storyboarding", numberFormat(finalStoryBoardingCost)),
    priceEstimatorData("Asset Creation", numberFormat(finalStockCharacterCost)),
    priceEstimatorData("Authoring", numberFormat(finalAuthoringCost)),
    priceEstimatorData("Voiceovers", numberFormat(finalVoiceOverCost)),
    priceEstimatorData("Translations", numberFormat(finalTranslationCost)),
    // priceEstimatorData(totalCost(), numberFormat(totalEstimatedCost)),
  ];

  function getTotalEstimateCost() {
    return (
      <TableContainer component={Paper} sx={{ mb: {xs: 1, md:2}, borderRadius: "1em" }}>
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#ffbf00" }}>
            <TableRow>
              <TableCell sx={{ ...headerStyle, p: 2 }}>Total Cost</TableCell>
              <TableCell sx={{ ...headerStyle, p: 2 }} align="right">
                {numberFormat(totalEstimatedCost)}
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    );
  }

  let details = () => {
    if (Object.keys(dataDetails).length >= 1) {
      setLevel(dataDetails.data.level);
      setHrs(dataDetails.data.hrs);
    }
  };
  let handleInput = (e) => {
    setLanguages(e.target.value);
    if (e.target.value >= 1) {
      setTranslation("Y");
    } else {
      setTranslation("N");
    }
  };
  const getScreenDimensions = (e) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setScreenDimensions({ width, height });
  };
  let translationEstimate = {
    total: totalTranslationCost,
  };
  useEffect(() => {
    window.addEventListener("resize", getScreenDimensions);
    details();
    dispatch(
      setDetailsData(
        contentSlidesData,
        videosTableData,
        accessibilityAddonsData,
        presentationAddonsData,
        translationAddonsData,
        translationEstimate,
        allEstimatedCosts,
        recommendedLevel
      )
    );
    return () => {
      window.removeEventListener("resize", getScreenDimensions);
    };
  });
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height:
      screenDimensions.width <= 400
        ? "300px"
        : screenDimensions <= 600
          ? "400px"
          : screenDimensions <= 900
            ? "auto"
            : "auto",
  }));
  return (
    <div className="customise-container">
      <h1 className="customise-header">We recommend you:</h1>
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
              <Label style={{ borderRadius: "1em", flex: "1" }}>
                <p
                  className="customise-input-label"
                  style={{ padding: "0.35em 0" }}
                >
                  Content Hours: {hrs}
                </p>
                {/* <input
                  className="customise-header-input"
                  type="number"
                  min={0}
                  value={contentHours}
                  onChange={(v) => handleContentHours(v)}
                /> */}
              </Label>
              <Label style={{ borderRadius: "1em", flex: "1" }}>
                <p
                  className="customise-input-label"
                  style={{ padding: "0.35em 0" }}
                >
                  Module Complexity: {level}{" "}
                </p>
                {/* <input
                  className="customise-header-input"
                  type="number"
                  min={0}
                  value={translations.value}
                  onChange={(v) => handleTranslations(v)}
                /> */}
              </Label>
              {/* <div> Hrs : {hrs}</div>
              <div> &nbsp;&nbsp;&nbsp; Level : {level}</div> */}
              {/* <TextField
            id="standard-basic"
            label="Add Translation"
            variant="standard"
            onChange={(e) => handleInput(e)}
            sx={{ m: 2 }}
          /> */}
            </div>
            {/* <Stack direction="row">
                <TextField id="standard-basic" label="Add Hrs" variant="standard" className='one' onChange={(e) => handleInput(e)} sx={{ m: 2 }} />
                <TextField id="standard-basic" label="Add Level" variant="standard" onChange={(e) => handleInput(e)} sx={{ m: 2 }} />
                <TextField id="standard-basic" label="Add Translation" variant="standard" onChange={(e) => handleInput(e)} sx={{ m: 2 }} />
            </Stack> */}
            <TableContainer
              component={Paper}
              sx={{ mb: {xs: 1, md:2}, borderRadius: "1em", border: "2px solid #45454599" }}
            >
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#45454533" }}>
                  <TableRow>
                    <TableCell sx={headerStyle}>
                      <b>ContentSlides</b>
                    </TableCell>
                    <TableCell sx={headerStyle} align="center">
                      <b>Proportions</b>
                    </TableCell>
                    <TableCell sx={headerStyle} align="center">
                      <b>Screens</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contentSlidesData.map((row) => (
                    <TableRow
                      key={row.text}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={cellStyle} component="th" scope="row">
                        {row.text}
                      </TableCell>
                      <TableCell sx={cellStyle} align="right">
                        <Paper
                          elevation={0}
                          align="center"
                          sx={{ width: "3em", margin: "auto" }}
                        >
                          {row.proportion}%
                        </Paper>
                      </TableCell>
                      <TableCell sx={cellStyle} align="right">
                        <Paper
                          elevation={0}
                          align="center"
                          sx={{ width: "3em", margin: "auto" }}
                        >
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
              sx={{ mb: {xs: 1, md:2}, borderRadius: "1em", border: "2px solid #45454599" }}
            >
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#45454533" }}>
                  <TableRow>
                    <TableCell sx={headerStyle}>
                      <b>Videos</b>
                    </TableCell>
                    <TableCell sx={headerStyle} align="center">
                      <b>Proportions</b>
                    </TableCell>
                    <TableCell sx={headerStyle} align="center">
                      <b>Minutes</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {videosTableData.map((row) => (
                    <TableRow
                      key={row.text}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={cellStyle} component="th" scope="row">
                        {row.text}
                      </TableCell>
                      <TableCell sx={cellStyle} align="right">
                        <Paper
                          elevation={0}
                          align="center"
                          sx={{ width: "3em", margin: "auto" }}
                        >
                          {row.proportion}%
                        </Paper>
                      </TableCell>
                      <TableCell sx={cellStyle} align="right">
                        <Paper
                          elevation={0}
                          align="center"
                          sx={{ width: "3em", margin: "auto" }}
                        >
                          {row.minutes}
                        </Paper>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer
              component={Paper}
              sx={{ mb: {xs: 1, md:2}, borderRadius: "1em", border: "2px solid #45454599" }}
            >
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#45454533" }}>
                  <TableRow>
                    <TableCell sx={headerStyle}>
                      <b>Accessibility AddOns in 1 languages</b>
                    </TableCell>
                    <TableCell sx={headerStyle} align="center">
                      <b>Available</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {accessibilityAddonsData.map((row) => (
                    <TableRow
                      key={row.text}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={cellStyle} component="th" scope="row">
                        {row.text}
                      </TableCell>
                      <TableCell sx={cellStyle} align="right">
                        <Paper
                          elevation={0}
                          align="center"
                          sx={{ width: "3em", margin: "auto" }}
                        >
                          {row.checked}
                        </Paper>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer
              component={Paper}
              sx={{ mb: {xs: 1, md:2}, borderRadius: "1em", border: "2px solid #45454599" }}
            >
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#45454533" }}>
                  <TableRow>
                    <TableCell sx={headerStyle}>
                      <b>Presentaion AddOns</b>
                    </TableCell>
                    <TableCell sx={headerStyle} align="center">
                      <b>Count</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {presentationAddonsData.map((row) => (
                    <TableRow
                      key={row.text}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={cellStyle} component="th" scope="row">
                        {row.text}
                      </TableCell>
                      <TableCell sx={cellStyle} align="right">
                        <Paper
                          elevation={0}
                          align="center"
                          sx={{ width: "3em", margin: "auto" }}
                        >
                          {row.value}
                        </Paper>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer
              component={Paper}
              sx={{ mb: {xs: 1, md:2}, borderRadius: "1em", border: "2px solid #45454599" }}
            >
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#45454533" }}>
                  <TableRow>
                    <TableCell sx={headerStyle}>
                      <b>Translation AddOns</b>
                    </TableCell>
                    <TableCell sx={headerStyle} align="center">
                      <b>Available</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {translationAddonsData.map((row) => (
                    <TableRow
                      key={row.text}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={cellStyle} component="th" scope="row">
                        {row.text}
                      </TableCell>
                      <TableCell sx={cellStyle} align="right">
                        <Paper
                          elevation={0}
                          align="center"
                          sx={{ width: "3em", margin: "auto" }}
                        >
                          {row.checked}
                        </Paper>
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
              sx={{ mb: {xs: 1, md:2}, borderRadius: "1em", border: "2px solid #45454599" }}
            >
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#45454533" }}>
                  <TableRow>
                    <TableCell sx={headerStyle}>Price Estimator</TableCell>
                    <TableCell sx={headerStyle} align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {estimatorPriceRow.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={cellStyle} component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell sx={cellStyle} align="right">
                        <h3>{row.estimatePrice}</h3>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="customise-total-price-container">
              <div className="customise-total-price-container-table">
                {getTotalEstimateCost()}
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
                  onClick={() => setOpen(true)}
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
                  {numberFormat(totalEstimatedCost)}
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

export default ViewDetails;
