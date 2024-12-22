import React, { useState } from "react";
import "./css/FaqSection.css";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Only one question expands at a time
  };

  return (
    <div className="faq-container">
      {/* Left Section: FAQ Accordion */}
      <div className="faq-accordion">
        <div
          className={`faq-item ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => toggleAccordion(0)}
        >
          <h3 className="faq-question">
            <span className="faq-icon">
              {activeIndex === 0 ? "-" : "+"}
            </span>
            Where can I get access to Capital IQ?
          </h3>
          <p className="faq-answer">
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid. 3 wolf moon officia aute, non
            cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
            laborum eiusmod.
          </p>
        </div>
        <div
          className={`faq-item ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => toggleAccordion(1)}
        >
          <h3 className="faq-question">
            <span className="faq-icon">
              {activeIndex === 1 ? "-" : "+"}
            </span>
            How do I get access to case studies?
          </h3>
          <p className="faq-answer">
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et.
          </p>
        </div>
        <div
          className={`faq-item ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => toggleAccordion(2)}
        >
          <h3 className="faq-question">
            <span className="faq-icon">
              {activeIndex === 2 ? "-" : "+"}
            </span>
            How much should I capitalize?
          </h3>
          <p className="faq-answer">
            Nihil helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident.
          </p>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="faq-contact-form">
        <h3>Ask us a question</h3>
        <form>
          <input type="text" placeholder="Your Name *" required />
          <input type="email" placeholder="Your Email *" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default FaqSection;
