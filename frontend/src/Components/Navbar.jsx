import React from "react";
import "./css/Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo/logo.png" alt="Logo" className="logo" />
        <h1>Smart</h1>
        <p>Grocery - Market</p>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Enter Keyword Here..." />
        <button>SEARCH</button>
      </div>
      <div className="navbar-cart">
        <div className="cart-icon">
          <AiOutlineShoppingCart className="cart-button" size={20} />
          <span className="cart-badge">10</span>
        </div>
        <p>My Cart</p>
      </div>
    </nav>
  );
}

export default Navbar;
