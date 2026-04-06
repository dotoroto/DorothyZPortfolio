import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Experiences.css";
import SectionCarousel from "../SectionCarousel/SectionCarousel";
import { experiences } from "../../data/portfolioData";
import useMouseParallax from "../../hooks/useMouseParallax";

const Experiences = () => {
  const { parallaxProps } = useMouseParallax({
    rotateX: 4.5,
    rotateY: 4.5,
    scale: 1.005,
    zoom: 0.015,
  });
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPointer({
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <SectionCarousel
      title="EXPERIENCES"
      items={experiences}
      contentClassName="experiencesScene"
      parallaxProps={parallaxProps}
      getItemLabel={(experience) => experience.organization}
      renderItem={(experience, currentIndex) => (
        <div className="experiencesSceneInner">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${experience.organization}-posters-${currentIndex}`}
              className="experiencePosterLayer"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {experience.posters.map((poster, posterIndex) => (
                <motion.div
                  key={`${experience.organization}-${posterIndex}`}
                  className="experiencePoster"
                  variants={{
                    hidden: {
                      y: "-38vh",
                      opacity: 0,
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.65,
                        delay: poster.delay,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                    exit: {
                      y: "-42vh",
                      opacity: 0,
                      transition: {
                        duration: 0.45,
                        delay: posterIndex * 0.03,
                        ease: [0.55, 0, 1, 0.45],
                      },
                    },
                  }}
                  style={{
                    top: poster.top,
                    left: poster.left,
                    right: poster.right,
                    width: poster.width,
                  }}
                >
                  <div className="posterString" />
                  <div
                    className="experiencePosterBody"
                    style={{
                      transform: `
                        perspective(1000px)
                        rotateY(${pointer.x * poster.depth * 3.4}deg)
                      `,
                    }}
                  >
                    <div className="experiencePosterFrame">
                      <img src={poster.image} alt={poster.alt} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="experiences">
            <div className="experiencesInner">
              <h2>{experience.organization}</h2>
              {experience.description ? <p>{experience.description}</p> : null}

              {experience.roles.map((role) => (
                <div className="role" key={`${experience.organization}-${role.title}`}>
                  <p className="roleTitle">{role.title}</p>
                  <p className="roleDate">{role.date}</p>
                  {role.points.length > 0 ? (
                    <ul>
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Experiences;
