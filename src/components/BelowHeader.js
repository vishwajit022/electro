import React,{useState} from 'react'

function BelowHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false);

      const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
          // Set dark mode
          document.body.classList.add("dark-mode");
          
        } else {
          // Set light mode
          document.body.classList.remove("dark-mode");
        }
      };
  return (
    <div>
      <div className="belowheader">
        <div className="all__departments">
          <div className="item1">
            <span class="material-symbols-outlined">list</span>
            <p>Departments</p>
          </div>

          <div className="item">
            <strong>Value of the Day</strong>
          </div>
          <div className="item">
            <strong>Top 10 Offers</strong>
          </div>
          <div className="item">
            <strong>New Arrivals</strong>
          </div>
          <div className="item">Computers & Accessories</div>
          <div className="item">Cameras, Audio & Video</div>
          <div className="item">Mobiles & Tablets</div>
          <div className="item">Movies, Music & Video Game</div>
          <div className="item">TV & Audio</div>
          <div className="item">Watched & Eyewear</div>
          <div className="item">Car, Motorbike & Industrial</div>
        </div>
        <div className="bh__mid">
          <div className=" r">
            <sup>All Pages</sup>
            <span class="larrow material-symbols-outlined">expand_more</span>
          </div>
          <div className="red">Featured Brands</div>
          <div className="red">Trending Styles</div>
          <div className="red">Gift Cards</div>
        </div>
        <button className="ldbtn" onClick={toggleTheme}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <div className="bh__right">Free Shipping on Orders $50+</div>
      </div>
    </div>
  );
}

export default BelowHeader