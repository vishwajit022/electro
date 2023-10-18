import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function ImageLine() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  useEffect(() => {
    // Create GSAP animations for each image
    const tl = gsap.timeline();

    tl.from(img1Ref.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
      .from(
        img2Ref.current,
        {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      ) // Start the animation 0.5 seconds after img1
      .from(
        img3Ref.current,
        {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      ); // Start the animation 0.5 seconds after img2
  }, []);

  return (
    <div className="background">
      <div className="il__main">
        <div className="il__image">
          <div className="images">
            <img
              className="img1"
              src="./images/iwatch.png"
              alt="iWatch"
              ref={img1Ref}
            />
            <img
              className="img2"
              src="./images/cam.png"
              alt="Camera"
              ref={img2Ref}
            />
            <img
              className="img3"
              src="./images/mac.png"
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
