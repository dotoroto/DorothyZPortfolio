import React, { useEffect, useState } from "react";
import "./Projects.css"
import arrow from "../../Assets/downArrow.png";
import armImg from "../../Assets/armImg.jpg";
import musixImg from "../../Assets/musixImg.png";
import rhythmImg from "../../Assets/octaveImg.png";
import asteroidsImg from "../../Assets/asteroidsImg.png";
import paintImg from "../../Assets/paintImg.png";

const Projects = ({scroll}) => {

    const projects = [
        {
            title: "Bionic Arm",
            description: "Programmed and engineered a novel prosthetic bionic arm utilizing surface electromyography (sEMG) controls. Primary contributions include programming & developing a custom signal processing algorithm to filter noise from sEMGs. Won Gold, Sanofi Biogenius Canada Award, Best Engineering Award, Persuasive Scientific Writing Award, Inovation Award, and a University of Ottawa $2000 Entrance Scholarship",
            image: armImg,
            link: ""
        },
        {
            title: "Musix",
            description: "A Java Swing application that translates .musicxml files into playable files. Allows musicians to download and practice pieces for free from various sources.",
            image: musixImg,
            link: ""
        },
        {
            title: "Octave: a Rhythm Game",
            description: "An Osu Mania inspired rhythm game. Turns any Osu file into a falling blocks rhythm game, where the player taps on beat. Created using Pygame.",
            image: rhythmImg,
            link: ""
        },
        {
            title: "Asteroids",
            description: "The classic Asteroids game, made with Java Swing",
            image: asteroidsImg,
            link: ""
        },
        {
            title: "Paint",
            description: "A program based off the classic MS Paint made using Pygame. Includes stamps, file uploading, vector undo/redo, and a flood-fill bucket tool.",
            image: paintImg,
            link: ""
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1);
    };

    return(

        <div className="page">
            <h1>PROJECTS</h1>
            <div className="container">
                <div className="arrow" onClick={handlePrev}>
                    <img src={arrow} id="left"/>
                </div>
                <div className="project">
                    <div className="projectImg">
                       <img src={projects[currentIndex].image} alt="Project Image"/>
                    </div>
                    <div className="description">
                      <h2>{projects[currentIndex].title}</h2>
                      <p>{projects[currentIndex].description}</p>
                   </div>
                </div>
                <div className="arrow" onClick={handleNext}>
                    <img src={arrow} id="right"/>
                </div>
            </div>
        </div>
    )
}

export default Projects;
