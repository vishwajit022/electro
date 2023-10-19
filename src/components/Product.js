import React from "react";

function Product({ title, price, imageUrl }) {
  return (
    <div className="product">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      
    </div>
  );
}

export default Product;
