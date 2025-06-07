import { useEffect, useRef, useState } from "react";
import CategoryCard from "./CategoryCard";

const CategorySlide = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);

  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (firstCardRef.current) setCardWidth(firstCardRef.current.offsetWidth);
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };
  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: cardWidth, behavior: "smooth" });
  };
  return (
    <div className="category-slide">
      <div className="d-flex card-container" ref={containerRef}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            className="card-wrapper col-lg-3 col-md-6 col-sm-6 col-xs-12"
            key={i}
            ref={i === 0 ? firstCardRef : null}
          >
            <CategoryCard />
          </div>
        ))}
      </div>
      <div className="category-slide-controls">
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
          onClick={scrollLeft}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
          onClick={scrollRight}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CategorySlide;
