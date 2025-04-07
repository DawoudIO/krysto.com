// PropertyCard.jsx
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function PropertyCard({ property }) {
  const safeId = property.name.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;

    const mailtoLink = `mailto:info@krysto.com?subject=Viewing Request for ${property.name}` +
      `&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APreferred Viewing Date: ${date}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div id={`carousel-${safeId}`} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {property.images.map((img, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <img
                src={img}
                className="d-block w-100"
                alt={`${property.name} ${index + 1}`}
                style={{ height: "200px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        {property.images.length > 1 && (
          <>
            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${safeId}`} data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${safeId}`} data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>

      <div className="card-body">
        <h5 className="card-title">{property.name}</h5>
        <p className="card-text">{property.description}</p>
        <p>
          <strong>Status:</strong> {property.available ? "For Rent" : "Not Available"}
          {property.available && property.availableDate && (
            <> (Available: {property.availableDate})</>
          )}
        </p>
        <p>
          <strong>Address:</strong> {property.fullAddress} (
          <a href={property.address} target="_blank" rel="noreferrer">Map</a>)
        </p>
        <div className="mb-2">
          <video width="100%" controls>
            <source src={property.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <a href={property.zillowLink} className="btn btn-primary me-2" target="_blank" rel="noreferrer">
          View on Zillow
        </a>
        {property.available && (
          <>
            <Button variant="outline-success" onClick={() => setShowModal(true)}>
              Request for Viewing
            </Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Schedule a Viewing for {property.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Preferred Viewing Date</Form.Label>
                    <Form.Control type="date" name="date" required />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    Submit Request
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </>
        )}
      </div>
    </div>
  );
}

export default PropertyCard;
