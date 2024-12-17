import React, { useState } from "react";
import "./css/Product.css";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

function Product() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1); // Prevents negative numbers
  };
  return (
    <div className="cart-Layout">
      <div className="Product-data">
        <div className="Off-on-Product">
          <p className="offer">17%</p>
        </div>
        <div className="Sign">
          <img
            src="https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg"
            alt="Green Sign"
          />
        </div>
      </div>

      {/*Food Image Section*/}
      <div className="Food-Image">
        <img
          src="https://i.pinimg.com/736x/d8/43/ad/d843ad360d8f7615452b80b4bb725019.jpg"
          alt=""
        />
      </div>

      {/*  Food Title*/}
      <div className="Food-Title">
        <p>organic-sweet-corn</p>
      </div>

      {/*  In Stock or not */}
      <div className="in-Stock">
        <IoIosCheckmarkCircle className="checkmark" color="green" size={20} />
        <p>In Stock - 1 kg</p>
      </div>

      {/*  Price Section */}

      <div className="Price-section">
        <p className="compare-price">₹20.00</p>
        <p className="actual-price">₹14.99</p>
      </div>

      {/* button */}

      <div className="counter-container">
        <button className="counter-button" onClick={decrement}>
          -
        </button>
        <span className="counter-value">{count}</span>
        <button className="counter-button" onClick={increment}>
          +
        </button>
      </div>

      {/* add to cart button */}

      <button className="add-to-cart">
        <IoCartOutline className="add-cart-icon" size={20} />
        <p className="">Add to cart</p>
      </button>
    </div>
  );
}

export default Product;
