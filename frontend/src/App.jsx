import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop"; // Add other pages as necessary
import Contact from "./Pages/Contact"; // Add other pages as necessary
import Blog from "./Pages/Blog"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/shop" element={<Shop />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
