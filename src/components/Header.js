import React from 'react';
import Home from './Home';
import QuestionList from './QuestionList'
import NavBar from './NavBar'
import { Link } from "react-router-dom";



const Header = () => (
    <div className="header">
    <ul className="menu">
      <li class="navtext">
        <Link to="/">Home</Link>
      </li>
      <li class="navtext">
        <Link to="/submission">Record your day</Link>
      </li>
      <li class="navtext">
        <Link to="/calendar">Review Results</Link>
      </li>
      <li>
        <Link to="/stats">View graphs</Link>
      </li>
    </ul>
    </div>
  );

export default Header;