import React from "react";
import { data } from "../filter/data";
import { useCart } from "react-use-cart";

function Button() {
  const { addItem } = useCart;
  return(<div>
    {data.map((item) => {
      <div key={item.id}>
        <h2>{item.hobby}</h2>
      </div>
    })}</div>
  )
}

export default Button;
