import React, { useEffect, useState } from "react";
import img from "../img/thumb.png";

function Hundredtwenty() {
  const [count, setCount] = useState(0);
  if (
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 900);
    }) == 120
  ) {
    return count;
  }

  return (
    <div className="minibox">
      <h1 className="hundredtwenty" style={{ color: "#fff", padding: "10px"}}>
        <img src={img} alt="" />
        {count}
        {"K"}
        <p style={{ fontSize: "17px" }}>Satisfaction Users</p>
      </h1>
    </div>
  );
}
export default Hundredtwenty;
