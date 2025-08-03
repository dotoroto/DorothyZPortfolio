import React, { useState, useEffect } from "react";
import './App.css'
import Hero from "./Components/Hero/Hero.jsx"
import CustomCursor from './Components/CustomCursor/CustomCursor.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Model from "./Components//MyModel/MyModel.jsx";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const App = () => {

  
  return (
    <div>
      <div className="background"/>

      <Canvas
        style={{ position: "absolute", zIndex:-1}}
        camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>

      <CustomCursor/>
      <Hero/>
      <Projects/>
    </div>
  )
}

export default App
