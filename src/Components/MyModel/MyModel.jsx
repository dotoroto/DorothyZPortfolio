import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const STEPS_PER_SECTION = 1;

const Model = ({ scrollProgress }) => {
  const modelRef = useRef();
  const { scene } = useGLTF("/a_minecraft_village/scene.gltf");
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  useFrame(() => {
    if (isMobile) {
      return;
    }

    const progress = Math.min(Math.max(scrollProgress.get(), 0), 1);
    const stepPhase = (progress * 4 * STEPS_PER_SECTION) % 1;
    const stepBob = Math.sin(stepPhase * Math.PI) * 0.14;

    camera.position.z = 3 - progress * 10;
    camera.position.y = stepBob;
    camera.rotation.y = -(mouse.current.x - window.innerWidth / 2) * 0.0005;
    camera.rotation.x =
      -0.1 - (mouse.current.y - window.innerHeight / 2) * 0.0003 - stepBob * 0.12;
    camera.updateProjectionMatrix();
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      rotation={[0, 0, 0]}
      scale={[1, 1, 1]}
      position={[2.25, -3.3, 0]}
    />
  );
};

export default Model;
