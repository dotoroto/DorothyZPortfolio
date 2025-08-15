import React, { Suspense } from "react";
import './App.css';
import Hero from "./Components/Hero/Hero.jsx";
import CustomCursor from './Components/CustomCursor/CustomCursor.jsx';
import Projects from './Components/Projects/Projects.jsx';
import MyModel from "./Components/MyModel/MyModel.jsx";
import LightSource from "./Components/MyModel/LightSource.jsx";
import { Canvas } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "framer-motion";
import { AmbientLight } from "three";

export default function App() {
  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const projectsScale = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0.5, 1, 2]);
  const projectsOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 0]);

  return (
    <div style={{ height: "500vh", position: "relative" }}>
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
    </div>
  );
}
