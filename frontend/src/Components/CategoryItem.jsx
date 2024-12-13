import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/CategoryStyle.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Items from "./Items";
function CategoryItem() {
  const [Dir, setDir] = useState("");
  return (
    <div className="d-flex layout">
      <button
        className="cr"
        onClick={() => {
          setDir("l");
        }}
      >
        <FaChevronLeft size={20} color="white" aria-label="previus Item" />
      </button>

      <Items Dir={Dir} />

      <button
        className="cr"
        onClick={() => {
          setDir("r");
        }}
      >
        <FaChevronRight size={20} color="white" aria-label="next Item" />
      </button>
    </div>
  );
}

export default CategoryItem;
