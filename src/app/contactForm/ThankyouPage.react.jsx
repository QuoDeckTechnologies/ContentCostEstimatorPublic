import React from 'react';
import ThankyouImg from '../../assets/page-title.jpg';
import logo from "../../assets/logo1.png";

export default function ThankyouPage() {

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
        padding: '0em 4em',
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

    return (
        <div style={imgDivStyle}>
            <div style={divStyle}>
                <div>
                    <img src={logo} alt="QuoDeck Logo" width="350rem" />
                </div>
                <br />
                <div style={textStyle}>
                    Thank you for requesting the Quote download.
                </div>
            </div>
        </div>
    )
}
