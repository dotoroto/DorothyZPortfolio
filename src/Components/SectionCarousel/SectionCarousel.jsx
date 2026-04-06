import { useState } from "react";
import arrow from "../../Assets/downArrow.png";
import "./SectionCarousel.css";

const SectionCarousel = ({
  title,
  items,
  renderItem,
  contentClassName = "",
  parallaxProps,
  getItemLabel,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null) {
      return;
    }

    const swipeDistance = event.changedTouches[0].clientX - touchStartX;

    if (Math.abs(swipeDistance) > 45) {
      if (swipeDistance < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    setTouchStartX(null);
  };

  return (
    <div className="sectionPage">
      <h1>{title}</h1>
      <div className="sectionContainer" {...parallaxProps}>
        <button
          type="button"
          className="sectionArrow"
          onClick={handlePrev}
          aria-label={`Previous ${title.toLowerCase()} item`}
        >
          <img src={arrow} alt="" className="sectionArrowLeft" />
        </button>
        <div
          className={contentClassName}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {renderItem(items[currentIndex], currentIndex)}
        </div>
        <button
          type="button"
          className="sectionArrow"
          onClick={handleNext}
          aria-label={`Next ${title.toLowerCase()} item`}
        >
          <img src={arrow} alt="" className="sectionArrowRight" />
        </button>
      </div>
      {getItemLabel ? (
        <div className="sectionSelector" aria-label={`${title.toLowerCase()} selection`}>
          {items.map((item, index) => (
            <button
              key={`${title}-${getItemLabel(item)}-${index}`}
              type="button"
              className={`sectionSelectorButton ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-pressed={index === currentIndex}
            >
              {getItemLabel(item)}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SectionCarousel;
