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
                <p>Please Hire Me</p>
            </div>
            <div className="heroButtons">
                <div className="LIButton" onClick={() => window.open("https://www.linkedin.com/in/dorothy-zheng07/", "_blank")} >in</div>
                <div className="emailButton"  onClick={() => window.location.href = "mailto:dorothy.zheng07@gmail.com"} />
                <div className="resumeButton" onClick={() => window.open("/DorothyZResume.pdf", "_blank")} />
            </div>
        </div>
    )
}

export default Hero;
