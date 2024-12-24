import React, { useState } from "react";
import "./css/Product.css";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

function Product({ Food_Title, Food_img_url, off, com_Price, Actual_price }) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="cart-Layout">
      <div className="Product-data">
        <div className="Off-on-Product">
          <p className="offer">{off + "%"}</p>
        </div>
        <div className="Sign">
          <img
            src="https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg"
            alt="Green Sign"
          />
        </div>
      </div>

      {/* Food Image Section */}
      <div className="Food-Image">
        <img src={Food_img_url} alt={Food_Title} />
      </div>

      {/* Food Title */}
      <div className="Food-Title">
        <p>{Food_Title}</p>
      </div>

      {/* In Stock or not */}
      <div className="in-Stock">
        <IoIosCheckmarkCircle className="checkmark" color="green" size={20} />
        <p>In Stock - 1 kg</p>
      </div>

      {/* Price Section */}
      <div className="Price-section">
        <p className="compare-price">{com_Price}</p>
        <p className="actual-price">{Actual_price}</p>
      </div>

      {/* Counter */}
      <div className="counter-container">
        <button className="counter-button" onClick={decrement}>
          -
        </button>
        <span className="counter-value">{count}</span>
        <button className="counter-button" onClick={increment}>
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button className="add-to-cart">
        <IoCartOutline className="add-cart-icon" size={20} />
        <p>Add to cart</p>
      </button>
    </div>
  );
}

export default Product;
