import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Slider.css";

function Slider() {
  const imageUrls = [
    "https://res.cloudinary.com/do9hu4gew/image/upload/v1734236665/y8xgcd4slgdnrlamivdm.jpg",
    "https://res.cloudinary.com/do9hu4gew/image/upload/v1734236665/m2gjs4jwcbf7ae2fs9zy.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [animation, setAnimation] = useState(""); // Animation class for slide transitions

  const prevSlide = () => {
    setAnimation("slide-out-right");
    setTimeout(() => {
      setCurrentImage((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
      setAnimation("slide-in-left");
    }, 300); // Match animation duration
  };

  const nextSlide = () => {
    setAnimation("slide-out-left");
    setTimeout(() => {
      setCurrentImage((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
      setAnimation("slide-in-right");
    }, 300);
  };

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentImage]);

  return (
    <div className="container custom-container">
      <div className="position-relative d-flex justify-content-center align-items-center">
        {/* Left Arrow */}
        <button
          className="cr btn btn-light position-absolute start-0 translate-middle-y"
          onClick={prevSlide}
          style={{ top: "50%" }}
        >
          <FaChevronLeft size={20} color="white" aria-label="previous Item" />
        </button>

        {/* Image Display */}
        <div className="w-100 text-center">
          <img
            src={imageUrls[currentImage]}
            alt="slider"
            className={`img-fluid rounded ${animation}`}
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>

        {/* Right Arrow */}
        <button
          className="cr btn btn-light position-absolute end-0 translate-middle-y"
          onClick={nextSlide}
          style={{ top: "50%" }}
        >
          <FaChevronRight size={20} color="white" aria-label="next Item" />
        </button>
      </div>

      {/* Indicators */}
      <div className="d-flex justify-content-center mt-3 mb-5">
        {imageUrls.map((_, index) => (
          <div
            key={index}
            className={`mx-1 ${currentImage === index ? "active" : ""}`}
            onClick={() => setCurrentImage(index)}
            style={{
              width: "30px",
              height: "3px",
              backgroundColor: currentImage === index ? "#6c757d" : "#d6d6d6",
              borderRadius: "5px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
