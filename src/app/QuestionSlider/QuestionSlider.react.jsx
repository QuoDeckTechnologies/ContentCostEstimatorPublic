import React, { useState, useRef, useEffect } from 'react'
import { Dropdown, Progress, Button, Header, Input, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderQuestions from '../components/seeds'
import { Modal, Box } from '@mui/material';

export default function QuestionSlider(props) {
    const [open, setOpen] = useState(props.open);
    const [bar, setBar] = useState(100 / sliderQuestions.length);
    const [currentSlide, SetCurrentSlide] = useState(0);

    const sliderRef = useRef();

    let length;
    useEffect(() => {
        setOpen(props.open);
        length = 100 / sliderQuestions.length
        setBar(length)
    }, [props.open]);

    const handleNext = () => {
        SetCurrentSlide((prevState) => prevState += 1)
        if (currentSlide < sliderQuestions.length) {
            let barLength = 100 / sliderQuestions.length
            if (barLength)
                setBar((prevState) => prevState += barLength)
            sliderRef.current?.slickNext()
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

    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
    };

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
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
        <div>
            {/* <Button
                content="Open Question's Slider"
                onClick={() => setOpen(true)}
            /> */}
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
                                            <Input fluid placeholder='choose number' type="number" /> :
                                            <Dropdown
                                                placeholder='Select options'
                                                fluid
                                                selection
                                                options={slide.options}
                                            />
                                        }
                                    </div>
                                </div>
                            )}
                        </Slider>
                        <div>
                            <Button
                                color='#fff'
                                inverted
                                onClick={handlePrev}
                                floated='left'
                                size="big"
                                content="Previous"
                                disabled={currentSlide === 0}
                            />
                            <Button
                                color='#fff'
                                inverted
                                onClick={handleNext}
                                floated='right'
                                size="big"
                                content="Submit"
                                disabled={currentSlide != sliderQuestions.length - 1}
                            />
                        </div>
                    </div>
                </Box>
            </Modal>
        </div >
    )
}
