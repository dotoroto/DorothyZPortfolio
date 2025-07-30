import React, { useState, useEffect } from "react";
import "./ScrollingForest.css"
import forest from "../../Assets/forest.jpg"

const ScrollingForest = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 500; // max scroll to zoom in fully
      // calculate scale between 1 and 1.5 (adjust as needed)
      const newScale = 1 + Math.min(scrollTop / maxScroll * 0.5, 0.5);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        height: "150vh", // enough height to scroll
        backgroundImage: {forest},
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      }}
    >
      {/* Your content here */}
      <h1 style={{ color: "white", padding: "2rem" }}>Scroll to zoom background</h1>
    </div>
  );
};

export default ScrollingForest;
