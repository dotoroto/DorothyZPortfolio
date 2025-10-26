import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";


const Model = ({ scrollProgress }) => {
  const modelRef = useRef();
  const { scene } = useGLTF("/a_minecraft_village/scene.gltf");
  console.log(scene);
  const { camera } = useThree();

  const mouse = useRef({ x: 0, y: 0 });
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) { return }
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (isMobile) { return }
    const progress = Math.min(Math.max(scrollProgress.get(), 0), 1);;
    camera.position.z = 3 - progress * 10;
    camera.rotation.y = -(mouse.current.x - window.innerWidth / 2) * 0.0005;
    camera.rotation.x = -0.1-(mouse.current.y - window.innerHeight / 2) * 0.0003;
    camera.updateProjectionMatrix();

    //modelRef.current.rotation.y = (mouse.current.x - window.innerWidth / 2) * 0.0001;
    //modelRef.current.rotation.x = (mouse.current.y - window.innerWidth / 2) * 0.0001;
  });

  return (
    <>
    <primitive
      ref={modelRef}
      object={scene}
      rotation={[0, 0, 0]}
      scale={[1, 1, 1]}
      position={[2.25, -3.3, 0]}
    />
    </>
  );
};

export default Model;
