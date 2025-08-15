import React, { useEffect, useState } from "react";
import "./Projects.css"
import prjimg from "../../Assets/pixelHeadshot.jpg"

const Projects = ({scroll}) => {


    return(

        <div className="page">
            <h1>PROJECTS</h1>
            <div className="arrow" id="left"/>
            <div className="project">
                <div className="projectImg">
                    <img src={prjimg} alt="Project Image"/>
                </div>
                <div className="description">
                    <h2>Bionic Arm</h2>
                    <p>yap yap yap <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>aaa</p>
                </div>
            </div>
            <div className="arrow" id="right"/>
        </div>
    )
}

export default Projects;
