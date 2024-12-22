import React from "react";
import Offer from "../Components/Offer";
import Navbar from "../Components/Navbar";
import Panel from "../Components/Panel";
import FeatureSection from "../Components/FeatureSection";
import Footer from "../Components/Footer";
import "./pages-styles/Contact.css";

function Contact() {
  return (
    <>
      <Offer />
      <Navbar />
      <Panel Title={"Contact Us "} />

      <div className="contact-container">
          <h1>Submit Your Details</h1>
        <form className="contact-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name *"
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="form-input"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="form-input subject-input"
          />
          <textarea
            placeholder="Your Message"
            className="form-textarea"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>

      <FeatureSection />
      <Footer />
    </>
  );
}

export default Contact;
