import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="contact__container container">
        <div className="contact__socials">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/material-outlined/25/ffffff/github.png"
              alt="github"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/25/ffffff/linkedin-circled--v1.png"
              alt="linkedin"
            />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/25/ffffff/linkedin-circled--v1.png"
              alt="linkedin"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/glyph-neue/25/ffffff/instagram-new.png"
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
