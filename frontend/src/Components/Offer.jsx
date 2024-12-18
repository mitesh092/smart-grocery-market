import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faLocationDot, faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";


function Offer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [inputLocation, setInputLocation] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setInputLocation(""); // Clear the input field after selection
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const handleInputChange = (e) => {
    setInputLocation(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputLocation.trim()) {
      handleLocationSelect(inputLocation.trim());
    }
  };

  return (
    <div className="bg-dark py-2 d-flex justify-content-around align-items-center px-4 OfferFront">
      {/* Offer Section */}
      <div>
        <p className="text-white mb-0 ">
          20% cashback for all users | Code: <strong>OGOFERS13</strong>{" "}
          <FontAwesomeIcon icon={faSmile} />
        </p>
      </div>

      {/* Action Section */}
      <div className="d-flex gap-4 text-white ">
        <div className="d-flex align-items-center position-relative">
          <FontAwesomeIcon icon={faLocationDot} className="me-2" />
          <span
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={toggleDropdown}
          >
            {selectedLocation || "Your Location"}
          </span>
          {isDropdownOpen && (
            <div className="dropdown-menu show" style={{ display: "block", position: "absolute", top: "100%" }}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Enter location"
                value={inputLocation}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown} // Listen for Enter key
              />
              <button
                className="dropdown-item"
                onClick={() => handleLocationSelect("Mumbai")}
              >
                Mumbai
              </button>
              <button
                className="dropdown-item"
                onClick={() => handleLocationSelect("Delhi")}
              >
                Delhi
              </button>
              <button
                className="dropdown-item"
                onClick={() => handleLocationSelect("Bangalore")}
              >
                Bangalore
              </button>
              <button
                className="dropdown-item"
                onClick={() => handleLocationSelect("Chennai")}
              >
                Chennai
              </button>
            </div>
          )}
        </div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
          <span>Sign In</span>
        </div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faUserPlus} className="me-2" />
          <span>Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default Offer;
