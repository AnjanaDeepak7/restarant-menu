import React from "react";

const Item = ({ src, altName, item, price }) => {
  return (
    <div className="container">
      <img
        className="image"
        src={src}
        alt={altName}
        width="200px"
        height="200px"
      />
      <div className="details">
        <h3>{item}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Item;
