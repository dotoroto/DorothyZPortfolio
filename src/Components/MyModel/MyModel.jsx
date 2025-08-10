import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const Model = ({ scrollProgress }) => {
  const modelRef = useRef();
  const { scene } = useGLTF("/models/forest.glb");
  const { camera } = useThree();

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    const progress = scrollProgress.get();
    camera.position.z = 5 - progress * 4;
    camera.updateProjectionMatrix();

    modelRef.current.rotation.y = (mouse.current.x - window.innerWidth / 2) * 0.0005;
    modelRef.current.rotation.x = (mouse.current.y - window.innerHeight / 2) * 0.0005;
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      rotation={[0, 0, 0]}
      scale={[1, 1, 1]}
      position={[0, -2, 0]}
    />
  );
};

export default Model;
