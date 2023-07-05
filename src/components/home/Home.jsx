import React from "react";
import { useCart } from "react-use-cart";
import products from "./datas";

function Home() {
  const { addItem } = useCart();
  return products.map((item) => {
    return (
      <div key={item.id}>
        <h2>{item.name}</h2>
        <button onClick={()=> addItem(item)}>add to card</button>
      </div>
    );
  });
}

export default Home;
