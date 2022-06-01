import React from "react";
import SERTIF from "../../assets/sertif-web/web2.jpg";

const CTA = () => {
  return (
    <div className="cta">
      <a href={SERTIF} download className="btn">
        Download CV
      </a>

      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
