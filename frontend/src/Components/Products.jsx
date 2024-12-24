import React, { useRef } from "react";
import "./css/Products.css";
import Product from "./Product";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

function Products({ Product_list = [] }) {
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
        {Product_list.length > 0 ? (
          Product_list.map((fruit, index) => {
            // Ensure `off` is a number
            const off = typeof fruit.off === "string" ? parseFloat(fruit.off) : fruit.off;
            
            return (
              <Product
                key={index}
                Food_Title={fruit.Food_Title}
                Food_img_url={fruit.Food_img_url}
                off={off}
                com_Price={fruit.com_Price}
                Actual_price={fruit.Actual_price}
              />
            );
          })
        ) : (
          <p>No products available.</p>
        )}
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
          {Product_list.length > 0 ? (
            Product_list.slice(0, 6).map((fruit, index) => {
              const off = typeof fruit.off === "string" ? parseFloat(fruit.off) : fruit.off;
              
              return (
                <Product
                  key={index}
                  Food_Title={fruit.Food_Title}
                  Food_img_url={fruit.Food_img_url}
                  off={off}
                  com_Price={fruit.com_Price}
                  Actual_price={fruit.Actual_price}
                />
              );
            })
          ) : (
            <p>No products available for the slider.</p>
          )}
        </div>
        <button className="cr" onClick={scrollRight}>
          <FaChevronRight size={30} color="white" />
        </button>
      </div>
    </div>
  );
}

// Adding PropTypes for better validation
Products.propTypes = {
  Product_list: PropTypes.arrayOf(
    PropTypes.shape({
      Food_Title: PropTypes.string.isRequired,
      Food_img_url: PropTypes.string.isRequired,
      off: PropTypes.number,
      com_Price: PropTypes.number.isRequired,
      Actual_price: PropTypes.number.isRequired,
    })
  ),
};

export default Products;
