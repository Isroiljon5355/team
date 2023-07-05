import React, { useEffect, useState } from "react";
// import React, { CartProvider } from "react-use-cart";
import Work from "./components/rewiev/Work";
import Navbar from "./components/Navbar";
import Aamazom from "./components/Aamazom";
import Sub from "./components/Sub";
function App() {
  const [show, setShow] = useState(true);

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0)arr[ind].amount = 1;
    setCart([...arr]);
  };
  // useEffect(() => {
  //   console.log("cart");
  // }, [cart]);
  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Aamazom handleClick={handleClick} />
      ) : (
        <Sub cart={cart}  setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;
