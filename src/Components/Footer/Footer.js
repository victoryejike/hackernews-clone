import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div>Guidelines</div>
        <div>FAQ</div>
        <div>List</div>
        <div>API</div>
        <div>Security</div>
        <div>Legal</div>
        <div>Apply to YC</div>
        <div>Contact</div>
      </div>
      <div className="footer-searchbox">
        <label for="search">Search: </label>
        <input type="search" name="search" />
      </div>
    </footer>
  );
};

export default Footer;
