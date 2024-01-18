import React from 'react';
import './style.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {currentYear} Umut Baybece | All rights reserved
          <p className="footer-text"> </p>
        </p>

        <p className="footer-text">
          <b>Made with React | </b>
          <span>See Credits</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
