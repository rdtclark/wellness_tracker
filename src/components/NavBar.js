import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="navbar-wrapper">
  <ul>
    <li className="navtext">
      <Link to="/">Home</Link>
    </li>
    <li className="navtext">
      <Link to="/submission">Record your day</Link>
    </li>
    <li className="navtext">
      <Link to="/calendar">Review Results</Link>
    </li>
    <li>
      <Link to="/stats">View graphs</Link>
    </li>
  </ul>
  </div>
);

export default NavBar;