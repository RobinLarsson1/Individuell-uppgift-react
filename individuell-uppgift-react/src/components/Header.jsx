import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiMenu3Line } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { useState } from "react";
import { BurgerMenuData } from "../data/burgerMenuData";
import logo from '../img/logo.png';
import { useEffect } from "react";
import { useRecoilState } from "recoil"
import { isMobileState } from "../data/productsAtom"
import SearchBar from "./SearchBar";


const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMobile, setIsMobile] = useRecoilState(isMobileState)

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
    console.log('klick');
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);


  useEffect(() => {
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
            <Link to="/"><img src={logo} alt="Logo" className="logo-mobile" /></Link>
            <div className="icon-div">
              <BiShoppingBag className="menu-icon-mobile" />
              <Link to="/login"><AiOutlineUser className="menu-icon-mobile" /></Link>
              <RiMenu3Line className="menu-icon-mobile" onClick={toggleOverlay} />
            </div>
          </div>
          <SearchBar />
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
          <Link to="/"><img src={logo} alt="Logo" className="logo-desktop" /></Link>
          <div className="icon-div">
            <BiShoppingBag className="menu-icon-desktop" />
            <Link to="/login"> <AiOutlineUser className="menu-icon-desktop" /> </Link>
          </div>
        </div>
        <SearchBar />
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
