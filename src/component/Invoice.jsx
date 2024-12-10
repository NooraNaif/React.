import { useLocation } from "react-router-dom";
import Mainlayout from "./Mainlayout";

const invoiceStyle = {
  margin: "100px auto",
  maxWidth: "800px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "15px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  background: "linear-gradient(to bottom, #fffff, #ccccc)",
};

const productStyle = {
  padding: "10px 0",
  borderBottom: "1px solid #ddd",
};

const Invoice = () => {
  const location = useLocation();
  const { username, shippingAddress, cart, totalPrice } = location.state || {};

  if (!cart) {
    return (
      <Mainlayout>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>No Invoice Data Available!</h2>
        </div>
      </Mainlayout>
    );
  }

  return (
    <Mainlayout>
      <div style={invoiceStyle}>
        <h2 style={{ textAlign: "center" }}>Invoice</h2>
        <p><strong>Name:</strong> {username}</p>
        <p><strong>Shipping Address:</strong> {shippingAddress}</p>
        <h3>Order Details</h3>
        <div>
          {cart.map((product) => (
            <div key={product.id} style={productStyle}>
              <h4>{product.Description}</h4>
              <p>Price: ${product.Price}</p>
            </div>
          ))}
        </div>
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          Total Price: ${totalPrice}
        </h3>
      </div>
    </Mainlayout>
  );
};

export default Invoice;