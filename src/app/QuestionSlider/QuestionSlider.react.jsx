import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { Dropdown, Progress, Button, Header, Input, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderQuestions from '../components/seeds'
import { Modal, Box } from '@mui/material';
import { setRecommendedLevel } from '../../actions/index';

export default function QuestionSlider(props) {
    const [open, setOpen] = useState(props.open);
    const [bar, setBar] = useState(100 / sliderQuestions.length);
    const [currentSlide, SetCurrentSlide] = useState(0);
    const sliderRef = useRef();
    const [lOne, setLOne] = useState(0);
    const [lTwo, setLTwo] = useState(0);
    const [lThree, setLThree] = useState(0);
    const [estimateTime, setEstimateTime] = useState();

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
    let length;
    useEffect(() => {
        setOpen(props.open);
        length = 100 / sliderQuestions.length
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
        setEstimateTime(e.target.value)
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
    };

    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: false
    };

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: screenDimensions.width <= 320 ? "100%" : screenDimensions.width <= 400 ? "90%" : screenDimensions.width <= 600 ? "100%" : screenDimensions.width <= 900 ? "90%" : "80%",
        // height: 500,
        bgcolor: '#6f6f6f',
        boxShadow: 5,
        borderRadius: "5px",
        pt: 3,
        px: 4,
        pb: 3,
    };

    let dropdownStyle = {
        width: "45%",
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
                    <Header as='h2' style={headerStyle}>
                        Let's answer in a few clicks
                        <Icon name='hourglass start' size='mini' color='yellow' />
                    </Header>
                    <Header
                        style={headerStyle}>
                        {currentSlide + 1}/{sliderQuestions.length}
                    </Header>
                    <br />
                    <Slider ref={sliderRef} {...settings}>
                        {sliderQuestions.map((slide, index) =>
                            <div key={`sliderQuestions-${index}`}>
                                <Header as='h3' size='medium' style={questionHeaderStyle}>
                                    {slide.question}
                                </Header>
                                <div style={dropdownStyle}>
                                    {slide.type === "number" ?
                                        <Input fluid placeholder='choose number' type="number" onChange={(e) => { daysCount(e) }} /> :
                                        <Dropdown
                                            placeholder='Select options'
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
                    <div>
                        <Button
                            color='yellow'
                            inverted
                            onClick={handlePrev}
                            floated='left'
                            size="big"
                            content="Previous"
                            disabled={currentSlide === 0}
                        />
                        <Button
                            color='yellow'
                            inverted
                            // onClick={handleNext}
                            floated='right'
                            size="big"
                            content="Submit"
                            disabled={currentSlide != sliderQuestions.length - 1}
                            onClick={submitButton}
                        />
                    </div>
                </div>
            </Box>
        </Modal>)
}
