import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import lantern from "../../Assets/lantern.png"
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({x:0, y:0});
  const [tilt, setTilt] = useState(0);
  const lastPosition = useRef({x:0, y:0});

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const angle = (clientX - lastPosition.current.x); //based on velocity

      setPosition({x:clientX, y:clientY });
      setTilt(angle);
      lastPosition.current = {x:clientX, y:clientY};
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: position.x - 25,
        y: position.y - 25,
        rotateZ: tilt,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 100,
      }}>
      <img src={lantern} alt="Lantern Cursor" className="cursor-image"/>
    </motion.div>
  );
};

export default CustomCursor;