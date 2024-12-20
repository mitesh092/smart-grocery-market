import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Navigation.css";
import { Link } from "react-router-dom";

function Navigations({ isWindowLarge }) {
  return (
    <div
      className={`navigation ${isWindowLarge ? "large-view" : "mobile-view"}`}
    >
      <div className="navigation-container">
        <ul className="navigation-list">
          {/* Home Dropdown */}
          <li className="navigation-item dropdown">
            <Link
              className="navigation-link dropdown-toggle"
              to="/"
              id="dashboardDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Home
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dashboardDropdown">
              <li>
                <Link className="dropdown-item" to="/">
                  Home 1
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/home2">
                  Home 2
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/home3">
                  Home 3
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/home-rtl">
                  Home RTL
                </Link>
              </li>
            </ul>
          </li>

          {/* About Us */}
          <li className="navigation-item">
            <Link className="navigation-link" to="/about">
              About Us
            </Link>
          </li>

          <li className="navigation-item">
            <Link className="navigation-link" to="/fruits-vegetables">
              Fruits & Vegetables
            </Link>
          </li>

          {/* Shop Dropdown */}
          <li className="navigation-item dropdown">
            <Link
              className="navigation-link dropdown-toggle"
              to="/shop"
              id="projectsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </Link>
            <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
              <li>
                <Link className="dropdown-item" to="/products-grid">
                  Products Grid
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/product-details">
                  Product Details
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/product-variable">
                  Product Variable
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/my-account">
                  My Account
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/checkout">
                  Checkout
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </li>

          {/* Blog Dropdown */}
          <li className="navigation-item dropdown">
            <Link
              className="navigation-link dropdown-toggle"
              to="/blog"
              id="projectsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Blog
            </Link>
            <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
              <li>
                <Link className="dropdown-item" to="/blog-list">
                  Blog List
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/blog-details">
                  Blog Details
                </Link>
              </li>
            </ul>
          </li>

          {/* FAQ */}
          <li className="navigation-item">
            <Link className="navigation-link" to="/faq">
              FAQ
            </Link>
          </li>

          {/* Contact */}
          <li className="navigation-item">
            <Link className="navigation-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigations;
