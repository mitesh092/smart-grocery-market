import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Navigation.css";

function Navigations() {
  return (
    <div className="navigation">
      <div className="navigation-container">
        <ul className="navigation-list">
          {/* Home Dropdown */}
          <li className="navigation-item dropdown">
            <a
              className="navigation-link dropdown-toggle"
              href="#"
              id="dashboardDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Home
            </a>
            <ul className="dropdown-menu" aria-labelledby="dashboardDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Home 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Home 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Home 3
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Home RTL
                </a>
              </li>
            </ul>
          </li>

          {/* About Us */}
          <li className="navigation-item">
            <a className="navigation-link" href="#">
              About Us
            </a>
          </li>

          <li className="navigation-item">
            <a className="navigation-link" href="#">
              Fruits & Vegetables
            </a>
          </li>

          {/* Shop Dropdown */}
          <li className="navigation-item dropdown">
            <a
              className="navigation-link dropdown-toggle"
              href="#"
              id="projectsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </a>
            <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Products Grid
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Product Details
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Product Variable
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  My Account
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Checkout
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Cart
                </a>
              </li>
            </ul>
          </li>

          {/* Blog Dropdown */}
          <li className="navigation-item dropdown">
            <a
              className="navigation-link dropdown-toggle"
              href="#"
              id="projectsDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Blog
            </a>
            <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Blog List
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Blog Details
                </a>
              </li>
            </ul>
          </li>

          {/* FAQ */}
          <li className="navigation-item">
            <a className="navigation-link" href="#">
              FAQ
            </a>
          </li>

          {/* Contact */}
          <li className="navigation-item">
            <a className="navigation-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Navigations;
