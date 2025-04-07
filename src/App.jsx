// App.jsx
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyCard from "./PropertyCard";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/data/properties.json")
      .then((response) => response.json())
      .then((data) => setProperties(data.properties));
  }, []);

  return (
    <div className="container mt-4">
      {/* Header with Navigation */}
      <header className="d-flex justify-content-between align-items-center mb-5">
        <h1>Krysto Property Management</h1>
        <nav>
          <a className="btn btn-outline-primary me-2" href="#welcome">Welcome</a>
          <a className="btn btn-outline-primary me-2" href="#listings">Property Listings</a>
        </nav>
      </header>

      {/* Welcome Section */}
      <section id="welcome" className="mb-5">
        <h2>Welcome</h2>
        <p>
          Welcome to Krysto Property Management! We specialize in showcasing high-quality
          homes for rent in the Pacific Northwest. Please browse our listings and feel free
          to schedule a viewing if you're interested in one of our available properties.
        </p>
      </section>

      {/* Property Listings */}
      <section id="listings" className="row mb-5">
        {properties.map((property, idx) => (
          <div className="col-md-6 mb-4" key={idx}>
            <PropertyCard property={property} />
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-4 border-top">
        <small>&copy; {new Date().getFullYear()} Krysto Property Management. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
