import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const LightSource = ({ scrollProgress }) => {
  const mouse = useRef({ x: 0, y: 0 });
  const lightRef = useRef();
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
    if (isMobile || !lightRef.current) {
      return;
    }

    lightRef.current.position.x = (mouse.current.x - window.innerWidth / 2) * 0.005;
    lightRef.current.position.y = (mouse.current.y - window.innerHeight / 2) * 0.003;
    lightRef.current.position.z = 3.5 - scrollProgress.get() * 10;
  });

  return <pointLight ref={lightRef} intensity={25} color="#efff42ff" distance={0} />;
};

export default LightSource;
