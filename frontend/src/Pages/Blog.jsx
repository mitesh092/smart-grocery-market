import React from "react";

import Offer from "../Components/Offer";
import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import Panel from "../Components/Panel";
import "./pages-styles/Blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Offer Section */}
      <Offer />

      {/* Navbar */}
      <Navbar />

      <Panel Title={"Blog"}/>

      {/* Main Content */}
      <div className="blog-container">
        {/* Blog Articles */}
        <div className="blog-content">
          <div className="blog-post">
            <img
              src="https://lh6.googleusercontent.com/proxy/2qMKbpv3vomFIt5hI_Rxy6fuNTDBuQMR7IC6wx-4fWYguoWKNXz27FwuwLmNS-iMQa8CqHyPEDrcWIyW8WikWY8gd20NVuoMCgv7uxST8nxBbNq5z0YZYs7mzhStq_Q"
              alt="Blog Post"
              className="blog-image"
            />
            <h2 className="blog-title">
              Restaurant Employer Read Clients Orders on His iPad
            </h2>
            <p className="blog-meta">
              August 12, 2018 | Gallery | News, Slider
            </p>
            <p className="blog-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
              enim tincidunt, vulputate velit ac, fringilla lacus. Vivamus
              ultrices posuere mauris vel cursus.
            </p>
            <a href="#" className="read-more">
              Read More
            </a>
          </div>

          <div className="blog-post">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="blog-video"
            ></iframe>
            <h2 className="blog-title">
              English Breakfast Tea With Tasty Donut Desserts
            </h2>
            <p className="blog-meta">August 12, 2018 | Video | Food, Organic</p>
            <p className="blog-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
              enim tincidunt, vulputate velit ac, fringilla lacus. Vivamus
              ultrices posuere mauris vel cursus.
            </p>
            <a href="#" className="read-more">
              Read More
            </a>
          </div>
        </div>

        {/* Sidebar */}
        <div className="blog-sidebar">
          <div className="sidebar-section">
            <h3>Search</h3>
            <input type="text" placeholder="Search..." className="search-bar" />
          </div>

          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul>
              <li>Audio</li>
              <li>Gallery</li>
              <li>Image</li>
              <li>Video</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Newsletter</h3>
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button className="newsletter-button">Sign Up</button>
          </div>

          <div className="sidebar-section">
            <h3>Tags</h3>
            <div className="tags">
              <span className="tag">audio</span>
              <span className="tag">envato</span>
              <span className="tag">food</span>
              <span className="tag">grocery</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
