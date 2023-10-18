import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTruck, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';

function Uppernav() {
  return (
    <div><div className="uppernav">
    <div className="welcome">
      Welcome to Worldwide Electronics Store
    </div>
    <div className="uppernav__icons">
      <div className="uppernav__icons__items"><FontAwesomeIcon icon={faMapMarkerAlt} /> Store Locator</div>|
      <div className="uppernav__icons__items"><FontAwesomeIcon icon={faTruck} /> Track Your Order</div>|
      <div className="uppernav__icons__items"><FontAwesomeIcon icon={faShoppingBag} /> Shop</div>|
      <div className="uppernav__icons__items"><FontAwesomeIcon icon={faUser} /> My Account</div>|
    </div>
  </div></div>
  )
}

export default Uppernav