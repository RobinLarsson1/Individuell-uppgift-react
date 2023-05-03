import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiMenu3Line } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { useState } from "react";
import { BurgerMenuData } from "../data/burgerMenuData";
import logo from '../img/logo.png';

const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
    console.log('klick');
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Anpassa storleken beroende på behov (exempelvis 768px)
  };

  // Lyssna på storleksändringar för att uppdatera isMobile vid behov
  window.addEventListener("resize", handleResize);

  // Kör handleResize när komponenten monteras för att initialt sätta rätt värde på isMobile
  React.useEffect(() => {
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div>
        <header>
          <div className="top-header">
            <img src={logo} alt="Logo" className="logo" />
            <div className="icon-div">
              <BiShoppingBag className="menu-icon" />
              <AiOutlineUser className="menu-icon" />
              <RiMenu3Line className="menu-icon" onClick={toggleOverlay} />
            </div>
          </div>
          <input type="text" placeholder="Sök produkt eller varumärke" className="search-input" />
        </header>
        {showOverlay && (
          <div className={showOverlay ? 'overlay active' : 'overlay'}>
            <h2>Navigera</h2>
            <p className="all-products">Alla produkter</p>
            {BurgerMenuData.map((textItem, index) => {
              return (
                <Link to={textItem.path} key={index} className={textItem.cName}>
                  <p>{textItem.title}</p>
                </Link>
              );
            })}
            <h4 className="sub-title">Logga in</h4>
          </div>
        )}
      </div>
    );
  } else {
    // Här kan du skapa din egen navbar för desktop
    return (
      <header>
        <div className="desktop-header">
          <img src={logo} alt="Logo" className="logo" />
          <div className="icon-div">
            <BiShoppingBag className="menu-icon" />
            <AiOutlineUser className="menu-icon" />
          </div>
        </div>
        <input type="text" placeholder="Sök produkt eller varumärke" className="search-input-desktop" />
        <div className="under-cat">
          <Link to="/allaprodukter" className="all-products">Alla produkter</Link>
          {BurgerMenuData.map((textItem, index) => {
            return (
              <Link to={textItem.path} key={index} className="header-link">
                <p className="desktop-header-text">{textItem.title}</p>
              </Link>
            );
          })}
        </div>
      </header>
    );
  }
};

export default Header;
