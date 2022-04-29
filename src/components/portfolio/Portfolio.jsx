import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/p1-payment.png';
import IMG2 from '../../assets/p2-prayer time.png';
import IMG3 from '../../assets/p3-tim project Digitalent Scholarship 2020.png';
import IMG4 from '../../assets/p4-Book Shelf.png';
import IMG5 from '../../assets/p5-login design.png';
import IMG6 from '../../assets/p6-color code.png';

const data = [
  {
    id: 1,
    title: 'Payment Planning Card Design',
    desc: 'Desain laman untuk payment planning',
    image: IMG1,
    source: 'https://payment-planning-cards.vercel.app/',
  },

  {
    id: 2,
    title: 'SAVELINK',
    desc: 'Laman sederhana berisi tautan penting seputar jadwal shalat, muslim ebooks, serta programming ebooks/resources',
    image: IMG2,
    source: 'https://savelink.netlify.app/',
  },

  {
    id: 3,
    title: 'Digitalent Scholarship 2020',
    desc: 'Landing page untuk Tim B10',
    image: IMG3,
    source: 'https://digitradiart.github.io/B10_DTS20_Progate/',
  },

  {
    id: 4,
    title: 'Book Shelf',
    desc: 'Simple book marks for our book shelf',
    image: IMG4,
    source: 'https://digitradiart.github.io/bookshelf-by-ayu/',
  },

  {
    id: 5,
    title: 'Simple Login Design',
    desc: 'Simple Login Design',
    image: IMG5,
    source: 'https://digitradiart.github.io/loginpage1/',
  },

  {
    id: 6,
    title: 'Color Code',
    desc: 'Color code changer',
    image: IMG6,
    source: 'https://digitradiart.github.io/background-color-changer/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some of projects I've create</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, title, desc, image, source }) => {
          return (
            <div className="card-container">
              {/* <!-- item 1 --> */}
              <div className="flip-card" key={id}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={image} alt="{title}" />
                  </div>
                  <div className="flip-card-back">
                    <h2>{title}</h2>
                    <p className="decription">{desc}</p>
                    <a href={source} target="_blank" rel="noopener noreferrer">
                      review
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- end item 1 --> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
