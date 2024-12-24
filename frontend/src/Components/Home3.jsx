import { useState } from "react";
import "../Components/css/Home.css";
import "../Pages/pages-styles/responsive.css";

// components
import Navbar from "./Navbar";
import Offer from "./Offer";
import CategoryItem from "./CategoryItem";
import Slider from "./Slider";
import Products from "./Products";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import FrozenGoods from "../Utils/FrozenGoods.json";

function Home3() {
  return (
    <>
      <Offer />
      <Navbar />
      <div className="divider"></div>
      <CategoryItem />
      <div className="divider my"></div>
      <Slider />
      <div className="divider"></div>
      <Products Product_list={FrozenGoods} />
      <div className="divider my-0"></div>
      <FeatureSection />
      <div className="divider my-0"></div>
      <Footer />
    </>
  );
}



export default Home3;
