import React from "react";
import "./css/AboutUsSection.css"; // Update the CSS filename accordingly.

const AboutUsSection = () => {
  return (
    <div className="about-container">
      <div className="about-image-section">
        <img
          src="https://klbtheme.com/groci/wp-content/uploads/2018/08/about.jpg"
          alt="Delicious Food"
          className="about-image"
        />
      </div>
      <div className="about-text-section">
        <h1 className="about-headline">
          Save more with GO! We give you the lowest prices on all your grocery
          needs.
        </h1>
        <div className="about-content">
          <h2>Our Vision</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here'.
          </p>
          <h2>Our Goal</h2>
          <p>
            When looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal distribution of letters, as opposed to
            using 'Content here'. Lorem Ipsum has been the industry's standard
            dummy text ever since.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
