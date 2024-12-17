import React from "react";
import "./css/Products.css";
import Product from "./Product";

import "bootstrap/dist/css/bootstrap.min.css";

function Products() {
  return (
    <div className="Custom-container pad">
      {/* header  */}
      <div className="d-flex justify-content-between align-content-center ">
        <div className="d-flex justify-content-around gap-1 align-content-center">
          <h5>Top Savers Today </h5>
          <p className="Off">20% OFF</p>
        </div>
        <a href="#">View All</a>
      </div>

      {/* product list */}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Products;
