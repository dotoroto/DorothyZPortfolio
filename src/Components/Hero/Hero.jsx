import React, { useEffect, useState } from "react";
import "./Hero.css"
import pixelHeadshot from "../../Assets/headshot.jpg"

const Hero = ({scroll}) => {


    return(

        <div className="hero">
            <img src={pixelHeadshot} alt="Dorothy Zheng"/>
            <h1>Dorothy Zheng</h1>
            <div className="about">
                <p>CS @ UToronto</p>
                <p>National Scholarship Finalist</p>
            </div>
            <div className="heroButtons">
                <div className="LIButton">in</div>
                <div className="emailButton"/>
                <div className="resumeButton"/>
            </div>
        </div>
    )
}

export default Hero;
