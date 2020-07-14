import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/submission">Record your day</Link>
    </li>
    <li>
      <Link to="/calendar">Review Results</Link>
    </li>
  </ul>
);

export default NavBar;