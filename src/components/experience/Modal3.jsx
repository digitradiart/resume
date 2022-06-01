import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./experience.css";

import IMG1 from "../../assets/sertif-seminar/ilovepdf_merged (2)_page-0001.jpg";
import IMG2 from "../../assets/sertif-seminar/ilovepdf_merged (2)_page-0002.jpg";
import IMG3 from "../../assets/sertif-seminar/ilovepdf_merged (2)_page-0003.jpg";
import IMG4 from "../../assets/sertif-seminar/ilovepdf_merged (2)_page-0005.jpg";
import IMG5 from "../../assets/sertif-seminar/ilovepdf_merged (2)_page-0006.jpg";
import IMG6 from "../../assets/sertif-seminar/ilovepdf_merged (2)_page-0007.jpg";
import IMG7 from "../../assets/sertif-seminar/ilovepdf_merged (2)_page-0008.jpg";
import IMG8 from "../../assets/sertif-seminar/ilovepdf_merged (2)_page-0009.jpg";
import IMG9 from "../../assets/sertif-seminar/ilovepdf_merged (2)_page-0010.jpg";
import IMG10 from "../../assets/sertif-seminar/ilovepdf_merged (2)_page-0011.jpg";
import IMG11 from "../../assets/sertif-seminar/ilovepdf_merged (2)_page-0012.jpg";
import IMG12 from "../../assets/sertif-seminar/ilovepdf_merged (2)_page-0013.jpg";
import IMG13 from "../../assets/sertif-seminar/ilovepdf_merged (2)_page-0004.jpg";

const data = [
  {
    id: 1,
    title: "Udemy",
    image: IMG1,
  },

  {
    id: 2,
    title: "Dicoding",
    image: IMG2,
  },

  {
    id: 3,
    title: "Progate",
    image: IMG3,
  },

  {
    id: 4,
    title: "Progate",
    image: IMG4,
  },

  {
    id: 5,
    title: "Dicoding",
    image: IMG5,
  },

  {
    id: 6,
    title: "Progate",
    image: IMG6,
  },

  {
    id: 7,
    title: "Dicoding",
    image: IMG7,
  },
  {
    id: 8,
    title: "Dicoding",
    image: IMG8,
  },
  {
    id: 9,
    title: "Dicoding",
    image: IMG9,
  },
  {
    id: 10,
    title: "Dicoding",
    image: IMG10,
  },
  {
    id: 11,
    title: "Progate",
    image: IMG11,
  },
  {
    id: 12,
    title: "Dicoding",
    image: IMG12,
  },
  {
    id: 13,
    title: "Dicoding",
    image: IMG13,
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
          <Modal.Title>Seminars</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {data.map(({ id, title, image }) => {
            return (
              <div className="modal-container text-center">
                <h5>
                  {id}. {title}
                </h5>
                <img src={image} alt={title} />
              </div>
            );
          })}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DesignCertificate;
