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
    <div className="container mt-5">
      <h1 className="mb-4">Krysto Property Management</h1>
      <div className="row">
        {properties.map((property, idx) => (
          <div className="col-md-6" key={idx}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
