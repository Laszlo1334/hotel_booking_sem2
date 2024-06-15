import React, { useState } from "react";

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div>
        <img src={slides[currentIndex].url} className="room-slideshow" />
      </div>
      <div className="arrows prev" onClick={goToPrev}>
        &#10094;
      </div>
      <div className="arrows next" onClick={goToNext}>
        &#10095;
      </div>

      <div className="room-dots">
        {slides.map((slides, slideIndex) => (
          <div
            key={slideIndex}
            className="dot"
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
}
