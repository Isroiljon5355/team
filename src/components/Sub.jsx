import React, { useState } from "react";
import { useEffect } from "react";
import "./sub.css";
import {useCart} from "react-use-cart"

function Sub({ cart, setCart, handleChange }) {
  const [price, setPrice] = useState();

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id)
    setCart(arr);
    handlePrice();
  };
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, + 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, - 1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Reomove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>total price</span>
        <span>tr - {price}</span>
      </div>
      
    </article>
  );
}

export default Sub;
