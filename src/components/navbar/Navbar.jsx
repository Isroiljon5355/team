import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BsArrowUpRight } from "react-icons/bs";

function Navbar() {
  return (
    <nav>
      <div className="nav_logo">
        <h1>HOSTIM</h1>
      </div>
      <div className="nav_link">
        <ul>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Domain</Link>
          <Link>Hosting</Link>
          <Link>Pages</Link>
          <button>
            Get quote <BsArrowUpRight className="arrow" />
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
