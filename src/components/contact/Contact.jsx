import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="contact__container container">
        <div className="contact__socials">
          <div className="contact-image">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/material-outlined/150/ffffff/github.png"
                alt="github"
              />
            </a>
            <h5>Github</h5>
          </div>

          <div className="contact-image">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/150/ffffff/linkedin-circled--v1.png"
                alt="linkedin"
              />
            </a>
            <h5>LinkedIn</h5>
          </div>

          <div className="contact-image">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/150/ffffff/telegram-app.png"
                alt="telegram"
              />
            </a>
            <h5>Telegram</h5>
          </div>

          <div className="contact-image">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/glyph-neue/150/ffffff/instagram-new.png"
                alt="instagram"
              />
            </a>
            <h5>Instagram</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
