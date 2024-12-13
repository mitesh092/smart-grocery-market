import React from "react";
import Dishes from "/src/Utils/Dishes.json";
import "./css/Item.css";

const Items = ({Dir}) => {

  return (
    <div className="dish-layout">
      {Dishes.map((dish, index) => (
        <div key={index} className="Item-struc">
          <div className="item-image">
            <img src={dish.imageUrl} alt={"Image of ${dish.category}"} />
          </div>
          <h3>{dish.category}</h3>
          <p>{dish.quantity} Items</p>
        </div>
      ))}
    </div>
  );
};

export default Items;