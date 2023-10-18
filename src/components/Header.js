import React from 'react';


function Header() {
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
            <MenuTwoToneIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
