import React from "react";

const HeaderSocials = () => {
  return (
    <>
      <div className="header__socials">
        <a
          href="https://github.com/digitradiart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/material-outlined/150/ffffff/github.png"
            alt="github"
          />
        </a>
        <a
          href="https://id.linkedin.com/in/ayuagst/in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/150/ffffff/linkedin-circled--v1.png"
            alt="linkedin"
          />
        </a>
        <a
          href="https://www.instagram.com/digitradiart/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/glyph-neue/150/ffffff/instagram-new.png"
            alt="instagram"
          />
        </a>
      </div>
    </>
  );
};

export default HeaderSocials;
