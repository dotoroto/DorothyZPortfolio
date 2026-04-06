import "./Hero.css";
import { heroContent } from "../../data/portfolioData";
import useMouseParallax from "../../hooks/useMouseParallax";

const Hero = () => {
  const { parallaxProps } = useMouseParallax({
    rotateX: 8,
    rotateY: 8,
    scale: 1.01,
    zoom: 0.03,
  });

  return (
    <div className="hero">
      <div className="heroCard" {...parallaxProps}>
        <img src={heroContent.image} alt={heroContent.name} />
        <h1>{heroContent.name}</h1>
        <div className="about">
          {heroContent.about.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="heroButtons">
          {heroContent.links.map((link) => (
            <button
              key={link.label}
              type="button"
              className={link.className}
              onClick={() => window.open(link.href, "_blank", "noopener,noreferrer")}
              aria-label={link.label}
              style={
                link.type === "icon"
                  ? { backgroundImage: `url(${link.icon})` }
                  : undefined
              }
            >
              {link.type === "text" ? link.text : null}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
