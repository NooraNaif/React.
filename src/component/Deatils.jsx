import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Mainlayout from "./Mainlayout";
import { useLocation } from "react-router-dom";

// تنسيقات ستايل
const productBoxStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  margin: "100px",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  marginBottom: "20px",
};

const imageStyle = {
  width: "100%",
  maxWidth: "400px",
  height: "auto",
  borderRadius: "10px",
};

const headingStyle = {
  fontSize: "2rem",
  color: "#333",
  margin: "30px",
};

const infoStyle = {
  fontSize: "1.1rem",
  margin: "5px 0",
  color: "#555",
};

const buttonContainerStyle = {
  marginTop: "20px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#de4d66",
  border: "none",
  borderRadius: "5px",
  color: "#fff",
  cursor: "pointer",
  marginRight: "10px",
  transition: "background-color 0.3s ease",
};

const buyButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#ffc6d0",
  border: "none",
  borderRadius: "5px",
  color: "#fff",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const Deatils = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { product } = location.state || {};
  
  
  if (!product) {
    return (
      <Mainlayout>
        <div className="container mt-5">
          <h2>Product details are unavailable!</h2>
        </div>
      </Mainlayout>
    );
  }

  
  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product }); 
    dispatch({ type: "INCREMENT" });  
    Swal.fire({
      title: "Added to Cart",
      text: "You have added an item to your cart!",
      icon: "success",
      confirmButtonText: "OK"
    });
  };

  return (
    <Mainlayout>
      <div className="container mt-5">
        <div style={productBoxStyle}>
          <div className="row">
            <div className="col-md-6 ">
              <img
                src={product.ImageURL}
                alt={product.Description}
                style={imageStyle}
              />
            </div>
            <div className="col-md-6 mt-5">
              <h1 style={headingStyle}>{product.Description}</h1>
              <p style={infoStyle}><strong>Brand:</strong> {product.Brand}</p>
              <p style={infoStyle}><strong>Category:</strong> {product.Category}</p>
              <p style={infoStyle}><strong>Price:</strong> ${product.Price}</p>
              <div style={buttonContainerStyle}>
                <button 
                  style={buttonStyle}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <Link to="/checkout">
                  <button style={buyButtonStyle}>Pay Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};

export default Deatils;