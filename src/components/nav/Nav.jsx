import React from 'react';
import './nav.css';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <img src="https://img.icons8.com/ios-filled/25/ffffff/dog-house.png" alt="home" />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <img src="https://img.icons8.com/ios-glyphs/25/ffffff/user--v1.png" alt="about" />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <img src="https://img.icons8.com/ios-glyphs/25/ffffff/portfolio.png" alt="experience" />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <img src="https://img.icons8.com/pastel-glyph/25/ffffff/folder-invoices--v2.png" alt="portfolio" />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <img src="https://img.icons8.com/ios-filled/25/ffffff/phone.png" alt="contact" />
      </a>
    </nav>
  );
};

export default Nav;
