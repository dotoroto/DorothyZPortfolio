import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import lantern from "../../Assets/lantern.png"
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const swingRef = useRef({ angle: 0, velocity: 0 });
  const lastFrameTimeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseRef.current = { x: clientX, y: clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let frameId;

    const animate = (timestamp) => {
      const target = mouseRef.current;
      const cursor = cursorRef.current;
      const lastMouse = lastMouseRef.current;
      const swing = swingRef.current;
      const lastFrameTime = lastFrameTimeRef.current ?? timestamp;
      const deltaTime = Math.max((timestamp - lastFrameTime) / 16.67, 0.6);

      cursor.x += (target.x - cursor.x) * 0.18;
      cursor.y += (target.y - cursor.y) * 0.18;

      const deltaX = target.x - lastMouse.x;
      const horizontalSpeed = deltaX / deltaTime;
      const speedMagnitude = Math.min(Math.abs(horizontalSpeed), 80);
      const swingImpulse =
        Math.sign(horizontalSpeed) *
        Math.pow(speedMagnitude / 18, 1.28) *
        0.72;

      swing.velocity += swingImpulse;
      swing.velocity += -swing.angle * 0.046;
      swing.velocity *= 0.91;
      swing.angle += swing.velocity;
      swing.angle = Math.max(Math.min(swing.angle, 50), -50);

      setPosition({ x: cursor.x, y: cursor.y });
      setTilt(swing.angle);

      lastMouseRef.current = { ...target };
      lastFrameTimeRef.current = timestamp;
      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: position.x - 18,
        y: position.y - 8,
        rotate: tilt,
      }}>
      <img src={lantern} alt="Lantern Cursor" className="cursor-image"/>
    </motion.div>
  );
};

export default CustomCursor;
