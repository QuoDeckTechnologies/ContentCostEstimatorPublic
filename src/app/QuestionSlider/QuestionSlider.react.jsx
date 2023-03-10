import React, { useState, useRef, useEffect } from "react"
import { useDispatch } from "react-redux";
import { Dropdown, Progress, Header, Input, Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderQuestions from "../components/seeds"
import { Modal, Box, Button, styled, Tooltip } from "@mui/material";
import { setRecommendedLevel } from "../../actions/index";

export default function QuestionSlider(props) {
    const [open, setOpen] = useState(props.open);
    const [bar, setBar] = useState(100 / sliderQuestions.length);
    const [currentSlide, SetCurrentSlide] = useState(0);
    const sliderRef = useRef();
    const [lOne, setLOne] = useState(0);
    const [lTwo, setLTwo] = useState(0);
    const [lThree, setLThree] = useState(0);
    const [estimateTime, setEstimateTime] = useState();
    const [enbleBtn, SetEnbleBtn] = useState(true);

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
        window.addEventListener("resize", getScreenDimensions);
        return () => {
            window.removeEventListener("resize", getScreenDimensions);
        };
    });

    let recommendLevel = {
        level: 0,
        hrs: 0,
    };
    let dispatch = useDispatch();

    useEffect(() => {
        setOpen(props.open);
        let length = 100 / sliderQuestions.length;
        setBar(length)
    }, [props.open]);

    let levelOne = 0;
    let levelTwo = 0;
    let levelThree = 0;
    let answers = (e) => {
        if (e.target.textContent === "Sales-Marketing") {
            levelOne += 1;
            levelTwo += 2;
            levelThree += 0;
        } else if (e.target.textContent === "Operations") {
            levelOne += 2;
            levelTwo += 1;
            levelThree += 0;
        } else if (e.target.textContent === "Engineering") {
            levelOne += 0;
            levelTwo += 1;
            levelThree += 2;
        } else if (e.target.textContent === "Finance") {
            levelOne += 0;
            levelTwo += 2;
            levelThree += 1;
        } else if (e.target.textContent === "GenX") {
            levelOne += 0;
            levelTwo += 1;
            levelThree += 2;
        } else if (e.target.textContent === "GenY") {
            levelOne += 1;
            levelTwo += 2;
            levelThree += 0;
        } else if (e.target.textContent === "GenZ") {
            levelOne += 2;
            levelTwo += 1;
            levelThree += 0;
        } else if (e.target.textContent === "Technical") {
            levelOne += 0;
            levelTwo += 1;
            levelThree += 2;
        } else if (e.target.textContent === "Process") {
            levelOne += 1;
            levelTwo += 2;
            levelThree += 0;
        } else if (e.target.textContent === "Behavioral") {
            levelOne += 2;
            levelTwo += 1;
            levelThree += 0;
        } else if (e.target.textContent === "Low") {
            levelOne += 2;
            levelTwo += 1;
            levelThree += 0;
        } else if (e.target.textContent === "Medium") {
            levelOne += 0;
            levelTwo += 2;
            levelThree += 1;
        } else if (e.target.textContent === "High") {
            levelOne += 0;
            levelTwo += 1;
            levelThree += 2;
        }
    }
    const handleNext = (e) => {
        answers(e)
        setLOne(lOne + levelOne)
        setLTwo(lTwo + levelTwo)
        setLThree(lThree + levelThree)
        SetCurrentSlide((prevState) => prevState += 1)
        if (currentSlide < sliderQuestions.length) {
            let barLength = 100 / sliderQuestions.length
            if (barLength)
                setBar((prevState) => prevState += barLength)
            sliderRef.current?.slickNext()
        }
    };

    const daysCount = (e) => {
        let value = parseInt(e.target.value)
        setEstimateTime(e.target.value)
        if (e.target.value.length >= 1) {
            SetEnbleBtn(false)
        }
        else if (e.target.value.length === 0) {
            SetEnbleBtn(true)
        }
        if (value === 0) {
            SetEnbleBtn(true)
        }
    };

    const preventMinusValue = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };

    const handlePrev = () => {
        SetCurrentSlide((prevState) => prevState -= 1)
        if (currentSlide > 0) {
            let barLength = 100 / sliderQuestions.length
            setBar((prevState) => prevState -= barLength)
            sliderRef.current?.slickPrev()
        }
    };

    const submitButton = () => {
        var numbers = [lOne, lTwo, lThree];
        const index = numbers.indexOf(Math.max(...numbers))
        Object.assign(recommendLevel, { level: `${index + 1}`, hrs: estimateTime * 2 });
        dispatch(setRecommendedLevel(recommendLevel))
        props.onSubmit()
        SetCurrentSlide(0)
        SetEnbleBtn(true)
    };

    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        swipe: false
    };

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: screenDimensions.width <= 320 ? "100%" : screenDimensions.width <= 400 ? "90%" : screenDimensions.width <= 600 ? "90%" : screenDimensions.width <= 900 ? "90%" : "60%",
        // height: 500,
        bgcolor: '#6f6f6f',
        boxShadow: 5,
        borderRadius: "5px",
        pt: 3,
        px: 4,
        pb: 3,
    };

    let dropdownStyle = {
        width: screenDimensions.width <= 320 ? "100%" : screenDimensions.width <= 900 ? "80%" : "45%",
        height: "15em",
        margin: "auto"
    };

    let questionHeaderStyle = {
        color: "#fff",
        display: "flex",
        justifyContent: "center"
    };

    let headerStyle = {
        ...questionHeaderStyle,
        marginTop: '-11px'
    };

    const StyledButton = styled(Button)`
    background-color:transparent;
    border: 1px solid #fff;
    color: #fff;
    font-family:oswald;
    font-weight:500;
    &:hover {
        background-color: #ffbf00;
        border: 1px solid #fff;
        color:#000;
    }
    &:focus {
        background-color: #ffbf00;
        color:#000;
    }
    &.MuiButton-root.Mui-disabled{
        color: #fff;
    }`;

    return (
        <Modal
            // hideBackdrop
            open={open}
        >
            <Box sx={{ ...modalStyle }}>
                <div>
                    <div style={{ marginTop: "10px" }}>
                        <Progress percent={bar} size="tiny" indicating warning />
                    </div>
                    <br />
                    <Header as='h1'
                        style={headerStyle}>
                        Welcome
                        <Icon style={{ marginLeft: "10px" }} name='handshake' size='mini' color='yellow' />
                    </Header>
                    <Header as={screenDimensions.width <= 400 ? 'h3' : 'h2'} style={{ ...headerStyle, alignItems: screenDimensions.width <= 400 ? 'center' : "normal" }}>
                        Let's answer in a few clicks
                        <Icon style={{ marginRight: "0" }} name='hourglass start' size='mini' color='yellow' />
                    </Header>
                    <Header
                        style={headerStyle}>
                        {currentSlide + 1}/{sliderQuestions.length}
                    </Header>
                    <br />
                    <Slider ref={sliderRef} {...settings}>
                        {sliderQuestions.map((slide, index) =>
                            <div key={`sliderQuestions-${index}`}>
                                <center style={{ marginBottom: '1em' }}>
                                    <Header as='h3' size='medium' style={questionHeaderStyle}>
                                        {slide.question}
                                    </Header>
                                </center>
                                <div style={dropdownStyle}>
                                    {slide.type === "number" ?
                                        <div>
                                            <Input
                                                fluid
                                                placeholder='Put down the number'
                                                type="number"
                                                min={1}
                                                onKeyPress={preventMinusValue}
                                                onChange={(e) => { daysCount(e) }}
                                            />
                                            {parseInt(estimateTime) === 0 &&
                                                <center>
                                                    <h4 style={{ color: "#fff" }}>
                                                        Number should be greater than 0</h4>
                                                </center>
                                            }</div> :
                                        <Dropdown
                                            placeholder='Select an option'
                                            fluid
                                            selection
                                            options={slide.options}
                                            onChange={handleNext}
                                        />
                                    }
                                </div>
                            </div>
                        )}
                    </Slider>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <StyledButton
                            sx={{ fontSize: "1.3em", width: screenDimensions.width <= 420 ? "45%" : "25%" }}
                            onClick={handlePrev}
                            disabled={currentSlide === 0}
                        >
                            Previous
                        </StyledButton>
                        <Tooltip placement="top" arrow title={enbleBtn ? "Answer all the questions" : ""}>
                            <span style={{ width: screenDimensions.width <= 420 ? "45%" : "25%" }}>
                                <StyledButton
                                    sx={{ fontSize: "1.3em", width: "100%" }}
                                    onClick={submitButton}
                                    disabled={enbleBtn}
                                >
                                    Submit
                                </StyledButton>
                            </span>
                        </Tooltip>
                    </div>
                </div>
            </Box>
        </Modal>)
}
