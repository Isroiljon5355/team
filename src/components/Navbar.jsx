import React from "react";
import "./navbar.css";
import { useCart}from "react-use-cart"
function Navbar({ setShow }) {
  const {totalItems } = useCart()
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Mukhammadali
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>Icon </span>
          <span>{totalItems}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
