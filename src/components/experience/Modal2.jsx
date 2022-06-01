import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./experience.css";

import IMG1 from "../../assets/sertif-data/Python.jpg";
import IMG2 from "../../assets/sertif-data/python1.jpg";
import IMG3 from "../../assets/sertif-data/python2.jpg";
import IMG4 from "../../assets/sertif-data/python3.jpg";
import IMG5 from "../../assets/sertif-data/visualisasi data.jpg";

const data = [
  {
    id: 1,
    title: "Dicoding",
    image: IMG1,
  },

  {
    id: 2,
    title: "CISCO",
    image: IMG2,
  },

  {
    id: 3,
    title: "CISCO",
    image: IMG3,
  },

  {
    id: 4,
    title: "Dicoding",
    image: IMG4,
  },

  {
    id: 5,
    title: "Dicoding",
    image: IMG5,
  },
];

function DataCertificate() {
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
          <Modal.Title>Data Analytics</Modal.Title>
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

export default DataCertificate;
