import React from 'react'

import Offer from "../Components/Offer";
import Navbar from "../Components/Navbar";

import Panel from "../Components/Panel";
import Footer from "../Components/Footer";
import FaqSection from '../Components/FaqSection';
import FeatureSection from '../Components/FeatureSection';

function Faq() {
  return (
    <div>
      <Offer/>
      <Navbar/>
      <Panel Title={"Faq"}/>
      <FaqSection/>
      <FeatureSection/>
      <Footer/>
    </div>
  )
}

export default Faq
