import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="navbar-wrapper">
  <ul>
    <li class="navtext">
      <Link to="/">Home</Link>
    </li>
    <li class="navtext">
      <Link to="/submission">Record your day</Link>
    </li>
    <li class="navtext">
      <Link to="/calendar">Review Results</Link>
    </li>
  </ul>
  </div>
);

export default NavBar;