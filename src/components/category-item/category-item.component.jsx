import { useState, useEffect } from "react";
import "./category-item.style.scss";
const Item = ({ category, id, imageUrl }) => {
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{category}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default Item;
