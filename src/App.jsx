import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "framer-motion";
import "./App.css";
import AwardsTech from "./Components/AwardsTech/AwardsTech.jsx";
import CustomCursor from "./Components/CustomCursor/CustomCursor.jsx";
import Experiences from "./Components/Experiences/Experiences.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import LightSource from "./Components/MyModel/LightSource.jsx";
import MyModel from "./Components/MyModel/MyModel.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import TechStack from "./Components/TechStack/TechStack.jsx";

const SECTION_CONFIG = [
  { id: "hero", label: "Hero", snapProgress: 0 },
  { id: "projects", label: "Projects", snapProgress: 0.16 },
  { id: "experiences", label: "Experiences", snapProgress: 0.36 },
  { id: "awards", label: "Awards", snapProgress: 0.58 },
  { id: "tech", label: "Tech", snapProgress: 0.78 },
];

const MOBILE_BREAKPOINT = 768;
const STEPS_PER_SECTION = 1;

const getActiveSection = (progress) => {
  if (progress < 0.15) {
    return "hero";
  }

  if (progress < 0.34) {
    return "projects";
  }

  if (progress < 0.54) {
    return "experiences";
  }

  if (progress < 0.74) {
    return "awards";
  }

  return "tech";
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState("hero");
  const [showNavLabels, setShowNavLabels] = useState(true);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false,
  );

  const heroScale = useTransform(scrollYProgress, [0, 0.13], [1, 2.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const heroPointerEvents = useTransform(scrollYProgress, (value) =>
    value < 0.15 ? "auto" : "none",
  );

  const projectsScale = useTransform(
    scrollYProgress,
    [0.09, 0.16, 0.26, 0.34],
    [0.68, 1, 1, 2.05],
  );
  const projectsOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.15, 0.28, 0.34],
    [0, 1, 1, 0],
  );
  const projectsPointerEvents = useTransform(scrollYProgress, (value) =>
    value >= 0.15 && value < 0.34 ? "auto" : "none",
  );

  const experiencesScale = useTransform(
    scrollYProgress,
    [0.28, 0.36, 0.46, 0.54],
    [0.7, 1, 1, 2],
  );
  const experiencesOpacity = useTransform(
    scrollYProgress,
    [0.26, 0.34, 0.48, 0.54],
    [0, 1, 1, 0],
  );
  const experiencesPointerEvents = useTransform(scrollYProgress, (value) =>
    value >= 0.34 && value < 0.54 ? "auto" : "none",
  );

  const awardsScale = useTransform(
    scrollYProgress,
    [0.48, 0.58, 0.68, 0.74],
    [0.72, 1, 1, 1.92],
  );
  const awardsOpacity = useTransform(
    scrollYProgress,
    [0.46, 0.56, 0.7, 0.74],
    [0, 1, 1, 0],
  );
  const awardsPointerEvents = useTransform(scrollYProgress, (value) =>
    value >= 0.54 && value < 0.74 ? "auto" : "none",
  );

  const techScale = useTransform(
    scrollYProgress,
    [0.68, 0.78, 0.9, 1],
    [0.74, 1, 1, 1.9],
  );
  const techOpacity = useTransform(
    scrollYProgress,
    [0.66, 0.76, 0.92, 1],
    [0, 1, 1, 1],
  );
  const techPointerEvents = useTransform(scrollYProgress, (value) =>
    value >= 0.74 ? "auto" : "none",
  );
  const stepBob = useTransform(scrollYProgress, (value) => {
    const clamped = Math.min(Math.max(value, 0), 0.9999);
    const phase =
      (clamped * (SECTION_CONFIG.length - 1) * STEPS_PER_SECTION) % 1;

    return -Math.sin(phase * Math.PI) * 22;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setActiveSection("hero");
      setShowNavLabels(false);
      return undefined;
    }

    const updateSectionState = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const nextSection = getActiveSection(progress);

      setActiveSection(nextSection);
      setShowNavLabels(nextSection === "hero");
    };

    let snapTimeout;
    let isSnapping = false;
    let wheelUnlockTimeout;

    const snapToNearestSection = () => {
      if (isSnapping) {
        return;
      }

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) {
        return;
      }

      const currentY = window.scrollY;
      const snapPoints = SECTION_CONFIG.map(
        (section) => section.snapProgress * maxScroll,
      );
      const nearestPoint = snapPoints.reduce((closest, point) =>
        Math.abs(point - currentY) < Math.abs(closest - currentY)
          ? point
          : closest,
      );

      if (Math.abs(nearestPoint - currentY) > window.innerHeight * 0.28) {
        return;
      }

      isSnapping = true;
      window.scrollTo({ top: nearestPoint, behavior: "smooth" });

      window.setTimeout(() => {
        isSnapping = false;
      }, 450);
    };

    const stepToSection = (direction) => {
      if (isSnapping || direction === 0) {
        return;
      }

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) {
        return;
      }

      const currentY = window.scrollY;
      const snapPoints = SECTION_CONFIG.map(
        (section) => section.snapProgress * maxScroll,
      );

      const currentIndex = snapPoints.reduce(
        (closestIndex, point, index) =>
          Math.abs(point - currentY) < Math.abs(snapPoints[closestIndex] - currentY)
            ? index
            : closestIndex,
        0,
      );

      const targetIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        snapPoints.length - 1,
      );

      if (targetIndex === currentIndex) {
        return;
      }

      isSnapping = true;
      window.scrollTo({
        top: snapPoints[targetIndex],
        behavior: "smooth",
      });

      window.clearTimeout(wheelUnlockTimeout);
      wheelUnlockTimeout = window.setTimeout(() => {
        isSnapping = false;
      }, 700);
    };

    const handleScroll = () => {
      updateSectionState();
      window.clearTimeout(snapTimeout);
      snapTimeout = window.setTimeout(snapToNearestSection, 140);
    };

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 12) {
        return;
      }

      event.preventDefault();
      stepToSection(event.deltaY > 0 ? 1 : -1);
    };

    const handleMouseMove = (event) => {
      if (activeSection === "hero") {
        setShowNavLabels(true);
        return;
      }

      setShowNavLabels(event.clientX <= 170);
    };

    updateSectionState();
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.clearTimeout(snapTimeout);
      window.clearTimeout(wheelUnlockTimeout);
    };
  }, [activeSection, isMobile]);

  const scrollToSection = (snapProgress) => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({
      top: snapProgress * maxScroll,
      behavior: "smooth",
    });
  };

  if (isMobile) {
    return (
      <div className="mobileShell">
        <p className="created">Dorothy Zheng 2026</p>
        <div className="background" />
        <main className="mobileStack">
          <section className="mobileSection mobileHeroSection">
            <Hero />
          </section>
          <section className="mobileSection">
            <Projects />
          </section>
          <section className="mobileSection">
            <Experiences />
          </section>
          <section className="mobileSection">
            <AwardsTech />
          </section>
          <section className="mobileSection">
            <TechStack />
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="appShell" style={{ height: "800vh" }}>
      <nav className="sideNav" aria-label="Section navigation">
        {SECTION_CONFIG.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              type="button"
              className="sideNavItem"
              onClick={() => scrollToSection(section.snapProgress)}
              aria-label={section.label}
              aria-current={isActive ? "page" : undefined}
            >
              <span className={`sideNavSquare ${isActive ? "active" : ""}`} />
              <span className={`sideNavLabel ${showNavLabels ? "visible" : ""}`}>
                {section.label}
              </span>
            </button>
          );
        })}
      </nav>

      <p className="created">Dorothy Zheng 2026</p>
      <div className="background" />
      <Canvas
        style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
        camera={{ position: [0, 0, 5] }}
      >
        <Suspense fallback={null}>
          <LightSource scrollProgress={scrollYProgress} />
          <MyModel scrollProgress={scrollYProgress} />
        </Suspense>
      </Canvas>

      <CustomCursor />

      <motion.section
        className="sectionLayer"
        style={{
          scale: heroScale,
          y: stepBob,
          opacity: heroOpacity,
          pointerEvents: heroPointerEvents,
          zIndex: 5,
        }}
      >
        <Hero />
      </motion.section>

      <motion.section
        id="projects"
        className="sectionLayer"
        style={{
          scale: projectsScale,
          y: stepBob,
          opacity: projectsOpacity,
          pointerEvents: projectsPointerEvents,
          zIndex: 4,
        }}
      >
        <Projects />
      </motion.section>

      <motion.section
        id="experiences"
        className="sectionLayer"
        style={{
          scale: experiencesScale,
          y: stepBob,
          opacity: experiencesOpacity,
          pointerEvents: experiencesPointerEvents,
          zIndex: 3,
        }}
      >
        <Experiences />
      </motion.section>

      <motion.section
        id="awards"
        className="sectionLayer"
        style={{
          scale: awardsScale,
          y: stepBob,
          opacity: awardsOpacity,
          pointerEvents: awardsPointerEvents,
          zIndex: 2,
        }}
      >
        <AwardsTech />
      </motion.section>

      <motion.section
        id="tech"
        className="sectionLayer"
        style={{
          scale: techScale,
          y: stepBob,
          opacity: techOpacity,
          pointerEvents: techPointerEvents,
          zIndex: 1,
        }}
      >
        <TechStack />
      </motion.section>
    </div>
  );
}
