import React from "react";
import { FaTruck, FaShoppingBasket, FaTag } from "react-icons/fa";
import "./css/FeatureSection.css";
const FeatureSection = () => {
  return (
    <div className="feature-container">
      {/* Free & Next Day Delivery */}
      <div className="feature-item">
        <div className="feature-icon">
          <FaTruck color="#24a3b5" />
        </div>
        <div className="feature-content">
          <h3>Free & Next Day Delivery</h3>
          <p>Lorem ipsum dolor sit amet, cons...</p>
        </div>
      </div>

      {/* 100% Satisfaction Guarantee */}
      <div className="feature-item">
        <div className="feature-icon">
          <FaShoppingBasket color="#24a3b5" />
        </div>
        <div className="feature-content">
          <h3>100% Satisfaction Guarantee</h3>
          <p>Rorem ipsum dolor sit amet, cons...</p>
        </div>
      </div>

      {/* Great Daily Deals Discount */}
      <div className="feature-item">
        <div className="feature-icon">
          <FaTag color="#24a3b5" />
        </div>
        <div className="feature-content">
          <h3>Great Daily Deals Discount</h3>
          <p>Lorem ipsum dolor sit amet, cons...</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
