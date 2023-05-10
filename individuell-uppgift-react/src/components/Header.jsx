import React from "react";
import { Link } from "react-router-dom";
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
import { useRecoilValue } from "recoil";
import { cartState } from "../data/productsAtom";
import { isLoggedInState } from "../data/productsAtom";
import { useNavigate } from 'react-router-dom';
import './styling/Header.css'


const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMobile, setIsMobile] = useRecoilState(isMobileState)
  const isCartEmpty = useRecoilValue(cartState).length === 0;
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const navigate = useNavigate();

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  window.addEventListener("resize", handleResize);


  useEffect(() => {
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


if (!isLoggedIn) {

  if (isMobile) {
    return (
      <div>
        <header>
          <div className="top-header">
            <Link to="/"><img src={logo} alt="Logo" className="logo-mobile" /></Link>
            <div className="icon-div">
              <Link to="/cart"><BiShoppingBag className={isCartEmpty ? 'empty-cart-icon-mobile' : 'filled-cart-icon-mobile'} />
              </Link>
              <Link to="/login"><AiOutlineUser className="menu-icon-mobile" /></Link>
              <RiMenu3Line className="menu-icon-mobile" onClick={toggleOverlay} />
            </div>
          </div>
          <SearchBar />
          <div className="under-cat">
          <Link to="/products" className="all-products">Alla produkter</Link>
        </div>
        </header>
        {showOverlay && (
          <div className={showOverlay ? 'overlay active' : 'overlay'}>
            <h2>Navigera</h2>
            <Link to="/products">
              <p className="all-products">Alla produkter</p>
            </Link>
            {BurgerMenuData.map((textItem, index) => {
              return (
                <Link to={textItem.path} key={index} className={textItem.cName}>
                  <p>{textItem.title}</p>
                </Link>
              );
            })}
            <Link to="/login">
              <h4 className="login-mobile">Logga in</h4>
            </Link>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <header>
        <div className="desktop-header">
          <Link to="/"><img src={logo} alt="Logo" className="logo-desktop" /></Link>
          <div className="icon-div">
            <Link to="/cart"><BiShoppingBag className={isCartEmpty ? 'empty-cart-icon' : 'filled-cart-icon'} />
            </Link>
            <Link to="/login">
              <AiOutlineUser className="menu-icon-desktop" />
            </Link>
          </div>
        </div>
        <SearchBar />
        <div className="under-cat">
          <Link to="/products" className="all-products">Alla produkter</Link>
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
} else if (isLoggedIn){
  return (
  <header>
        <div className="desktop-header">
          <Link to="/"><img src={logo} alt="Logo" className="logged-in-logo" /></Link>
          <div className="icon-div">
            {isLoggedIn ? (
            <>
              <p onClick={handleLogout} className="log-out">
                Logga ut
              </p>
            <Link to="/cart"><BiShoppingBag className={isCartEmpty ? 'empty-cart-icon' : 'filled-cart-icon'} />
            </Link>
            </>
          ) : (
            <Link to="/login">
              <AiOutlineUser className="menu-icon-desktop" />
            </Link>
          )}
          </div>
        </div>
        <SearchBar />
        <div className="under-cat">
          <Link to="/admin/products" className="all-products">Redigera produkter</Link>
          <Link to="/addproduct" className="add-product">Lägg till produkt</Link>
          <Link to="/admin/users" className="add-product">Användare</Link>
          <Link to="/admin/addusers" className="add-product">Lägg till användare</Link>
        </div>
      </header>
      )
}
}


export default Header;
