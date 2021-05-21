import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-links">
        <div className="home-links">
          <img src="y" alt="logo" />
          <h4>Hacker News</h4>
        </div>
        <div>new</div>
        <div>past</div>
        <div>comment</div>
        <div>ask</div>
      </div>
      <div className="login">login</div>
    </nav>
  );
};

export default Navbar;
