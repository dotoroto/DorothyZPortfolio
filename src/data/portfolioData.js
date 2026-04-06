import armImg from "../Assets/armImg.jpg";
import aslLogo from "../Assets/ASLingo.png";
import asteroidsImg from "../Assets/asteroidsImg.png";
import emailLogo from "../Assets/emailLogo.jpg";
import forestImg from "../Assets/forest.jpg";
import githubLogo from "../Assets/githubLogo.png";
import headshot from "../Assets/headshot.jpg";
import musixImg from "../Assets/musixImg.png";
import octaveImg from "../Assets/octaveImg.png";
import paintImg from "../Assets/paintImg.png";
import pixelHeadshot from "../Assets/pixelHeadshot.jpg";
import resumeLogo from "../Assets/resumeLogo.jpg";
import myFarmImg from "../Assets/myFarm.png";
import simplyAuthImg from "../Assets/simplyAuth.png";
import MHTeam from "../Assets/MHTeam.png";
import MH2 from "../Assets/MH2.png";
import MH3 from "../Assets/MH3.png";
import CR1 from "../Assets/CR1.png";
import CR2 from "../Assets/CR2.png";
import CR3 from "../Assets/CR3.png";
import HT61 from "../Assets/HT61.jpg";
import HT62 from "../Assets/HT62.jpg";
import HT63 from "../Assets/HT63.png";

export const heroContent = {
  name: "Dorothy Zheng",
  image: headshot,
  about: ["CS @ UToronto", "National Scholarship Finalist"],
  links: [
    {
      label: "LinkedIn",
      type: "text",
      text: "in",
      href: "https://www.linkedin.com/in/dorothy-zheng07/",
      className: "LIButton",
    },
    {
      label: "GitHub",
      type: "icon",
      icon: githubLogo,
      href: "https://github.com/dotoroto",
      className: "githubButton",
    },
    {
      label: "Email",
      type: "icon",
      icon: emailLogo,
      href: "mailto:dorothy.zheng07@gmail.com",
      className: "emailButton",
    },
    {
      label: "Resume",
      type: "icon",
      icon: resumeLogo,
      href: "/DorothyZResume.pdf",
      className: "resumeButton",
    },
  ],
};

export const projects = [
  {
    title: "Bionic Arm",
    labelTitle: "Bionic Arm",
    description:
      "Programmed and engineered a novel prosthetic bionic arm utilizing surface electromyography (sEMG) controls. Primary contributions include programming and developing a custom signal processing algorithm to filter noise from sEMGs. Won Gold, Sanofi Biogenius Canada Award, Best Engineering Award, Persuasive Scientific Writing Award, Innovation Award, and a University of Ottawa $2000 Entrance Scholarship.",
    image: armImg,
  },
  {
    title: "SimplyAuthentic",
    labelTitle: "SimplyAuth",
    description:
      "UofTHacks 2026. Developed a Next.js and TypeScript frontend styled with TailwindCSS and a FastAPI backend deployed on Vercel and Railway. Integrated TwelveLabs video and AI audio analysis for proctored interviews, then designed a behavioral inference pipeline using a Backboard.io GPT model with historical context to classify applicants and surface strengths, weaknesses, and role fit.",
    image: simplyAuthImg,
  },
  {
    title: "ASLingo - The Smart Learning Platform",
    labelTitle: "ASLingo",
    description:
      "Co-developed ASLingo, an AI-powered web platform that teaches American Sign Language (ASL) through real-time gesture feedback and interactive lessons. Built a React frontend integrated with Auth0 authentication and a Node/Express backend, connected to MongoDB for user data and progress tracking. Trained a custom PyTorch sequence model using MediaPipe and OpenCV to classify ASL gestures and generate human-readable coaching tips.",
    image: aslLogo,
  },
  {
    title: "myFarm",
    labelTitle: "myFarm",
    description:
      "NASA Space Apps Challenge 2024 Global Nominee. Built a full-stack web platform using Flask, JavaScript, and Leaflet.js to visualize global soil data, plus a location-based discussion map to foster global collaboration. Built and integrated a soil-sensing farming rover with an ESP32 microcontroller to identify optimal planting zones and autonomously plant based on real-time and satellite data. Added a Unity-based rover simulation to train hardware usage and reduce adoption barriers.",
    image: myFarmImg,
  },
  {
    title: "Musix",
    labelTitle: "Musix",
    description:
      "A Java Swing application that translates .musicxml files into playable files. It allows musicians to download and practice pieces for free from various sources.",
    image: musixImg,
  },
  {
    title: "Octave: A Rhythm Game",
    labelTitle: "Octave",
    description:
      "An Osu Mania-inspired rhythm game that turns Osu files into a falling-blocks rhythm game where the player taps on beat. Created using Pygame.",
    image: octaveImg,
  },
];

export const awards = [
  {
    title: "University of Toronto Arbor & C. David Naylor Scholar",
    date: "May 2025",
    detail:
      "Selected as a National Scholarship finalist through superior academic performance, original and creative thought, and exceptional achievement. Awarded on the basis of academic merit and demonstrated leadership excellence. Value of $24,500 over four years.",
  },
  {
    title: "Don Walker Scholarship Recipient",
    date: "August 2025",
    detail:
      "Awarded by Magna International Inc. Selected as one of 80 recipients globally by the DWSP Committee based on academic performance, extra-curricular involvement and achievements, as well as contributions to the community. Value of up to $12,000 over four years.",
  },
  {
    title: "Shawn Boxe Memorial Scholarship Recipient",
    date: "May 2025",
    detail:
      "Awarded by the Windsor Essex Community Foundation in honour of Shawn Boxe for high academic achievement and school community involvement. Value of $600.",
  },
  {
    title: "CEMC Distinctions",
    date: "Various",
    detail:
      "Canadian Computing Competition (CCC) Sr. '24 Top 5%, Hypatia '24 Top 4%, CCC Jr. '23 National First Place & Full Score, Canadian Intermediate Math Competition '23 Top 1%, Galois '23 Top 1%.",
  },
];

