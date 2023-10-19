import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function ImageLine() {
  const img3Ref = useRef(null);
  const imgtextRef = useRef(null);

  useEffect(() => {
  // Delay the animation by 0.5 seconds

    gsap.from(img3Ref.current, {
      y: 100,
      duration: 1,
      
    });

    gsap.from(
      imgtextRef.current,
      {
        duration: 1.4,
        y: 2000,
  stagger: 0.1, 
        
      },
       // Start the text animation 0.5 seconds after the image
    );
  }, []);

  return (
    <div className="background">
      <div className="il__main">
        <div className="il__image">
          <div className="images">
            <h3 ref={imgtextRef}>
              We got the Best Deals on your Favourite Brands
              <p>
                <button className="checkout">Checkout</button>
              </p>
            </h3>
            <img
              className="img3 img"
              src="/images/mac.png"
              alt="Mac"
              ref={img3Ref}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageLine;
