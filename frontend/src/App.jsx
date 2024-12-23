import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Home2 from "./Components/Home2";
import Home3 from "./Components/Home3";

import About from "./Pages/About";
import Shop from "./Pages/Shop"; // Add other pages as necessary
import Contact from "./Pages/Contact"; // Add other pages as necessary
import Faq from "./Pages/Faq";
import Blog from "./Pages/Blog"
import HomeRtl from "./Components/HomeRtl";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/home-rtl" element={<HomeRtl />} />

        <Route path="/about" element={<About />} />
        
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
