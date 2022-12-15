import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Paper, styled, Table, TableBody, TableCell, Grid, TableContainer, TableHead, TableRow, Stack, Box, Container, Typography } from '@mui/material';
import RecommendationSection from '../recommendationSection/RecommendationSection.react';
import { setDetailsData } from '../../actions/index';
import recommendedLevel from '../../reducers/dataReducer';
import Logo from "../../assets/logo.png"


const ViewDetails = () => {
    const dataDetails = useSelector((state) => state.root.recommendedLevel.list)
    const [open, setOpen] = useState(false);
    const [level, setLevel] = useState();
    const [hrs, setHrs] = useState();
    const [translation, setTranslation] = useState("N");
    const [totalEstimateCost, setTotalEstimateCost] = useState();
    const [screenDimensions, setScreenDimensions] = useState({
        width: window.screen.width,
        height: window.screen.height
    });
    let dispatch = useDispatch();
    let levelOneCost = "108717";
    let levelTwoCost = "178250";
    let levelThreeCost = "219325";
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
            level === "1" ? "32" : level === "2" ? "0" : level === "3" ? "0" : "0",
            level === "1" ? "19" : level === "2" ? "0" : level === "3" ? "0" : "0"
        ),
        csDetailsData(
            'visual-content-slide',
            'Visual Content Slide',
            level === "1" ? "32" : level === "2" ? "45" : level === "3" ? "14" : "0",
            level === "1" ? "19" : level === "2" ? "27" : level === "3" ? "8" : "8"
        ),
        csDetailsData('interactive-content',
            'Interactive Content',
            level === "1" ? "16" : level === "2" ? "30" : level === "3" ? "56" : "0",
            level === "1" ? "10" : level === "2" ? "18" : level === "3" ? "34" : "0"
        ),
        csDetailsData(
            'texual-question-slide',
            'Texual Question Slide',
            level === "1" ? "15" : level === "2" ? "10" : level === "3" ? "5" : "0",
            level === "1" ? "18" : level === "2" ? "12" : level === "3" ? "6" : "0"
        ),
        csDetailsData(
            'visual-question-slide',
            'Visual Question Slide',
            level === "1" ? "0" : level === "2" ? "5" : level === "3" ? "10" : "0",
            level === "1" ? "0" : level === "2" ? "6" : level === "3" ? "12" : "0"
        ),
    ];
    const videosTableData = [
        vDetailsData(
            'slideshows', 'Slideshows',
            level === "1" ? "5" : level === "2" ? "10" : level === "3" ? "5" : "0",
            level === "1" ? "3" : level === "2" ? "6" : level === "3" ? "3" : "0"
        ),

        vDetailsData(
            'story-based-slideshows', 'Story Based Slideshows',
            level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "10" : "0",
            level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "6" : "0"
        ),

        vDetailsData(
            'screencasts',
            'Screencasts',
            level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0",
            level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0"
        ),

        vDetailsData(
            'iconic-iconographic-video/ Iconograph Video',
            'Iconic / Iconograph Video',
            level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0",
            level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "0"
        ),
    ];
    const accessibilityAddonsData = [
        accessAddonsData(
            'machine-voiceovers', 'Machine VoiceOvers',
            level === "1" ? "Y" : level === "2" ? "N" : level === "3" ? "N" : "-",
        ),
        accessAddonsData(
            'human-voiceovers', 'Human VoiceOvers',
            level === "1" ? "N" : level === "2" ? "Y" : level === "3" ? "Y" : "-",
        ),
        accessAddonsData(
            'gamified-story', 'Gamified story',
            level === "1" ? "N" : level === "2" ? "N" : level === "3" ? "N" : "-",
        ),

    ];
    const presentationAddonsData = [
        presentAddonsData(
            'stock-character-with-6-poses', 'Stock Character with 6 Poses',
            level === "1" ? "0" : level === "2" ? "1" : level === "3" ? "2" : "-",
        ),
        presentAddonsData(
            'custom-illustrations', 'Custom Illustrations',
            level === "1" ? "0" : level === "2" ? "0" : level === "3" ? "0" : "-",
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
        priceEstimatorData('Story Branding', "00000"),
        priceEstimatorData('Asset Creation', "00000"),
        priceEstimatorData('Authoring', "00000"),
        priceEstimatorData('Voiceover', "00000"),
        priceEstimatorData('Translations', "00000"),
        priceEstimatorData(totalCost(), totalEstimateCost),
    ];
    let details = () => {
        if (Object.keys(dataDetails).length >= 1) {
            setLevel(dataDetails.data.level)
            setHrs(dataDetails.data.hrs)
            let totalCostOne = levelOneCost * hrs
            let totalCostTwo = levelTwoCost * hrs
            let totalCostThree = levelThreeCost * hrs
            if (level === "1") {
                setTotalEstimateCost(totalCostOne)
            } else if (level === "2") {
                setTotalEstimateCost(totalCostTwo)
            } else {
                setTotalEstimateCost(totalCostThree)
            }
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
            <RecommendationSection open={open} onClose={(e) => setOpen(e)} />
        </Grid >
    )
}

export default ViewDetails