import React, { useState } from 'react';
import "./App.css";

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  return (
    <div className="carousel">
      <button onClick={prevCard} className="arrow left-arrow">
        &lt;
      </button>
      <div className="card-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
          >
            {card}
          </div>
        ))}
      </div>
      <button onClick={nextCard} className="arrow right-arrow">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
