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
              <Link className="navbar-brand" to="/Krieffer_Portfolio" >
                About Me
               </Link>
              <Link className="navbar-brand" to="Krieffer_Portfolio/portfolio">
                Portfolio
               </Link>
              <Link className="navbar-brand" to="Krieffer_Portfolio/contact">
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
