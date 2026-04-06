import { useEffect, useMemo, useState } from "react";

const defaultOptions = {
  rotateX: 10,
  rotateY: 10,
  scale: 1.01,
  zoom: 0.025,
};

const resetStyle = {
  transform:
    "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
  transition: "transform 220ms ease-out",
  willChange: "transform",
};

const mobileStyle = {
  transform: "none",
  transition: "transform 180ms ease-out",
};

export default function useMouseParallax(options = {}) {
  const config = useMemo(() => ({ ...defaultOptions, ...options }), [options]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const [style, setStyle] = useState(isMobile ? mobileStyle : resetStyle);

  useEffect(() => {
    if (isMobile) {
      setStyle(mobileStyle);
      return undefined;
    }

    const handleMouseMove = (event) => {
      const offsetX = event.clientX / window.innerWidth - 0.5;
      const offsetY = event.clientY / window.innerHeight - 0.5;
      const distanceFromCenter = Math.hypot(offsetX, offsetY);

      const rotateY = offsetX * config.rotateY * 2;
      const rotateX = offsetY * config.rotateX * -2;
      const scale = config.scale + (0.5 - distanceFromCenter) * config.zoom;

      setStyle({
        transform: `
          perspective(1200px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(${scale})
        `,
        transition: "transform 60ms linear",
        willChange: "transform",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [config, isMobile]);

  return {
    parallaxProps: {
      style,
    },
  };
}
