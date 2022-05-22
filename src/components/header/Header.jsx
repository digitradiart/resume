import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/faceless2.png";
import HeaderSocials from "./HeaderSocials";
// import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="center-header">
          <h5 className="center-header-child">Hello I'm</h5>
          <h1 className="center-header-child">Ayu Agustina</h1>
          <h5 className="center-header-child">Fullstack Developer</h5>
          <CTA className="center-header-child" />
        </div>

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
