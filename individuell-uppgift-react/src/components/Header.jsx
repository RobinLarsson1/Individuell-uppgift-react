import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiMenu3Line } from 'react-icons/ri';
import { useState } from "react";



import logo from '../img/logo.png'


const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  }
  


  return (
    <div>
      <header>
        <div className="top-header">
          <img src={logo} alt="Logo" className="logo" />
          <RiMenu3Line className="menu-icon" onClick={toggleOverlay} />
        </div>
        <input type="text" placeholder="Sök produkt eller varumärke" className="search-input" />
      </header>
      {showOverlay && (
        <div className={`overlay ${showOverlay ? 'active' : ''}`}>
          <ul className="hamburger-menu">
            <h3>Navigera</h3>
              <h4>Alla produkter</h4>
              <li>Skateboards</li>
              <li>Longboards / Cruisers</li>
              <li>Surfboards</li>
              <li>Kiteboards</li>
              <h5>Logga in</h5>
              <h5>Kundkorg</h5>
          </ul>
        </div>
      )}
    </div>
  );
};


export default Header;