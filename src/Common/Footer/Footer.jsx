import React from "react";
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-5">
      <div className="container">
        {/* Centering Row */}
        <div className="row justify-content-start text-center">
          {/* Left Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold">INVICTUS</h5>
            <p className="mb-1">Invictus Pvt. Ltd.</p>
            <p className="mb-1">00000000,</p>
            <p className="mb-1">2nd Main Road</p>
            <p className="mb-1">HSR Sector 3</p>
            <p>Chennai - 123321</p>
            {/* Social Media Icons */}
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-dark">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-dark">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-dark">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-dark">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold">Quick links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Business Trends
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Terms & conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
