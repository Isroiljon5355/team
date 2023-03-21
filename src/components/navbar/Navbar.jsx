import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav>
      <div className="nav_logo">
        <img
          src="https://hostim-html.themetags.com/assets/img/home3/logo-white.png"
          alt=""
        />
      </div>
      <div className="nav_link">
        <ul>
          <div className="dropdown">
            <Link>Home</Link>
            <div class="dropdown-content">
              <p>Hello World!</p>
              <p>Hello World!</p>
              <p>Hello World!</p>
              <p>Hello World!</p>
              <p>Hello World!</p>
              <p>Hello World!</p>
            </div>
          </div>
          <Link>About</Link>
          <Link>Domain</Link>
          <Link>Hosting</Link>
          <Link>Pages</Link>
          <button class="btn-hover color-7">Get Quote</button>
        </ul>
        <div className="icon">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
}
