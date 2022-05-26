import React from "react";
import "./footer.css";
import Today from "./Today";

const Footer = () => {
  return (
    <section id="footer">
      <div>
        <h5>Bachelor Degree of Mathematics</h5>
        <h2>Ayu Agustina, S.Si</h2>
      </div>
      <div>
        <Today />
      </div>
    </section>
  );
};

export default Footer;
