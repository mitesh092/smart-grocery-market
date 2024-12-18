import React from "react";
import "./css/footer.css";

function Footer() {
  return (
    <footer>
      {/* Middle Section */}
      <div className="footer-middle">
        <div className="footer-info">
          <h2 className="footer-logo">Smart</h2>
          <p>GROCERY- Market</p>
          <ul>
            <li>
              <i className="fas fa-phone"></i> +91 999999999
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i> 12345 67890, 56847-98562
            </li>
            <li>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:yourmail@gmail.com">joemail@gmail.com</a>
            </li>
            <li>
              <i className="fas fa-globe"></i>{" "}
              <a
                href="https://github.com/mitesh092"
                target="_blank"
                rel="noreferrer"
              >
                Go to My Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>TOP CITIES</h4>
          <ul>
            <li>New Delhi</li>
            <li>Bengaluru</li>
            <li>Hyderabad</li>
            <li>Kolkata</li>
            <li>Gurugram</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>CATEGORIES</h4>
          <ul>
            <li>Vegetables</li>
            <li>Grocery & Staples</li>
            <li>Breakfast & Dairy</li>
            <li>Soft Drinks</li>
            <li>Biscuits & Cookies</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>ABOUT US</h4>
          <ul>
            <li>Company Information</li>
            <li>Careers</li>
            <li>Store Location</li>
            <li>Affiliate Program</li>
            <li>Copyright</li>
          </ul>
        </div>

        {/* App Download */}
        <div className="footer-download">
          <h4>Download App</h4>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
            alt="Google Play"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
            alt="App Store"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright 2022. KlbTheme. All rights reserved.</p>
        <div className="footer-payment">
          <img
            src="https://pentagram-production.imgix.net/de996aa4-5343-4200-a466-ab8fc7eafa80/am_amex_01.jpg?rect=0%2C172%2C3000%2C1875&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548"
            alt="AMEX"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
            alt="VISA"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/800px-Mastercard-logo.svg.png"
            alt="MasterCard"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/030/740/487/non_2x/cash-on-delivery-logo-free-png.png"
            alt="Cash on Delivery"
          />
          <img
            src="https://png.pngtree.com/element_our/png/20181108/internet-banking-line-icon-png_233993.jpg"
            alt="Net Banking"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
