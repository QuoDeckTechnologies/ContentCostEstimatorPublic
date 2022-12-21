import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { Grid, Typography, Button, Paper, styled, Stack, Modal, Box, Backdrop, Fade } from '@mui/material';
import Vector from "../../assets/Vector.png"
// import BlessIcon from "../../assets/bless.png"
import { useNavigate } from 'react-router-dom';

function RecommendationSection(props) {
    const recommendationData = useSelector((state) => state.root.recommendedLevel.list)
    const [open, setOpen] = useState(props.open);
    const [level, setLevel] = useState(0);
    const [estimateTime, setEstimateTime] = useState(0);
    let showButton = props.showButton
    let navigate = useNavigate();
    const handleClose = () => {
        setOpen(false)
        props.onClose(false)
    }

    let data = () => {
        if (Object.keys(recommendationData).length >= 1) {
            setLevel(recommendationData.data.level)
            setEstimateTime(recommendationData.data.hrs)
        }
    }
    const [screenDimensions, setScreenDimensions] = useState({
        width: window.screen.width,
        height: window.screen.height
    });

    const getScreenDimensions = (e) => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setScreenDimensions({ width, height });
    };
    useEffect(() => {
        setOpen(props.open)
        data()
    }, [props.open]);
    useEffect(() => {
        window.addEventListener("resize", getScreenDimensions);
        return () => {
            window.removeEventListener("resize", getScreenDimensions);
        };
    });
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: screenDimensions.width <= 320 ? "100%" : screenDimensions.width <= 400 ? "90%" : screenDimensions.width <= 600 ? "100%" : screenDimensions.width <= 900 ? "90%" : "60%",
        height: screenDimensions.width <= 900 ? "auto" : "70%",
        bgcolor: '#6f6f6f',
        boxShadow: 24,
        padding: "2em",
        alignItems: "center",
        justifyContent: "center"
    };

    const StyledButton = styled(Button)`
        background-color:transparent;
        border: 1px solid #fff;
        color: #fff;
        font-family:oswald;
        font-weight:bold;
        &:hover {
            background-color: #ffca00;
            border: 1px solid #fff;
            color:#000;
        }
        &:focus {
            background-color: #ffca00;
            color:#000;
        }
        `;
    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <Grid
                                container
                                spacing={1}
                                alignItems="center"
                                justifyContent="center"
                                sx={{ backgroundColor: "#6f6f6f", height: "100%" }}
                            >

                                <Grid container item xs={12} sm={6} md={6} lg={6} alignItems="end" justifyContent="center">
                                    <Grid item xs={12}>
                                        <Typography variant="h4" sx={{ fontFamily: "oswald", color: "#fff" }} align='center'>
                                            That's All, Thanks <span>
                                                {/* <img src={BlessIcon} style={{ width: "1.5em", height: "1.5em", margin: "0" }} /> */}
                                            </span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{ mb: 2 }}>
                                        <Typography variant="h3" sx={{ fontFamily: "oswald", fontWeight: "bold", color: "#fff" }} align='center'>
                                            We Recommend You
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{ mb: 1 }}>
                                        <Stack direction={{ xs: 'row', sm: 'row', md: 'row', lg: 'row' }} justifyContent='center' alignItems='center'
                                        >
                                            <Typography variant="h5" sx={{ fontFamily: "oswald", color: "#ffca00", fontWeight: "bold", width: "60%" }} align='center'>
                                                <Paper elevation={2} sx={{ p: 1, backgroundColor: "#fff", color: "#575050", borderRadius: "1em" }}>Level {level}  Module</Paper>
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                    </Grid>
                                    <Grid item xs={12} sx={{ m: 1 }}>
                                        <Stack direction="row" justifyContent='center' alignItems='center'
                                        >
                                            <Typography variant="h5" sx={{ fontFamily: "oswald", color: "#ffca00", fontWeight: "bold", width: "60%" }} align='center'>
                                                <Paper elevation={2} sx={{ p: 1, backgroundColor: "#fff", color: "#575050", borderRadius: "1em" }}>Duration {estimateTime} Hrs</Paper>
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    {showButton && <Grid item xs={12} sx={{ m: 2 }}>
                                        <Typography align='center' >
                                            <StyledButton sx={{ fontSize: "1.3em", width: "100%" }} onClick={() => navigate("/utilities")} >View BreakUp</StyledButton>
                                        </Typography>
                                    </Grid>}
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}
                                >
                                    <img src={Vector} alt="recommendation" style={{ width: "100%", height: "100%" }} />
                                </Grid>

                            </Grid >
                        </Box>
                    </Fade>
                </Modal>
            </Backdrop>
        </div>
    )
}

export default RecommendationSection
