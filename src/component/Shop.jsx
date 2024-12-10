import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Papa from "papaparse";
import Mainlayout from "./Mainlayout";
import { Link } from "react-router-dom";

function Shop() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("/sport_products.csv") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the CSV file");
        }
        return response.text();
      })
      .then((text) => {
        const results = Papa.parse(text, { header: true });
        setData(results.data);
      })
      .catch((error) => console.error("Error fetching the file:", error));
  }, []);

  const appStyle = {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const h1Style = {
    color: "#DE4D66",
    fontSize: "4.5rem",
    marginBottom: "20px",
    fontFamily: 'Cookie',
  };

  const productsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  const productCardStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const productImageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  };

  const h2Style = {
    fontSize: "1.2rem",
    marginTop: "10px",
    color: "#333",
  };

  const pStyle = {
    color: "#555",
    fontSize: "1rem",
    margin: "5px 0",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#DE4D66",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <Mainlayout>
      <div className="container">
        <div style={appStyle}>
          <h1 style={h1Style} className="mt-5">Our Products</h1>
          {data.length > 0 ? (
            <div style={productsStyle}>
              {data.map((product, index) => (
                <div key={index} style={productCardStyle}>
                  <img
                    src={product.ImageURL}
                    alt={product.Description}
                    style={productImageStyle}
                  />
                  <h2 style={h2Style}>{product.Description}</h2>
                  <p style={pStyle}>
                    <strong>Brand:</strong> {product.Brand}
                  </p>
                  <p style={pStyle}>
                    <strong>Category:</strong> {product.Category}
                  </p>
                  <p style={pStyle}>
                    <strong>Price:</strong> ${product.Price}
                  </p>

                 
                  <Link to="/deatils" state={{ product }}>
                    <button style={buttonStyle}>Shop</button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </Mainlayout>
  );
}

export default Shop;