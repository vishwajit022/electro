import React, { useState } from 'react';


function Header() {
   

        const [isSidebarOpen, setSidebarOpen] = useState(false);
       
        const openNav = () => {
           setSidebarOpen(true);
        };
       
        const closeNav = () => {
           setSidebarOpen(false);
        };

 return (
   <div>
     <div className="header">
       <div className="header__logo">
         <h1 className="header__logo__title">
           electro
           <sub>
             <div className="yellow"></div>
           </sub>
         </h1>
         <div className="header__menu">
           <span
             className="material-symbols-outlined Departments btn"
             onClick={openNav}
           >
             menu
           </span>
           {isSidebarOpen && (
             <div className="sidebar">
               <span className="closebtn" onClick={closeNav}>
                 &times;
               </span>
               <ul>
                 <li>Value of the Day</li>
                 <li>Top 100 Offers</li>
                 <li>New Arrivals</li>
                 <li class="dropdown-item">Computers & Accessories</li>
                 <ul class="dropdown-content">
                   <li>Submenu Item 1</li>
                   <li>Submenu Item 2</li>
                 </ul>
                 <li class="dropdown-item">Cameras, Audio, & Video</li>
                 <ul class="dropdown-content">
                   <li>Submenu Item 1</li>
                   <li>Submenu Item 2</li>
                 </ul>
                 <li class="dropdown-item">Mobiles & Tablets</li>
                 <ul class="dropdown-content">
                   <li>Submenu Item 1</li>
                   <li>Submenu Item 2</li>
                 </ul>
                 <li class="dropdown-item">Movies, Music & Video Games</li>
                 <ul class="dropdown-content">
                   <li>Submenu Item 1</li>
                   <li>Submenu Item 2</li>
                 </ul>
                 <li class="dropdown-item">TV & Audio</li>
                 <ul class="dropdown-content">
                   <li>Submenu Item 1</li>
                   <li>Submenu Item 2</li>
                 </ul>
                 <li class="dropdown-item">Watches & Eyewear</li>
                 <ul class="dropdown-content">
                   <li>Submenu Item 1</li>
                   <li>Submenu Item 2</li>
                 </ul>
                 <li class="dropdown-item">Car, Motorbike & Industrial</li>
                 <ul class="dropdown-content">
                   <li>Submenu Item 1</li>
                   <li>Submenu Item 2</li>
                 </ul>

                 {/* Add more sidebar items as needed */}
               </ul>
             </div>
           )}
         </div>

         <div className="whole__search">
           <div className="search__box">
             <input
               type="text"
               className="search"
               placeholder="Search for Products"
             />
           </div>
           <div className="search__categories">
             <select
               name="product_cart"
               id="electro_header_search_categories_dropdown"
             >
               <option value="0" selected="selected">
                 All Categories
               </option>
               <option value="accessories">Accessories</option>
               <option value="cameras-photography">
                 Cameras &amp; Photography
               </option>
               <option value="computer-components">Computer Components</option>
               <option value="gadgets">Gadgets</option>
               <option value="home-entertainment">Home Entertainment</option>
               <option value="laptops-computers">
                 Laptops &amp; Computers
               </option>
               <option value="printers-ink">Printers &amp; Ink</option>
               <option value="smart-phones-tablets">
                 Smart Phones &amp; Tablets
               </option>
               <option value="tv-audio">TV &amp; Audio</option>
               <option value="video-games-consoles">
                 Video Games &amp; Consoles
               </option>
               <option value="a-stereo">Stereo</option>
               <option value="b-home-theatre">Home Theatre</option>
               <option value="c-bluetooth-speakers">Bluetooth Speakers</option>
               <option value="headphones-2">Headphones</option>
               <option value="speakers-2">Speakers</option>
             </select>
           </div>
           <button className="search__icon">
             <span class="material-symbols-outlined sr">search</span>
           </button>
         </div>
       </div>
       <div className="header__right"></div>

       <span className="like hr__item material-symbols-outlined btn">
         favorite
       </span>
       <span class="hr__item material-symbols-outlined btn">person</span>
       <span class=" hr__item material-symbols-outlined btn">shopping_bag</span>
       <div className=" bag__price">$0.00</div>
     </div>
   </div>
 );
}

export default Header;