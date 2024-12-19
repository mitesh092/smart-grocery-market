import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/CategoryStyle.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Items from "./Items";
import Dishes from "/src/Utils/Dishes.json";

function CategoryItem() {
  const [visibleDishes, setVisibleDishes] = useState(Dishes.slice(0, 7));

  const handleScroll = (direction) => {
    const currentStartIndex = Dishes.indexOf(visibleDishes[0]);
    const currentEndIndex = Dishes.indexOf(
      visibleDishes[visibleDishes.length - 1]
    );

    if (direction === "r" && currentEndIndex < Dishes.length - 1) {
      setVisibleDishes((prev) => [
        ...prev.slice(1),
        Dishes[currentEndIndex + 1],
      ]);
    } else if (direction === "l" && currentStartIndex > 0) {
      setVisibleDishes((prev) => [
        Dishes[currentStartIndex - 1],
        ...prev.slice(0, -1),
      ]);
    }
  };

  return (
    <div className="d-flex layout">
      <button
        className="cr left"
        onClick={() => handleScroll("l")}
        disabled={Dishes.indexOf(visibleDishes[0]) === 0}
      >
        <FaChevronLeft size={20} color="white" aria-label="previous Item" />
      </button>

      <Items visibleDishes={visibleDishes} />

      <button
        className="cr right"
        onClick={() => handleScroll("r")}
        disabled={
          Dishes.indexOf(visibleDishes[visibleDishes.length - 1]) ===
          Dishes.length - 1
        }
      >
        <FaChevronRight size={20} color="white" aria-label="next Item" />
      </button>
    </div>
  );
}

export default CategoryItem;
