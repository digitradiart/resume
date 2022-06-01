import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./experience.css";

import IMG1 from "../../assets/sertif-web/web2.jpg";
import IMG2 from "../../assets/sertif-web/Web.jpg";
import IMG4 from "../../assets/sertif-web/Front End Web.jpg";
import IMG5 from "../../assets/sertif-web/Javascript.jpg";
import IMG6 from "../../assets/sertif-web/Node JS.jpg";
import IMG7 from "../../assets/sertif-web/PWA.jpg";
import IMG8 from "../../assets/sertif-web/Software Dev.jpg";

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
    title: "Dicoding",
    image: IMG4,
  },

  {
    id: 4,
    title: "Dicoding",
    image: IMG5,
  },

  {
    id: 5,
    title: "Progate",
    image: IMG6,
  },

  {
    id: 6,
    title: "Dicoding",
    image: IMG7,
  },
  {
    id: 7,
    title: "Dicoding",
    image: IMG8,
  },
];

function WebCertificate() {
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
          <Modal.Title>Web Development</Modal.Title>
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

export default WebCertificate;
