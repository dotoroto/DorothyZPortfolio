import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("/models/forest.glb"); // Adjust path to your .glb file

  const mouse = useRef({ x: 0, y: 0 });

  // Mouse listener for updating reference values
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.position.z = -8 + mouse.current.x / 100;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      rotation={[0,0,0]}
      scale={[1, 1, 1]}
      position={[0, -2, 0]}
    />
  );
};

export default Model;
