import React, { useEffect, useState } from "react";
import img from "../img/thumb.png";

function Hundredtwenty() {
  const [count, setCount] = useState(0);
//   if (
//     useEffect(() => {
//       setTimeout(() => {
//         setCount((count) => count + 1);
//       }, 900);
//     }) == 120
//   ) {
//     return count;
//   }

  return (
    <div className="mt-[-550px] ">
      <img // src={img} alt=""
      />
      <h1
        className="hundredtwenty"
        style={{
          color: "#fff",
          padding: "10px",
          paddingLeft: "70px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {count}
        {"K"}
        {/* <p className="text-black">Satisfaction Users</p> */}
      </h1>
    </div>
  );
}
export default Hundredtwenty;
