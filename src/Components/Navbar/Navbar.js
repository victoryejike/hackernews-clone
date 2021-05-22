import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-links">
        <Link to="/">
          <div className="home-links">
            <img src="y" alt="logo" />
            <h4>Hacker News</h4>
          </div>
        </Link>
        <div>
          <Link to="/new">new</Link>
        </div>
        <div>
          <Link to="/past">past</Link>
        </div>
        <div>comment</div>
        <div>ask</div>
      </div>
      <div className="login">login</div>
    </nav>
  );
};

export default Navbar;
