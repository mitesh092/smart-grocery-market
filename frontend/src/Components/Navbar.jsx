import React, { useState, useEffect } from "react";
import "./css/Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Navigations from "./Navigations";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobileView, setMobileView] = useState(false);
  const [isWindowLarge, setWindowLarge] = useState(window.innerWidth > 480);

  useEffect(() => {
    const handleResize = () => {
      setWindowLarge(window.innerWidth > 480);
      if (window.innerWidth > 480) setMobileView(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMobileView((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo/logo.png" alt="Logo" className="logo" />
          <h1>Smart</h1>
          <p>Grocery - Market</p>
          <div
            className="navbar-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMobileView ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>

        <div className="navbar-search">
          <input type="text" placeholder="Enter Keyword Here..." />
          <button>SEARCH</button>
        </div>

        {isWindowLarge && (
          <div className="navbar-cart">
            <div className="cart-icon">
              <AiOutlineShoppingCart className="cart-button" size={20} />
              <span className="cart-badge">10</span>
            </div>
            <p>My Cart</p>
          </div>
        )}
      </nav>

      {(isWindowLarge || isMobileView) && <Navigations />}
    </>
  );
}

export default Navbar;
