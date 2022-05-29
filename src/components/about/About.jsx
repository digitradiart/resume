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
                src="https://img.icons8.com/windows/150/ffffff/parse-resumes.png"
                alt="experience"
              />
              <h5>Address</h5>
              <small>Bogor, West Java - Indonesia</small>
            </article>

            <article className="about_card">
              <img
                src="https://img.icons8.com/windows/150/ffffff/parse-resumes.png"
                alt="experience"
              />
              <h5>Education</h5>
              <small>
                Department of Mathematics - IPB University (2014-2018)
              </small>
            </article>

            <article className="about_card">
              <img
                src="https://img.icons8.com/windows/150/ffffff/parse-resumes.png"
                alt="experience"
              />
              <h5>Interests</h5>
              <small>
                Web development, Data Analytics, Teaching, Graphic Design
              </small>
            </article>
          </div>

          <p className="text-light description">
            <small>
              I am a graduate of Mathematics IPB batch 2014-2018. In college, I
              studied applied mathematics. I have an interest in computing. I
              learned to use several computing applications such as Excel,
              Spreadsheet, Matlab, Mathematica, SPSS, Matlab, and Python. I am
              also interested in self-taught about website development and
              graphic design. Since college, I have been a lecturer assistant
              for computing courses and also teaching calculus lessons for first
              year students. I also teach Mathematics for elementary - junior
              high school level.
            </small>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
