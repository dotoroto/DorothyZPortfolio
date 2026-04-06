import { useEffect, useRef, useState } from "react";
import "./TechStack.css";
import { techStack } from "../../data/portfolioData";

const TechStack = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false,
  );
  const [hoveredTech, setHoveredTech] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const boardRef = useRef(null);
  const slotRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.classList.remove("inventory-hovering");
      setHoveredTech("");
      setHoveredIndex(-1);
      return undefined;
    }

    const hideTorch = () => document.body.classList.add("inventory-hovering");
    const showTorch = () => document.body.classList.remove("inventory-hovering");

    const handleMouseMove = (event) => {
      setTooltipPosition({ x: event.clientX, y: event.clientY });

      const board = boardRef.current;

      if (!board) {
        showTorch();
        return;
      }

      const sectionLayer = board.closest(".sectionLayer");

      if (
        sectionLayer &&
        window.getComputedStyle(sectionLayer).pointerEvents === "none"
      ) {
        showTorch();
        setHoveredTech("");
        setHoveredIndex(-1);
        return;
      }

      const boardRect = board.getBoundingClientRect();
      const insideBoard =
        event.clientX >= boardRect.left &&
        event.clientX <= boardRect.right &&
        event.clientY >= boardRect.top &&
        event.clientY <= boardRect.bottom;

      if (!insideBoard) {
        showTorch();
        setHoveredTech("");
        setHoveredIndex(-1);
        return;
      }

      const hitIndex = slotRefs.current.findIndex((slot) => {
        if (!slot) {
          return false;
        }

        const rect = slot.getBoundingClientRect();
        return (
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom
        );
      });

      if (hitIndex >= 0) {
        hideTorch();
        setHoveredTech(techStack[hitIndex]?.name ?? "");
        setHoveredIndex(hitIndex);
        return;
      }

      hideTorch();
      setHoveredTech("");
      setHoveredIndex(-1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      showTorch();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="techSection">
        <div className="techScene techSceneMobile">
          <div className="techTitleBlock">
            <h1 className="techstackh1 techstackh1Mobile">TECH STACK</h1>
          </div>

          <article className="techMobileCard">
            <h2>Tools I Work With</h2>
            <div className="techMobileList">
              {techStack.map((entry) => (
                <p key={entry.name}>{entry.name}</p>
              ))}
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="techSection">
      <div className="techScene">
        <div className="techTitleBlock">
          <h1 className="techstackh1">TECH STACK</h1>
        </div>

        <div ref={boardRef} className="techInventoryBoard">
          <div className="techInventoryGrid">
            {techStack.map((entry, index) => (
              <button
                ref={(element) => {
                  slotRefs.current[index] = element;
                }}
                className={`techSlot techSlot--${entry.accent}`}
                key={entry.name}
                type="button"
                aria-label={entry.name}
                title={entry.name}
                data-index={index}
                onFocus={() => {
                  setHoveredTech(entry.name);
                  setHoveredIndex(index);
                }}
                onBlur={() => {
                  setHoveredTech("");
                  setHoveredIndex(-1);
                }}
                data-active={hoveredIndex === index}
              >
                <span className="techSlotGlyph">{entry.short}</span>
              </button>
            ))}
          </div>
        </div>

        <div
          className={`techCursorTooltip ${hoveredTech ? "visible" : ""}`}
          style={{
            left: `${tooltipPosition.x + 18}px`,
            top: `${tooltipPosition.y + 12}px`,
          }}
        >
          {hoveredTech}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
