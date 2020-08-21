import React from "react";
import { Link} from "react-router-dom";
import "./style.css";

function NavTabs() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="navbar-brand" to="/" >
          About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      </nav>
    );
  }
  
  export default NavTabs;
    