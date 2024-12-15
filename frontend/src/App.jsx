import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Offer from "./Components/Offer";
import Navigations from "./Components/Navigations";
import CategoryItem from "./Components/CategoryItem";
import Slider from "./Components/Slider";
import Products from "./Components/Products";


function App() {
  return (
    <>
      <Offer />
      <Navbar />
      <Navigations />
      <div className="divider"></div>
      <CategoryItem />
      <div className="divider my"></div>
      <Slider/>
      <div className="divider"></div>
      <Products/>
    </>
  );
}

export default App;
