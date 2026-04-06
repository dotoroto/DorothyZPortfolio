import "./Projects.css";
import SectionCarousel from "../SectionCarousel/SectionCarousel";
import { projects } from "../../data/portfolioData";
import useMouseParallax from "../../hooks/useMouseParallax";

const Projects = () => {
  const { parallaxProps } = useMouseParallax({
    rotateX: 4.5,
    rotateY: 4.5,
    scale: 1.004,
    zoom: 0.014,
  });

  return (
    <SectionCarousel
      title="PROJECTS"
      items={projects}
      contentClassName="project"
      parallaxProps={parallaxProps}
      getItemLabel={(project) => project.labelTitle ?? project.title}
      renderItem={(project) => (
        <div className="projectInner">
          <div className="projectImg">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="description">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      )}
    />
  );
};

export default Projects;
