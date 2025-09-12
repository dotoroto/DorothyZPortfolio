import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const LightSource = ({scrollProgress}) => {
  const mouse = useRef({ x: 0, y: 0 });
  const ref = useRef()

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    ref.current.position.x = (mouse.current.x - window.innerWidth / 2)*0.005;
    ref.current.position.y = (mouse.current.y - window.innerHeight / 2)*0.003;
    ref.current.position.z = 5-scrollProgress.get() * 10;
  });

  return (
    <pointLight ref={ref} intensity={25} color="#efff42ff" distance={0}/>
  );
};

export default LightSource;