export const techStack = [
  { name: "Python", short: "Py", accent: "gold" },
  { name: "C++", short: "C+", accent: "iron" },
  { name: "HTML/CSS", short: "H5", accent: "redstone" },
  { name: "JavaScript", short: "JS", accent: "gold" },
  { name: "TypeScript", short: "TS", accent: "diamond" },
  { name: "Swift", short: "Sw", accent: "iron" },
  { name: "Java", short: "Jv", accent: "redstone" },
  { name: "R", short: "R", accent: "lapis" },
  { name: "Ruby", short: "Rb", accent: "redstone" },
  { name: "React.js", short: "Re", accent: "diamond" },
  { name: "MongoDB", short: "Mg", accent: "emerald" },
  { name: "PyTorch", short: "PT", accent: "gold" },
  { name: "Three.js", short: "3D", accent: "diamond" },
  { name: "MicroPython", short: "uPy", accent: "gold" },
  { name: "Git", short: "Git", accent: "iron" },
  { name: "PyGame", short: "PG", accent: "emerald" },
];

export const experiences = [
  {
    organization: "Brunel Momentum",
    description: "Remote",
    posters: [
    ],
    roles: [
      {
        title: "Software Engineering Intern",
        date: "Mar 2026 - Present",
        points: [
          "Developing a customer-facing package tracking platform for an AI-driven middle-mile logistics startup, enabling real-time visibility into shipment status.",
          "Building full-stack features, including a responsive frontend interface and backend to support tracking workflows.",
          "Designing and implementing RESTful APIs and endpoints for customer and package data, ensuring efficient data retrieval and system integration, validated with Postman and unit testing.",
        ],
      },
    ],
  },
  {
    organization: "MasseyHacks",
    description: "Canada's oldest high school hackathon.",
    posters: [
      {
        image: MHTeam,
        alt: "MasseyHacks Team Photo",
        top: "10vh",
        right: "17vw",
        width: "10vw",
        depth: 30,
        delay: 0,
      },
      {
        image: MH2,
        alt: "MasseyHacks Photo",
        top: "24vh",
        left: "15vw",
        width: "8.5vw",
        depth: 17,
        delay: 0.08,
      },
      {
        image: MH3,
        alt: "MasseyHacks Photo",
        top: "37vh",
        right: "12vw",
        width: "7.5vw",
        depth: 13,
        delay: 0.16,
      },
    ],
    roles: [
      {
        title: "Co-Director",
        date: "June 2024 - June 2025",
        points: [
          "Directed a 15-member team to host a 48-hour event for 160+ participants.",
          "Secured and managed $10,000 in sponsorship funding to support event operations and technology.",
          "Expanded accessibility by lowering the age requirement, enabling younger students to engage with STEM opportunities.",
          "Partnered with Major League Hacking as the only non-overnight hackathon.",
        ],
      },
      {
        title: "Operations Organizer",
        date: "June 2022 - June 2024",
        points: [
          "Collaborated with a team of three to manage organizational operations for the event.",
          "Managed hacker activities and secured partnerships with outside organizations.",
          "Reintroduced handmade pancake breakfasts to maximize the hacker experience.",
        ],
      },
    ],
  },
  {
    organization: "CodeReach",
    description: "Windsor, ON",
    posters: [
      {
        image: CR1,
        alt: "CodeReach Photo",
        top: "12vh",
        left: "18vw",
        width: "11vw",
        depth: 32,
        delay: 0,
      },
      {
        image: CR2,
        alt: "CodeReach Photo",
        top: "18vh",
        right: "18vw",
        width: "8vw",
        depth: 16,
        delay: 0.08,
      },
      {
        image: CR3,
        alt: "CodeReach Photo",
        top: "35vh",
        left: "14vw",
        width: "9vw",
        depth: 22,
        delay: 0.14,
      },
    ],
    roles: [
      {
        title: "Director",
        date: "September 2024 - June 2025",
        points: [
          "Led a 10-member team to deliver free weekly coding lessons for 100+ students.",
          "Spearheaded development of new curriculum better tailored for younger students.",
          "Partnered with the Greater Essex County District School Board to expand outreach.",
        ],
      },
      {
        title: "Operations Organizer & Mentor",
        date: "September 2022 - September 2024",
        points: [
          "Worked behind the scenes to ensure smooth flow of operations, managing attendance and student safety.",
          "Mentored classrooms of 60+ students in web development.",
        ],
      },
    ],
  },
  {
    organization: "Hack the 6ix",
    description: "Toronto, ON",
    posters: [
      {
        image: HT61,
        alt: "Hack the 6ix poster",
        top: "12vh",
        left: "17vw",
        width: "9vw",
        depth: 24,
        delay: 0,
      },
      {
        image: HT62,
        alt: "Hack the 6ix poster",
        top: "15vh",
        right: "16vw",
        width: "11vw",
        depth: 34,
        delay: 0.1,
      },
      {
        image: HT63,
        alt: "Hack the 6ix poster",
        top: "36vh",
        right: "20vw",
        width: "8vw",
        depth: 15,
        delay: 0.18,
      },
    ],
    roles: [
      {
        title: "Director of Relationships",
        date: "Aug 2025 - Present",
        points: [
          "Formerly Relationships Executive",
          "Leading external partnerships and driving community engagement for one of Canada's largest hackathons.",
          "Built and maintained strategic partnerships with leading student hackathons across Ontario, representing Hack the 6ix and engaging with diverse tech communities.",
        ],
      },
    ],
  },
];
