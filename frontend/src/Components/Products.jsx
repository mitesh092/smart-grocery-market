import React, { useRef } from "react";
import "./css/Products.css";
import Product from "./Product";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Products() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="Custom-container pad">
      {/* Header */}
      <div className="d-flex justify-content-between align-content-center">
        <div className="d-flex justify-content-around gap-1 align-content-center">
          <h5>Top Savers Today</h5>
          <p className="Off">20% OFF</p>
        </div>
        <a href="#">View All</a>
      </div>

      {/* Product List */}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      {/* Middle Image */}
      <div className="MidImage"></div>

      {/* Slider Section */}
      <div className="d-flex justify-content-between align-content-center mt-4">
        <div className="d-flex justify-content-around gap-1 align-content-center">
          <h5>Best Offers View</h5>
          <p style={{ backgroundColor: "#17a2b8" }} className="Off">
            20% OFF
          </p>
        </div>
        <a href="#">View All</a>
      </div>

      <div className="Product-slider-wrapper">
        <button className="cr left-slider-btn" onClick={scrollLeft}>
          <FaChevronLeft size={30} color="white" />
        </button>
        <div className="Product-slider" ref={sliderRef}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <button className="cr " onClick={scrollRight}>
          <FaChevronRight size={30} color="white" />
        </button>
      </div>
    </div>
  );
}

export default Products;
