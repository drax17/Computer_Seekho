import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/43e26378e18b32a2.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/c928b14a5cddaf18.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/5fbe79d96b10223e.jpg?q=20",
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Deal ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;