import { useEffect, useRef, useState } from "react";
import CategoryCard from "./CategoryCard";
const SCROLL_DEBOUNCE_MS = 300;

const CategorySlide = () => {
  const [cards, setCards] = useState(Array(10).fill(false));

  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);

  const [cardWidth, setCardWidth] = useState(0);

  const scrollTimeoutRef = useRef<number | null>(null);
  const isScrollingRef = useRef(false);
  useEffect(() => {
    const updateCardWidth = () => {
      if (firstCardRef.current) setCardWidth(firstCardRef.current.offsetWidth);
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);
  const debounceScroll = (callback: () => void) => {
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;
    callback();
    scrollTimeoutRef.current = window.setTimeout(
      () => (isScrollingRef.current = false),
      SCROLL_DEBOUNCE_MS
    );
  };
  const scrollLeft = () => {
    debounceScroll(() =>
      containerRef.current?.scrollBy({ left: -cardWidth, behavior: "smooth" })
    );
  };
  const scrollRight = () => {
    debounceScroll(() =>
      containerRef.current?.scrollBy({ left: cardWidth, behavior: "smooth" })
    );
  };

  const handleActiveChange = (index: number) =>
    setCards(cards.map((_, i) => i === index));

  return (
    <div className="category-slide">
      <div className="d-flex card-container" ref={containerRef}>
        {cards.map((selected, i) => (
          <div
            className="card-wrapper col-lg-3 col-md-6 col-sm-6 col-xs-12"
            key={i}
            ref={i === 0 ? firstCardRef : null}
          >
            <CategoryCard
              active={selected}
              emitActivate={handleActiveChange}
              index={i}
            />
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
