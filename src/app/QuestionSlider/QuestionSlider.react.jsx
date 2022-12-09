import React, { useState, useRef } from 'react'
import { Button, Modal, Dropdown, Progress } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function QuestionSlider() {
    const [open, setOpen] = useState(false);
    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Button
                content="Open Question's Slider"
                onClick={() => setOpen(true)}
            />
            <Modal
                // onClose={() => setOpen(false)}
                open={open}
                size="fullscreen"
                // basic
                dimmer='inverted'
            >
                <Modal.Header>
                    Please answer a few questions to help us give you a good estimate:
                </Modal.Header>
                <Modal.Content>
                    <div>
                        <Progress percent={100} size="tiny" indicating />
                        <Slider ref={sliderRef} {...settings}>
                            <div>
                                <h3>Which department is this content primarily for?
                                </h3>
                                <Dropdown
                                    placeholder='Select options'
                                    fluid
                                    selection
                                    options={[
                                        {
                                            text: 'Sales-Marketing ',
                                        },
                                        {
                                            text: 'Operations',
                                        },
                                        {
                                            text: 'Engineering',
                                        },
                                        {
                                            text: 'Finance',
                                        }
                                    ]}
                                />
                            </div>
                            <div>
                                <h3>What is the dominant audience type?
                                </h3>
                                <Dropdown
                                    placeholder='Select options'
                                    fluid
                                    selection
                                    options={[
                                        {
                                            text: 'Sales-Marketing ',
                                        },
                                        {
                                            text: 'Operations',
                                        },
                                        {
                                            text: 'Engineering',
                                        },
                                        {
                                            text: 'Finance',
                                        }
                                    ]}
                                />
                            </div>
                            <div>
                                <h3>What kind of content do you want to train on?
                                </h3>
                                <Dropdown
                                    placeholder='Select options'
                                    fluid
                                    selection
                                    options={[
                                        {
                                            text: 'Sales-Marketing ',
                                        },
                                        {
                                            text: 'Operations',
                                        },
                                        {
                                            text: 'Engineering',
                                        },
                                        {
                                            text: 'Finance',
                                        }
                                    ]}
                                />
                            </div>
                            <div>
                                <h3>How large is the budget for this project?
                                </h3>
                                <Dropdown
                                    placeholder='Select options'
                                    fluid
                                    selection
                                    options={[
                                        {
                                            text: 'Sales-Marketing ',
                                        },
                                        {
                                            text: 'Operations',
                                        },
                                        {
                                            text: 'Engineering',
                                        },
                                        {
                                            text: 'Finance',
                                        }
                                    ]}
                                />
                            </div>
                            <div>
                                <h3>How many days of classroom training do you need converted?
                                </h3>
                                <Dropdown
                                    placeholder='Select options'
                                    fluid
                                    selection
                                    options={[
                                        {
                                            text: 'Sales-Marketing ',
                                        },
                                        {
                                            text: 'Operations',
                                        },
                                        {
                                            text: 'Engineering',
                                        },
                                        {
                                            text: 'Finance',
                                        }
                                    ]}
                                />
                            </div>
                        </Slider>
                    </div>
                </Modal.Content>
                <Button.Group fluid>
                    <Button
                        floated='left'
                        secondary
                        size="medium"
                        content="Previous"
                        onClick={() => sliderRef.current?.slickPrev()}
                    />
                    <Button
                        floated='right'
                        // labelPosition='right'
                        // icon='checkmark'
                        primary
                        size="medium"
                        content="Next"
                        onClick={() => sliderRef.current?.slickNext()}
                    />
                </Button.Group>
            </Modal>
        </div >
    )
}
