import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-grey">
      <div className="container">
        <div className="footer-content flex flex-sb">
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <p className="footer-text">© 2023 INVEST Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
