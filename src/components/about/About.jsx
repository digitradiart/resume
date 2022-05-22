import React from "react";
import "./about.css";
import ME from "../../assets/faceless2.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="about-me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <img
                src="https://img.icons8.com/windows/60/ffffff/parse-resumes.png"
                alt="experience"
              />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className="about_card">
              <img
                src="https://img.icons8.com/windows/60/ffffff/parse-resumes.png"
                alt="experience"
              />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>

            <article className="about_card">
              <img
                src="https://img.icons8.com/windows/60/ffffff/parse-resumes.png"
                alt="experience"
              />
              <h5>Projects</h5>
              <small>20+ completed projects</small>
            </article>
          </div>

          <p className="text-light description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sit
            reiciendis assumenda distinctio quis itaque nobis ullam tempore
            aspernatur optio placeat numquam qui reprehenderit perferendis
            autem, enim iusto, nostrum vero.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
