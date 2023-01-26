import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="velas__navbar">
      <div className="velas__navbar-links">
        <div className="velas__navbar-links_logo">
            Velas
          {/* You can update the logo here */}
          {/* <img src={logo} /> */}
        </div>
        <div className="velas__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#collection">Collections</a></p>
          <p><a href="#minting">Minting</a></p>
          <p><a href="#about">About</a></p>
        </div>
      </div>
      <div className="velas__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="velas__navbar-menu_container scale-up-center">
          <div className="velas__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wvelas">Collections</a></p>
            <p><a href="#possibility">Minting </a></p>
            <p><a href="#about">About</a></p>
          </div>
          <div className="velas__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
