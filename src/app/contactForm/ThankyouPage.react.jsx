import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, styled } from "@mui/material";
import ThankyouImg from '../../assets/page-title.jpg';
import logo from "../../assets/logo1.png";

export default function ThankyouPage() {

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

    let imgDivStyle = {
        backgroundImage: `url(${ThankyouImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
    };

    let divStyle = {
        background: "#000",
        opacity: '0.75',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: "0em 4em",
    };

    let textStyle = {
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: '600',
        // fontFamily:'oswald',
        letterSpacing: '1px',
        lineHeight: '1',
        color: '#fff',
    };

    const StyledButton = styled(Button)`
    background-color:transparent;
    border: 1px solid #fff;
    font-family:'Roboto', 'sans-serif';
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
    &.MuiButton-root{
        color: #fff;
    }
    &.MuiButton-root.Mui-disabled{
        color: #fff;
    }`;

    let navigate = useNavigate();

    const goBack = () => {
        navigate("/")
    };

    return (
        <div style={imgDivStyle}>
            <div style={divStyle}>
                <div>
                    <img src={logo} alt="QuoDeck Logo" width="300rem" />
                </div>
                {/* <div>
                    <img style={{ borderRadius: '50%' }} src={"https://media.tenor.com/qoIGqkJ345gAAAAC/tick.gif"} alt="QuoDeck Logo" width="100rem" />
                </div> */}
                <br />
                <div style={textStyle}>
                    Thank you for requesting the Quote download.
                </div>

                <div
                    style={{
                        width: screenDimensions.width <= 420 ? "100%" : "70%",
                        display: 'flex',
                        justifyContent: screenDimensions.width <= 420 ? 'space-between' : 'center',
                        marginTop: "5rem"
                    }}
                >
                    <StyledButton
                        sx={{ fontSize: screenDimensions.width <= 420 ? "1em" : "1.3em", width: screenDimensions.width <= 420 ? "40%" : "20%" }}
                        onClick={goBack}
                    >
                        Go Back
                    </StyledButton>
                    <StyledButton
                        sx={{ fontSize: screenDimensions.width <= 420 ? "1em" : "1.3em", width: screenDimensions.width <= 420 ? "40%" : "20%", marginLeft: "1em" }}
                        href="https://www.quodeck.com/welcome/"
                    >
                        Know More
                    </StyledButton>
                </div>
            </div>
        </div>
    )
}
