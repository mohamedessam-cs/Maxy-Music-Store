import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useCart } from "react-use-cart";
function NavBar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <div>
      <div className="tm-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4 col-sm-3 tm-site-name-container">
              <Link to="/" className="tm-site-name">
              <i class="fa-solid fa-headphones"></i> Maxy
              </Link>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-9">
              <div className="mobile-menu-icon">
                <nav>
                  <i className="fa fa-bars" onClick={() => setOpen(!open)} />

                  {open && (
                    <div className="mobile-navbar">
                      <Link to="/">Home</Link>
                      <Link to="/about">About</Link>
                      <Link to="/store">Shop</Link>
                      <Link to="/cart">Cart</Link>
                    </div>
                  )}
                </nav>
              </div>
              <nav className="tm-nav">
                <ul>
                  <li>
                    <Link className="ml-30px" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>

                  <li>
                    <Link to="/store">Store</Link>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      className="cart-icon"
                    
                    >
                      <i className="fa-solid fa-cart-shopping"></i> 
                     <span className="cart-count"> ({totalItems}) </span>
                    <h1>-.</h1>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
