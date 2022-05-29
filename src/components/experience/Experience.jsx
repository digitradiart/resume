import React from "react";
import "./experience.css";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import WebCertificate from "./Modal";
import DataCertificate from "./Modal2";
import DesignCertificate from "./Modal3";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I've been Learning</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience_content">
          <div className="experience_cards">
            <article className="experience_card">
              <img
                src="https://img.icons8.com/windows/150/ffffff/parse-resumes.png"
                alt="experience"
              />
              <h5>Web Development</h5>
              <WebCertificate></WebCertificate>
            </article>

            <article className="experience_card">
              <img
                src="https://img.icons8.com/windows/150/ffffff/parse-resumes.png"
                alt="experience"
              />
              <h5>Data Analytics</h5>
              <DataCertificate></DataCertificate>
            </article>

            <article className="experience_card">
              <img
                src="https://img.icons8.com/windows/150/ffffff/parse-resumes.png"
                alt="experience"
              />
              <h5>Graphic Design</h5>
              <DesignCertificate></DesignCertificate>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
