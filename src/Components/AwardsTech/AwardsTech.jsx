import "./AwardsTech.css";
import { awards } from "../../data/portfolioData";
import useMouseParallax from "../../hooks/useMouseParallax";

const AwardsTech = () => {
  const { parallaxProps } = useMouseParallax({
    rotateX: 4.5,
    rotateY: 4.5,
    scale: 1.004,
    zoom: 0.014,
  });

  return (
    <div className="awardsSection">
      <h1 className="awardsHeading">AWARDS</h1>
      <div className="awardsGrid" {...parallaxProps}>
        {awards.map((award) => (
          <article className="awardCard" key={`${award.title}-${award.date}`}>
            <p className="awardDate">{award.date}</p>
            <h2>{award.title}</h2>
            <p>{award.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AwardsTech;
