import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Paper, styled, Table, TableBody, TableCell, Grid, TableContainer, TableHead, TableRow, Stack, Box, Container, Typography, TextField } from '@mui/material';
import { setDetailsData } from '../../actions/index';
import recommendedLevel from '../../reducers/dataReducer';
import Logo from "../../assets/logo.png"


const ViewDetails = () => {
    const dataDetails = useSelector((state) => state.root.recommendedLevel.list)
    const [level, setLevel] = useState();
    const [hrs, setHrs] = useState();
    const [translation, setTranslation] = useState("N");
    const [languages, setLanguages] = useState(0)
    const [screenDimensions, setScreenDimensions] = useState({
        width: window.screen.width,
        height: window.screen.height
    });
    let dispatch = useDispatch();
    const numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(value);


    let OSTTranslation = 9188;
    let VoTranslation = 8558;
    let OSTReview = 3938;
    let VoReview = 3668;
    let reauthoring = 15000;
    let pricingModalMargin = 55;
    let machineVoiceOver = level === "1" ? "Y" : level === "2" ? "N" : level === "3" ? "N" : "-";
    let humanVoiceOver = level === "1" ? "N" : level === "2" ? "Y" : level === "3" ? "Y" : "-";
    let gamifiedStory = level === "1" ? "N" : level === "2" ? "N" : level === "3" ? "N" : "-";
    let textualContentSlideProportion = level === "1" ? "32" : level === "2" ? "0" : level === "3" ? "0" : "0";
    let visualContentSlideProportion = level === "1" ? "32" : level === "2" ? "45" : level === "3" ? "14" : "0";
    let interactiveVisualcontentSlideProportion = level === "1" ? "16" : level === "2" ? "30" : level === "3" ? "56" : "0";
    let textualQuestionSlideProportion = level === "1" ? "15" : level === "2" ? "10" : level === "3" ? "5" : "0";
    let visualQuestionSlideProportion = level === "1" ? "0" : level === "2" ? "5" : level === "3" ? "10" : "0";
    let slideShowsProportion = level === "1" ? "5" : level === "2" ? "10" : level === "3" ? "5" : "0";
    let storyBasedSlideShowsProportion = level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "10" : "0";
    let screenCastsProportion = level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0";
    let iconicInfographicVideoProportion = level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0";
    let ddAnimatedStoryProportion = level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0";
    let whiteboardAnimationProportion = level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0";
    let motionGraphicsProportion = level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0";
    let dddAnimationStoryProportion = level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0";
    let stockCharacter = level === "1" ? "0" : level === "2" ? "1" : level === "3" ? "2" : "-";
    let customeIllustrations = level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "-";


    //Asset Creation
    let stockCharacterInitialCost = 10000 * (1 + pricingModalMargin / 100)
    let stockCharacterCost = stockCharacterInitialCost * stockCharacter;
    let finalStockCharacterCost = (stockCharacterCost + 0) * (1 + 0)

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
    let gamifiedStoryCost = 25000 * (1 + pricingModalMargin / 100);
    let oneScreenPerMinute = 1;
    let twoScreenPerMinute = 2;
    let textualContentSlideTotalCost = (textualContentSlideProportion / 100) * 60 * oneScreenPerMinute * textualContentSlideCost;
    let visualContentSlideTotalCost = (visualContentSlideProportion / 100) * 60 * oneScreenPerMinute * visualContentSlideCost;
    let interactiveVisualContentSlideTotalCost = (interactiveVisualcontentSlideProportion / 100) * 60 * oneScreenPerMinute * interactiveVisualcontentSlideCost;
    let textualQuestionSlideTotalCost = (textualQuestionSlideProportion / 100) * 60 * twoScreenPerMinute * textualQuestionSlideCost;
    let visualQuestionSlideTotalCost = (visualQuestionSlideProportion / 100) * 60 * twoScreenPerMinute * visualQuestionSlideCost;
    let slideShowsTotalCost = (slideShowsProportion / 100) * 60 * oneScreenPerMinute * slideShowsCost;
    let storyBasedSlideShowsTotalCost = (storyBasedSlideShowsProportion / 100) * 60 * oneScreenPerMinute * storyBasedSlideShowsCost;
    let screenCastsTotalCost = (screenCastsProportion / 100) * 60 * oneScreenPerMinute * screenCastsCost;
    let iconicInfographicVideoTotalCost = (iconicInfographicVideoProportion / 100) * 60 * oneScreenPerMinute * iconicInfographicVideoCost;
    let gamifiedStoryTotalCost = gamifiedStory === "Y" ? gamifiedStoryCost * languages : 0;
    let authoringTotalCost = textualContentSlideTotalCost + visualContentSlideTotalCost + interactiveVisualContentSlideTotalCost + textualQuestionSlideTotalCost + visualQuestionSlideTotalCost + slideShowsTotalCost + storyBasedSlideShowsTotalCost + screenCastsTotalCost + iconicInfographicVideoTotalCost

    let totalAuthoringCost = (70 / 100) * (authoringTotalCost + gamifiedStoryTotalCost) * (1 + 0);
    let finalAuthoringCost = (totalAuthoringCost * hrs)

    //StoryBoarding Price 
    let totalStoryBoardingCost = (30 / 100) * (authoringTotalCost + gamifiedStoryTotalCost) * (1 + 0);
    let finalStoryBoardingCost = (totalStoryBoardingCost * hrs)

    // Voiceovers Estimated Price
    let machineVoiceoversPrice = 3000;
    let calulatedMachineVoiceoverPrice = machineVoiceoversPrice * (1 + pricingModalMargin / 100);
    let totalMachineVoiceOverPrice = machineVoiceOver === "Y" ? calulatedMachineVoiceoverPrice * (parseInt(languages) + 1) : 0;
    let humanVoiceoverPrice = 18000;
    let calculatedHumanVoiceoversPrice = humanVoiceoverPrice * (1 + 55 / 100);
    let totalHumanVoiceoverPrice = humanVoiceOver === "Y" ? calculatedHumanVoiceoversPrice * (parseInt(languages) + 1) : 0;
    let voiceOverPrice = (totalMachineVoiceOverPrice + totalHumanVoiceoverPrice) * (1 + 0);
    let finalVoiceOverCost = (voiceOverPrice * hrs)

    // Translation Estimated Price
    let initialTranslationCost = (OSTTranslation + reauthoring + VoTranslation + OSTReview + VoReview) * (1 + pricingModalMargin / 100);
    let totalTranslatedCost = initialTranslationCost * languages
    let calculatedTranslationCost = totalTranslatedCost * (1 + 0);
    let finalTranslationCost = (calculatedTranslationCost * hrs);


    let totalEstimateCost = finalAuthoringCost + finalStockCharacterCost + finalStoryBoardingCost + finalTranslationCost + finalVoiceOverCost

    let csDetailsData = (name, text, proportions, screens) => {
        return { name, text, proportions, screens }
    }
    let vDetailsData = (name, text, proportions, minutes) => {
        return { name, text, proportions, minutes }
    }
    let accessAddonsData = (name, text, available) => {
        return { name, text, available }
    }
    let presentAddonsData = (name, text, count) => {
        return { name, text, count }
    }
    let translationAddons = (name, text, available) => {
        return { name, text, available }
    }
    let priceEstimatorData = (name, estimatePrice) => {
        return { name, estimatePrice }
    }

    let totalCost = () => {
        return (
            <Paper elevation={3} align="center" sx={{ width: "7em", p: 1 }}><b>Total Cost</b></Paper>
        )
    }
    const contentSlidesData = [
        csDetailsData(
            'textual-content-slide',
            'Textual Content Slide',
            textualContentSlideProportion,
            level === "1" ? "19" : level === "2" ? "0" : level === "3" ? "0" : "0"
        ),
        csDetailsData(
            'visual-content-slide',
            'Visual Content Slide', visualContentSlideProportion,
            level === "1" ? "19" : level === "2" ? "27" : level === "3" ? "8" : "8"
        ),
        csDetailsData('interactive-content',
            'Interactive Content', interactiveVisualcontentSlideProportion,
            level === "1" ? "10" : level === "2" ? "18" : level === "3" ? "34" : "0"
        ),
        csDetailsData(
            'textual-question-slide',
            'Textual Question Slide', textualQuestionSlideProportion,
            level === "1" ? "18" : level === "2" ? "12" : level === "3" ? "6" : "0"
        ),
        csDetailsData(
            'visual-question-slide',
            'Visual Question Slide', visualQuestionSlideProportion,
            level === "1" ? "0" : level === "2" ? "6" : level === "3" ? "12" : "0"
        ),
    ];
    const videosTableData = [
        vDetailsData(
            'slideshows', 'Slideshows', slideShowsProportion,
            level === "1" ? "3" : level === "2" ? "6" : level === "3" ? "3" : "0"
        ),

        vDetailsData(
            'story-based-slideshows', 'Story Based Slideshows', storyBasedSlideShowsProportion,
            level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "6" : "0"
        ),

        vDetailsData(
            'screencasts',
            'Screencasts', screenCastsProportion,
            level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0"
        ),
        vDetailsData(
            'iconic-iconographic-video/ Iconograph Video',
            'Iconic / Iconograph Video', iconicInfographicVideoProportion,
            level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0"
        ),
        vDetailsData(
            '2D-animated-story', '2D Animated Story', ddAnimatedStoryProportion,
            level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0"
        ),
        vDetailsData(
            'whiteboard-animation',
            'Whiteboard Animation', whiteboardAnimationProportion,
            level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0"
        ),
        vDetailsData(
            'motion-graphics',
            'Motion Graphics', motionGraphicsProportion,
            level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0"
        ),
        vDetailsData(
            '3d-animation',
            '3D Animation Story', dddAnimationStoryProportion,
            level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0"
        ),
    ];
    const accessibilityAddonsData = [
        accessAddonsData(
            'machine-voiceovers', 'Machine VoiceOvers', machineVoiceOver,
        ),
        accessAddonsData(
            'human-voiceovers', 'Human VoiceOvers', humanVoiceOver
        ),
        accessAddonsData(
            'gamified-story', 'Gamified story', gamifiedStory
        ),

    ];
    const presentationAddonsData = [
        presentAddonsData(
            'stock-character-with-6-poses', 'Stock Character with 6 Poses',
            stockCharacter
        ),
        presentAddonsData(
            'custom-illustrations', 'Custom Illustrations', customeIllustrations
        ),

    ];
    const translationAddonsData = [
        translationAddons(
            'translate-voiceover-scripts', 'Translate Voiceover Scripts', translation
        ),
        translationAddons(
            'external-translation-review', 'External Translation Review', translation
        ),

    ];

    const estimatorPriceRow = [
        priceEstimatorData('Story Boarding', numberFormat(finalStoryBoardingCost)),
        priceEstimatorData('Asset Creation', numberFormat(finalStockCharacterCost)),
        priceEstimatorData('Authoring', numberFormat(finalAuthoringCost)),
        priceEstimatorData('Voiceover', numberFormat(finalVoiceOverCost)),
        priceEstimatorData('Translations', numberFormat(finalTranslationCost)),
        priceEstimatorData(totalCost(), numberFormat(totalEstimateCost)),
    ];
    let details = () => {
        if (Object.keys(dataDetails).length >= 1) {
            setLevel(dataDetails.data.level)
            setHrs(dataDetails.data.hrs)
        }
    }
    let handleInput = (e) => {
        setLanguages(e.target.value)
        if (e.target.value >= 1) {
            setTranslation("Y")
        } else {
            setTranslation("N")
        }
    }
    const getScreenDimensions = (e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setScreenDimensions({ width, height });
    };
    useEffect(() => {
        window.addEventListener("resize", getScreenDimensions);
        details()
        dispatch(setDetailsData(contentSlidesData, videosTableData, accessibilityAddonsData, presentationAddonsData, translationAddonsData, recommendedLevel))
        return () => {
            window.removeEventListener("resize", getScreenDimensions);
        };
    });
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: screenDimensions.width <= 400 ? "300px" : screenDimensions <= 600 ? "400px" : screenDimensions <= 900 ? "auto" : "auto"
    }));
    return (
        <Grid container sx={{ backgroundColor: "#45454599", height: "100%", p: 4 }} justifyContent='center' alignItems='center'>
            {/* <Box
                component="img"
                alignItems="start"
                sx={{
                    height: "3em",
                    width: "12em",
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={Logo}
            /> */}
            <div> Hrs : {hrs}</div>
            <div> &nbsp;&nbsp;&nbsp; Level : {level}</div>
            <TextField id="standard-basic" label="Add Translation" variant="standard" onChange={(e) => handleInput(e)} sx={{ m: 2 }} />
            <Grid container spacing={1}  >
                <Grid item xs={12} sm={7} md={7} lg={7}>
                    <TableContainer component={Item}>
                        <Table aria-label="simple table">
                            <TableHead sx={{ backgroundColor: "#45454533" }}>
                                <TableRow>
                                    <TableCell><b>ContentSlides</b></TableCell>
                                    <TableCell align="center"><b>Proportions</b></TableCell>
                                    <TableCell align="center"><b>Screens</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {contentSlidesData.map((row) => (
                                    <TableRow
                                        key={row.text}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.text}
                                        </TableCell>
                                        <TableCell align="right" sx={{ width: "fit-content" }}><Paper elevation={0} align="center" sx={{ width: "3em", margin: "auto" }}>{row.proportions}%</Paper></TableCell>
                                        <TableCell align="right" sx={{ width: "fit-content" }}><Paper elevation={0} align="center" sx={{ width: "3em", margin: "auto" }}>{row.screens}%</Paper></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer component={Item} sx={{ mt: 2 }}>
                        <Table aria-label="simple table">
                            <TableHead sx={{ backgroundColor: "#45454533" }}>
                                <TableRow>
                                    <TableCell><b>Videos</b></TableCell>
                                    <TableCell align="center"><b>Proportions</b></TableCell>
                                    <TableCell align="center"><b>Minutes</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {videosTableData.map((row) => (
                                    <TableRow
                                        key={row.text}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.text}
                                        </TableCell>
                                        <TableCell align="right" sx={{ width: "fit-content" }}><Paper elevation={0} align="center" sx={{ width: "3em", margin: "auto" }}>{row.proportions}%</Paper></TableCell>
                                        <TableCell align="right" sx={{ width: "fit-content" }}><Paper elevation={0} align="center" sx={{ width: "3em", margin: "auto" }}>{row.minutes}%</Paper></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer component={Item} sx={{ mt: 2 }}>
                        <Table aria-label="simple table">
                            <TableHead sx={{ backgroundColor: "#45454533" }}>
                                <TableRow>
                                    <TableCell><b>Accessibility AddOns in 1 languages</b></TableCell>
                                    <TableCell align="center"><b>Available</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {accessibilityAddonsData.map((row) => (
                                    <TableRow
                                        key={row.text}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.text}
                                        </TableCell>
                                        <TableCell align="right" sx={{ width: "fit-content" }}><Paper elevation={0} align="center" sx={{ width: "3em", margin: "auto" }}>{row.available}</Paper></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer component={Item} sx={{ mt: 2 }}>
                        <Table aria-label="simple table">
                            <TableHead sx={{ backgroundColor: "#45454533" }}>
                                <TableRow>
                                    <TableCell><b>Presentaion AddOns</b></TableCell>
                                    <TableCell align="center"><b>Count</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {presentationAddonsData.map((row) => (
                                    <TableRow
                                        key={row.text}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.text}
                                        </TableCell>
                                        <TableCell align="right" sx={{ width: "fit-content" }}><Paper elevation={0} align="center" sx={{ width: "3em", margin: "auto" }}>{row.count}</Paper></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer component={Item} sx={{ mt: 2 }}>
                        <Table aria-label="simple table">
                            <TableHead sx={{ backgroundColor: "#45454533" }}>
                                <TableRow>
                                    <TableCell><b>Translation AddOns</b></TableCell>
                                    <TableCell align="center"><b>Available</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {translationAddonsData.map((row) => (
                                    <TableRow
                                        key={row.text}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.text}
                                        </TableCell>
                                        <TableCell align="right" sx={{ width: "fit-content" }}><Paper elevation={0} align="center" sx={{ width: "3em", margin: "auto" }}>{row.available}</Paper></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={5} sx={{ position: "sticky" }} >
                    <TableContainer component={Item}>
                        <Paper elevation={0} sx={{ p: 2.1, backgroundColor: "#45454533", borderRadius: "0", }} ><b>Price Estimator</b></Paper>
                        <Table aria-label="simple table">
                            <TableBody>
                                {estimatorPriceRow.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right" sx={{ width: "fit-content" }}><Paper elevation={2} align="center" sx={{ width: "10em", margin: "auto", p: 0.5 }}>{row.estimatePrice}</Paper></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default ViewDetails