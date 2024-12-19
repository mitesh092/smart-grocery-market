import { useState } from "react";
import "../Components/css/Home.css";
import "./pages-styles/responsive.css";

// components
import Navbar from "../Components/Navbar";
import Offer from "../Components/Offer";
import CategoryItem from "../Components/CategoryItem";
import Slider from "../Components/Slider";
import Products from "../Components/Products";
import FeatureSection from "../Components/FeatureSection";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Offer />
      <Navbar />
      
      <div className="divider"></div>
      <CategoryItem />
      <div className="divider my"></div>
      <Slider />
      <div className="divider"></div>
      <Products />
      <div className="divider my-0"></div>
      <FeatureSection />
      <div className="divider my-0"></div>
      <Footer />
    </>
  );
}

export default Home;
