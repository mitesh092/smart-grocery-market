import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Offer from "./Components/Offer";
import Navigations from "./Components/Navigations";
import CategoryItem from "./Components/CategoryItem";

function App() {
  return (
    <>
      <Offer />
      <Navbar />
      <Navigations />
      <div className="divider"></div>
      <CategoryItem />
    </>
  );
}

export default App;
