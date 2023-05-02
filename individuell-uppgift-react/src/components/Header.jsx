import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiMenu3Line } from 'react-icons/ri';
import { useState } from "react";


import logo from '../img/logo.png'


const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false)

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  }


  return (
    <header>
      <div className="top-header">
        <img src={logo} alt="Logo" className="logo" />
        <RiMenu3Line className="menu-icon" onClick={toggleOverlay} />
      </div>
        <input type="text" placeholder="Sök produkt eller varumärke" className="search-input" />
        {showOverlay && (
          <div className="burger-menu">
            <ul>
              <li>Hej</li>
              <li>Hejdå</li>
              <li>hehe</li>
            </ul>
          </div>
        )}
    </header>
  );
};

export default Header;