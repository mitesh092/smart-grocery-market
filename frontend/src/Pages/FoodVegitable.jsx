import React, { useState } from "react";

import Offer from "../Components/Offer";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Footer from "../Components/Footer";

import Fruits_list from "../Utils/Fruits_list.json";
import FroZenGoods from "../Utils/FrozenGoods.json";

function FoodVegetable() {
  const [priceRange, setPriceRange] = useState([0, 10000]);

  // Handle price change for the slider
  const handlePriceChange = (e) => {
    const maxPrice = Number(e.target.value);
    setPriceRange([0, maxPrice]);
  };

  // Filter fruits by price range
  const filteredFruits = Fruits_list.filter(
    (fruit) =>
      fruit.Actual_price >= priceRange[0] && fruit.Actual_price <= priceRange[1]
  );
  
  return (
    <div>
      <Offer />
      <Navbar />

      {/* Filter Section */}
      <div className="filter-section">
        <h4>Filter by Price</h4>
        <div className="price-slider">
          <input
            type="range"
            min="0"
            max="10000"
            value={priceRange[1]}
            onChange={handlePriceChange}
          />
          <p>
            Price: ₹{priceRange[0]} - ₹{priceRange[1]}
          </p>
        </div>
      </div>

      {/* Pass filtered fruits to the Products component */}
      <Products Product_list={filteredFruits} priceRange={priceRange} />
      <Products Product_list={FroZenGoods} priceRange={priceRange} />

      <Footer />
    </div>
  );
}

export default FoodVegetable;
