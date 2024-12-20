import React from "react";
import {
  FaTags,
  FaBoxes,
  FaUndo,
  FaTruck,
  FaSmile,
  FaHeart,
} from "react-icons/fa";

import "./css/AboutSection.css";

const AboutSection = () => {
  const features = [
    {
      icon: <FaTags />,
      title: "Best Prices & Offers",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
    {
      icon: <FaBoxes />,
      title: "Wide Assortment",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    },
    {
      icon: <FaUndo />,
      title: "Easy Returns",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
    },
    {
      icon: <FaTruck />,
      title: "Free & Next Day Delivery",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },
    {
      icon: <FaSmile />,
      title: "100% Satisfaction Guarantee",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    },
    {
      icon: <FaHeart />,
      title: "Great Daily Deals Discount",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
    },
  ];

  return (
    <div className="about-section">
      <div className="about-header">
        <h2>What We Provide?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon-wrapper">
              <div className="icon">{feature.icon}</div>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
