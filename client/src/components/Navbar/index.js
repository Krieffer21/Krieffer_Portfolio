import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavTabs() {
  return (
    <nav>
      <header className="row justify-content-md-center">
        <nav className="sticky-top">
          <div id="topNav">
            <div id="name" >Kaelyn Rieffer</div>
            <div>
              <Link className="navbar-brand" to="/" >
                About
               </Link>
              <Link className="navbar-brand" to="/portfolio">
                Portfolio
               </Link>
              <Link className="navbar-brand" to="/contact">
                Contact
               </Link>
            </div>
          </div>
        </nav>
      </header>
    </nav>
  );
}

export default NavTabs;
