import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Mainlayout from "./Mainlayout";


const checkoutStyle = {
  margin: "100px auto",
  maxWidth: "800px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const productStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 0",
  borderBottom: "1px solid #ddd",
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ddd",
  borderRadius: "5px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#DE4D66",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "20px",
  display: "block",
  width: "100%",
};


const Checkout = () => {
  const cart = useSelector((state) => state.cartState.cart); 

  
  const totalPrice = cart.reduce((total, product) => {
    const price = parseFloat(product.Price); 
    return price && !isNaN(price) ? total + price : total; 
  }, 0);

  const [username, setUsername] = useState(""); 
  const [shippingAddress, setShippingAddress] = useState(""); 
  const navigate = useNavigate();

  const handleProceedToInvoice = () => {
    if (!username || !shippingAddress) {
      alert("Please fill in all fields!");
      return;
    }
    navigate("/invoice", { state: { username, shippingAddress, cart, totalPrice } });
  };

  if (cart.length === 0) {
    return (
      <Mainlayout>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Your cart is empty!</h2>
        </div>
      </Mainlayout>
    );
  }

  return (
    <Mainlayout>
      <div style={checkoutStyle}>
        <h2 style={{ textAlign: "center" }}>Checkout</h2>
        <h3>Order Summary</h3>
        <div>
          {cart.map((product) => (
            <div key={product.id} style={productStyle}>
              <img
                src={product.ImageURL}
                alt={product.Description}
                style={{ width: "100px", borderRadius: "5px" }}
              />
              <div style={{ flex: 1, marginLeft: "20px" }}>
                <h4>{product.Description}</h4>
                <p>Price: ${product.Price}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          Total Price: ${totalPrice.toFixed(2)} 
        </h3>
        <div>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <label>Shipping Address:</label>
          <input
            type="text"
            placeholder="Enter your address"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button style={buttonStyle} onClick={handleProceedToInvoice}>
          Proceed to Invoice
        </button>
      </div>
    </Mainlayout>
  );
};

export default Checkout;