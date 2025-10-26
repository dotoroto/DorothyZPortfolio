/*
To-Do
- Side bar
- Pictures for experiences
- More images for projects
- Minecraft themed assets
- Footer

*/ 

import React, { Suspense } from "react";
import './App.css';
import Hero from "./Components/Hero/Hero.jsx";
import CustomCursor from './Components/CustomCursor/CustomCursor.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Experiences from "./Components/Experiences/Experiences.jsx";
import MyModel from "./Components/MyModel/MyModel.jsx";
import LightSource from "./Components/MyModel/LightSource.jsx";
import { Canvas } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const projectsScale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25, 0.35], [0, 0, 1, 1, 3]);
  const projectsOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25, 0.35], [0, 0, 1, 1, 0]);

  const experiencesScale = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.45, 0.55], [0, 0, 1, 1, 3]);
  const experiencesOpacity = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.45, 0.55], [0, 0, 1, 1, 0]);

  return (
    <div style={{ height: "500vh", position: "relative" }}>
      <p className="created">Programmed by Dorothy Zheng</p>
      <div className="background" />
      <Canvas
        style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
        camera={{ position: [0, 0, 5] }}
      >
        <Suspense fallback={null}>
          <LightSource scrollProgress={scrollYProgress}/>
          <MyModel scrollProgress={scrollYProgress} />
        </Suspense>
      </Canvas>

      <CustomCursor />

      <motion.section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          scale: heroScale,
          opacity: heroOpacity,
          zIndex: 1,
        }}>
        <Hero />
      </motion.section>

      <motion.section id="projects"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          scale: projectsScale,
          opacity: projectsOpacity,
          zIndex: 1,
        }}>
        <Projects />
      </motion.section>

      <motion.section id="experiences"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          scale: experiencesScale,
          opacity: experiencesOpacity,
          zIndex: 1,
        }}>
        <Experiences />
      </motion.section>
    </div>
    
  );
}
