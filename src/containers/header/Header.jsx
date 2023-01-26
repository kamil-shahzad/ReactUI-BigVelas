import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/HERO.png';
import './header.css';

const Header = () => (
  <div className="velas__header section__padding" id="home">
    <div className="velas__header-content">
      <h1 className="gradient__text">VELLAS&apos;s Big Ape Syndicate</h1>
      <h1 className="gradient__text">Minting DApp</h1>
    </div>

    <div className="velas__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
