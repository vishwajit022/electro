import React from 'react'

function TwoGrid() {
  return (
    <div>
      <div className="TwoGrid__main">
        <div className="TwoGrid__left">
          <div class="ps5">
            <div className="product">
              <h2> Special Offers </h2>
              <img src="images/ps5-removebg-preview.png" />
              <h4>Game Controller + USB 3.0 Cable</h4>
              <h2>$99.00</h2>
            </div>
          </div>
        </div>
        <div className="TwoGrid__right"></div>
        <div className="tg__item">Featured</div>
        <div className="tg__item">On Sale</div>
        <div className="tg__item">Top Rated</div>
      </div>
    </div>
  );
}

export default TwoGrid