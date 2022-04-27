import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/faceless2.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ayu Agustina</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <div className="scroll-down">
          <a href="#about">Scroll Down</a>
        </div>

        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
