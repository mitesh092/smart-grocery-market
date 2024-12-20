import React from "react";

import Offer from "../Components/Offer";
import Navbar from "../Components/Navbar";
import AboutUsPanel from "../Components/AboutUsPanel";
import AboutUsSection from "../Components/AboutUsSection";
import AboutSection from "../Components/AboutSection";
import MeComponent from "../Components/MeComponent";
import Footer from "../Components/Footer";

function About() {
  return (
    <div>
      <Offer />
      <Navbar />
      <AboutUsPanel />
      <AboutUsSection />
      <AboutSection />
      <MeComponent/>
      <Footer/>
    </div>
  );
}

export default About;
