import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import { FaLinkedin, FaSquareGithub,FaFacebook,FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <h2>Văn phòng phẩm</h2>
        <div className="container">
          <div className="row footer-content">
            <div className="footer-column col-4">
              <h4>Contact Us</h4>
              <div className="footer-contact">
                <address>Address: VQ4P+249, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh</address>
                <a href="tel:+84392927737">Phone Number: +84 392927737</a>
                <a href="mailto:minhquan@gmail.com">Email: minhquan@gmail.com</a>
              </div>
              <div className="social-icons">
                <a href="">
                  <FaLinkedin/>
                </a>
                <a href="">
                  <FaSquareGithub/>
                </a>
                <a href="">
                  <FaFacebook/>
                </a>
                <a href="">
                  <FaSquareInstagram/>
                </a>
              </div>
            </div>

            <div className="footer-column col-3">
              <h4>Information</h4>
              <div className="footer-link">
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Refund Policy</Link>
                <Link to="#">Shipping Policy</Link>
                <Link to="#">Terms & Conditions</Link>
                <Link to="#">Blogs</Link>
              </div>
            </div>

            <div className="footer-column col-3">
              <h4>Account</h4>
              <div className="footer-link">
                <Link to="#">About Us</Link>
                <Link to="#">FAQ</Link>
                <Link to="#">Contact</Link>
              </div>
            </div>
          </div>
          <div className="col-12">
              <p className="text-center">
                &copy; {new Date().getFullYear()} Powered by Developer's Corner
              </p>
            </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
