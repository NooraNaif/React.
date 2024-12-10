import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";  
import { Link as ScrollLink } from "react-scroll";

const Mainlayout = ({ children }) => {
  const [showCart, setShowCart] = useState(false); 
  const cart = useSelector((state) => state.cartState.cart);  
  const count = useSelector((state) => state.cartState.count);  

  const handleCartToggle = () => {
    setShowCart(!showCart);  
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo-container">
            <img src="/Logo.PNG" alt="Logo" className="logo" />
            <ul className="navbar-links m-2">
              <li>
                <RouterLink to="/" className="navbar-item">Home</RouterLink>
              </li>
              <li>
                <RouterLink to="/shop" className="navbar-item">Shop</RouterLink>
              </li>
              <li>
                <ScrollLink to="section-two" smooth={true} duration={800} offset={-50} className="navbar-item">Services</ScrollLink>
              </li>
              <li>
                <ScrollLink to="aboutus" smooth={true} duration={800} offset={-50} className="navbar-item">About Us</ScrollLink>
              </li>
            </ul>
          </div>

          <div className="shop-link">
            <i className="fas fa-shopping-cart" onClick={handleCartToggle}></i>
            <span className="badge rounded-pill badge-notification bg-danger">({count})</span>
           
            {showCart && (
              <div className="dropdown-cart">
                <div className="cart-container">
                  <h5>Shopping Cart</h5>
                  {cart.length === 0 ? (
                    <p>Your cart is empty!</p>
                  ) : (
                    <ul>
                      {cart.map((item, index) => (
                        <li key={index}>
                          <img src={item.ImageURL} alt={item.Description} style={{ width: "50px" }} />
                          <p>{item.Description} - ${item.Price}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                  <button onClick={handleCartToggle}>Close</button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer id="footer4" style={{ marginTop: "10vh"
        
       }}>
        <div className="col4 col1-4">
          <h3><span style={{fontFamily:"cookie", color: "#2980b9",}}>FitLIFE</span></h3>
          <p style={{ color: "#81818f"}}>
            Made with <span style={{ color: "#DE4D66" }}>♥</span> by Nora 
          </p>
          <div className="social4">
            <a href="#" className="link4">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="#" className="link4">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="link4">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <p style={{ color: "#81818f", fontSize: "smaller" }}>
            2024 © All Rights Reserved
          </p>
        </div>
        <div className="col4 col2-4">
          <p>About</p>
          <p>Privacy Policy</p>
          <p>Terms of service</p>
        </div>
        <div className="col4 col3-4">
          <p>Services</p>
          <p>shop</p>
          <p>Partner with us</p>
        </div>
        <div className="backdrop4"></div>
      </footer>
    </>
  );
};

export default Mainlayout;