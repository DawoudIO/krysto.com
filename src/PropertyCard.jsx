import React from "react";

function PropertyCard({ property }) {
  const safeId = property.name.toLowerCase().replace(/[^a-z0-9]/g, "-");

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
            <> ( Available: {property.availableDate} )</>
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
        <a href={property.zillowLink} className="btn btn-primary" target="_blank" rel="noreferrer">
          View on Zillow
        </a>
      </div>
    </div>
  );
}

export default PropertyCard;
