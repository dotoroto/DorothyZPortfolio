import React, { useEffect, useState } from "react";
import "./Hero.css"
import pixelHeadshot from "../../Assets/pixelHeadshot.jpg"

const Hero = ({scroll}) => {


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
                <div className="emailButton"/>
                <div className="resumeButton"/>
            </div>
            <div className="downArrow"/>
        </div>
    )
}

export default Hero;
