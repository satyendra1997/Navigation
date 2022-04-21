import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav>
      <div className="logo">
        NAV<font>Bar</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list closed"}>
        <li>
          <Link to="/" exact>
            Home
          </Link>
        </li>
        <li>
          <Link to="/social">Social</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/signin">Sign in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
