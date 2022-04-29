import React from 'react';
import './portfolio.css';
import IMG from '../../assets/p1-payment.png';

const data = [
  {
    id: 1,
    title: 'Payment Planning Cards Design',
    desc: 'lorem ipsum dolorsit amet',
    image: IMG,
    source: 'https://payment-planning-cards.vercel.app/',
  },

  {
    id: 2,
    title: 'TITLE 2',
    desc: 'lorem ipsum dolorsit amet',
    image: 'https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_960_720.jpg',
    source: 'https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_960_720.jpg',
  },

  {
    id: 3,
    title: 'TITLE 2',
    desc: 'lorem ipsum dolorsit amet',
    image: 'https://cdn.pixabay.com/photo/2022/04/22/20/13/montmartre-7150549_960_720.jpg',
    source: 'https://cdn.pixabay.com/photo/2022/04/22/20/13/montmartre-7150549_960_720.jpg',
  },

  {
    id: 4,
    title: 'TITLE 2',
    desc: 'lorem ipsum dolorsit amet',
    image: 'https://cdn.pixabay.com/photo/2022/04/22/20/13/montmartre-7150549_960_720.jpg',
    source: 'https://cdn.pixabay.com/photo/2022/04/22/20/13/montmartre-7150549_960_720.jpg',
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
