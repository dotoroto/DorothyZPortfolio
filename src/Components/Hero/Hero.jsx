import React from "react";
import "./Hero.css"
import pixelHeadshot from "../../Assets/pixelHeadshot.jpg"
import emailLogo from "../../Assets/emailLogo.jpg"
import resumeLogo from "../../Assets/resumeLogo.jpg"
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    return(
        <div className="hero">
            <img src={pixelHeadshot} alt="Dorothy Zheng"/>
            <h1>Dorothy Zheng</h1>
            <div className="about">
                <p>1st Year CS @ UofT</p>
                <p>Uhh i do stuff!! hahaha</p>
            </div>
            <div className="heroButtons">
                <div className="LIButton">in</div>
                <div className="emailButton">
                    <img src={emailLogo} alt="email"/>
                </div>
                <div className="resumeButton">
                    <img src={resumeLogo} alt="resume"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;
