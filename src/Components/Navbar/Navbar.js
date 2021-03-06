import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-links">
        <Link to="/">
          <div className="home-links">
            <img src="https://news.ycombinator.com/y18.gif" alt="logo" />
            <h4>Hacker News</h4>
          </div>
        </Link>
        <div>
          <Link to="/new">new</Link>
        </div>
        I
        <div>
          <Link to="/best">best</Link>
        </div>
        I
        <div>
          <Link to="/top">top</Link>
        </div>
        {/* <div>ask</div> */}
      </div>
      <div className="login">login</div>
    </nav>
  );
};

export default Navbar;
