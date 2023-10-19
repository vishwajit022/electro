import React from "react";
import Product from "./Product";

function BelowImageLine() {
  return (
    <div>
      <div className="grid__images">
        <div className="gi">
          <Product
            title="Product A"
            price={29.99}
            imageUrl="/images/speaker.png" // Adjust the path as needed
          />
        </div>
        <div className="gi">
          <Product
            title="Product B"
            price={39.99}
            imageUrl="/images/cam.png" // Adjust the path as needed
          />
        </div>
        <div className="gi">
          <Product
            title="Product C"
            price={49.99}
            imageUrl="/images/iwatch.png" // Adjust the path as needed
          />
        </div>
      </div>
    </div>
  );
}

export default BelowImageLine;
