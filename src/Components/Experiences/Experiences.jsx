import React, { useEffect, useState } from "react";
import "./Experiences.css"
import arrow from "../../Assets/downArrow.png";
import armImg from "../../Assets/armImg.jpg";
import musixImg from "../../Assets/musixImg.png";
import rhythmImg from "../../Assets/octaveImg.png";
import asteroidsImg from "../../Assets/asteroidsImg.png";
import paintImg from "../../Assets/pixelHeadshot.jpg";

const Experiences = ({scroll}) => {

    const experiences = [
        {
            organization:"Awards",
            description: "",
            roles: [
            {
                title: "University of Toronto Arbor & C. David Naylor Scholar",
                date: "May 2025",
                points: ["Selected as a National Scholarship finalist through demonstrating superior academic performance, original and creative thought, and exceptional achievement. Awarded on the basis of academic merit and demonstrated leadership excellence. Value of $24,500 over four years."]
            },
            {
                title: "Don Walker Scholarship Recipient",
                date: "August 2025",
                points: ["Awarded by Magna International Inc. Selected as one of 80 recipients globally by the DWSP Committee based on academic performance, extra-curricular involvement and achievements, as well as contributions to the community. Value of up to $12,000 over four years"] 
            },
            {
                title: "Shawn Boxe Memorial Scholarship Recipient",
                date: "May 2025",
                points: ["Awarded by the Windsor Essex Community Foundation in honour of Shawn Boxe. Selected as a scholarship recipient through demonstrating high academic achievement and school community involvement. Value of $600"]
            },
            {
                title: "Center for Education in Mathematics & Computing (CEMC) Awards",
                date:"Various",
                points: [
                    "Canadian Computing Competition (CCC) Sr. '24 Top 5%",
                    "Hypatia '24 Top 4%",
                    "CCC Jr. '23 National First Place & Full Score",
                    "Canadian Intermediate Math Competition ’23 Top 1%",
                    "Galois ‘23 Top 1%"
                ]
            }
            ],
            images: []
        },
        {
            organization: "MasseyHacks",
            description: "Canada's Oldest High School Hackathon",
            roles: [
            {
                title: "Co-Director",
                date: "June 2024 - June 2025",
                points: ["Directed a 15-member team to host a 48-hour event for 160+ participants.",
                    "Secured and managed $10,000 in sponsorship funding to support event operations and technology.",
                    "Expanded accessibility by lowering the age requirement, enabling younger students to engage with STEM opportunities.",
                    "Partnered with Major League Hacking as the only non-overnight hackathon"
                ]
            },
            {
                title: "Operations Organizer",
                date: "June 2022 - June 2024",
                points: ["Collaborated with team of three to manage organizational operations of the event.",
                    "Managed hacker activities, and secured partnership with outside organizations.",
                    "Reintroduced handmade pancake breakfasts to maximize hacker experience."
                ]
            }
            ],
            images: []
        },
        {
            organization: "CodeReach",
            description: "Free coding tutoring program hosted for students in the Greater Essex County region",
            roles: [
                {
                    title: "Director",
                    date: "September 2024 - June 2025",
                    points: ["Led a 10-member team to deliver free weekly coding lessons for 100+ students.",
                        "Spearheaded developement of new curriculum better tailored for younger students.",
                        "Partnered with the Greater Essex County District School Board to expand outreach."
                    ]
                },
                {
                    title: "Operations Organizer & Mentor",
                    date: "September 2022 - September 2024",
                    points: ["Worked behind the scenes to ensure smooth flow of operations, managing attendance and student safety",
                        "Mentored classrooms of 60+ students in web development",
                    ]
                }
            ],
            images: []
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? experiences.length - 1 : prevIndex - 1);
    };

    return(

        <div className="page">
            <h1>EXPERIENCES</h1>
            <div className="container">
                <div className="arrow" onClick={handlePrev}>
                    <img src={arrow} id="left"/>
                </div>
               
                <div className="experiences">
                    <h2>{experiences[currentIndex].organization}</h2>
                    <p>{experiences[currentIndex].description}</p>

                    {experiences[currentIndex].roles.map((role, i) => (
                        <div className="role" key={i}>
                            <p style={{ paddingTop: "1vh" }}>{role.title}</p>
                            <p style={{ color: "rgba(97, 97, 97, 1)" }}>{role.date}</p>
                            {role.points?.length > 0 && (
                                <ul>
                                {role.points.map((pt, j) => (
                                    <li key={j}>{pt}</li>))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <div className="arrow" onClick={handleNext}>
                    <img src={arrow} id="right"/>
                </div>
            </div>
        </div>
    )
}

export default Experiences;
