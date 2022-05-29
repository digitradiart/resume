import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./experience.css";

import IMG1 from "../../assets/p1-payment.png";
import IMG2 from "../../assets/p2-prayer time.png";
import IMG3 from "../../assets/p3-tim project Digitalent Scholarship 2020.png";
import IMG4 from "../../assets/p4-Book Shelf.png";
import IMG5 from "../../assets/p5-login design.png";
import IMG6 from "../../assets/p6-color code.png";

const data = [
  {
    id: 1,
    title: "Payment Planning Card Design",
    desc: "Desain laman untuk payment planning",
    image: IMG1,
    source: "https://payment-planning-cards.vercel.app/",
  },

  {
    id: 2,
    title: "SAVELINK",
    desc: "Kumpulan tautan penting seputar jadwal shalat, ebooks, dan programming resources",
    image: IMG2,
    source: "https://savelink.netlify.app/",
  },

  {
    id: 3,
    title: "Digitalent Scholarship 2020",
    desc: "Landing page untuk Tim B10",
    image: IMG3,
    source: "https://digitradiart.github.io/B10_DTS20_Progate/",
  },

  {
    id: 4,
    title: "Book Shelf",
    desc: "Simple book marks for our book shelf",
    image: IMG4,
    source: "https://digitradiart.github.io/bookshelf-by-ayu/",
  },

  {
    id: 5,
    title: "Simple Login Design",
    desc: "Simple Login Design",
    image: IMG5,
    source: "https://digitradiart.github.io/loginpage1/",
  },

  {
    id: 6,
    title: "Color Code",
    desc: "Color code changer",
    image: IMG6,
    source: "https://digitradiart.github.io/background-color-changer/",
  },
];

function DesignCertificate() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        View
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className="modalContainer"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="modalHeader">
          <Modal.Title>Graphic Design</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {data.map(({ id, title, desc, image, source }) => {
            return (
              <div className="modal-container text-center">
                <h5>
                  {id}. {title}
                </h5>
                <img src={image} alt={title} />
                <small>{desc}</small>
                <a
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt={title}
                >
                  view
                </a>
              </div>
            );
          })}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DesignCertificate;
