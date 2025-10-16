import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className= "py-3" style = {{ backgroundColor: "#6050DC", color: "white"}} >
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          {/* Brand Section */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold text-uppercase">HoodCart</h5>
            <p className="small text-secondary mb-0">
              Your one-stop shop for quality urban essentials.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-semibold text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a className="text-white text-decoration-none" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-white text-decoration-none" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-white text-decoration-none" href="#">
                  Shop
                </a>
              </li>
              <li>
                <a className="text-white text-decoration-none" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 text-center text-md-end">
            <h6 className="fw-semibold text-uppercase mb-3">Follow Us</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-5"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-3" />
        <p className="text-center small mb-0">
          &copy; {new Date().getFullYear()} HoodCart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
