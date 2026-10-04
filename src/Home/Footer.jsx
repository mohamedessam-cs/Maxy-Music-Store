
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="maxy-footer">

      <div className="container">

        <div className="row footer-content">

          {/* Brand */}
          <div className="col-lg-4 col-md-6 mb-4">

            <h2 className="footer-logo">
              MAXY<span>.</span>
            </h2>

            <p className="footer-description">
              Premium musical instruments for musicians
              who want to create something extraordinary.
            </p>

            {/* Social Media */}
            <div className="footer-social">

              <a href="https://www.facebook.com/share/1LQi9qGRg7/" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#youtube">
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a href="https://github.com/mohamedessam-cs " target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>

            </div>

          </div>


          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">

            <h4 className="footer-title">
              Quick Links
            </h4>

            <ul className="footer-links">

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/store">Store</Link>
              </li>

              <li>
                <Link to="/cart">Cart</Link>
              </li>

            </ul>

          </div>


          {/* Customer Support */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h4 className="footer-title">
              Customer Support
            </h4>

            <ul className="footer-links">

              <li>
                <a href="#faq">FAQ</a>
              </li>

              <li>
                <a href="#shipping">Shipping & Delivery</a>
              </li>

              <li>
                <a href="#returns">Returns & Refunds</a>
              </li>

              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>

            </ul>

          </div>


          {/* Contact */}
          <div className="col-lg-3 col-md-6 mb-4">

            <h4 className="footer-title">
              Contact Us
            </h4>

            <div className="footer-contact">

              <p>
                <i className="fa-solid fa-location-dot"></i>
                Egypt
              </p>

              <p>
                <i className="fa-solid fa-envelope"></i>
                info@maxymusic.com
              </p>

              <p>
                <i className="fa-solid fa-phone"></i>
                +20 100 000 0000
              </p>

            </div>

          </div>

        </div>


        {/* Footer Bottom */}
        <div className="footer-bottom">

          <p>
            Copyright © 2026 <span>MAXY</span>. All Rights Reserved.
          </p>

          <p>
            Premium Musical Instruments
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

