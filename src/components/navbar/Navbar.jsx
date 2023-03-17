import React from "react";
import LogoWhite from "../../img/logo-white.png";

function Navbar() {
  return (
    <div className=" bg-[#2F293E] h-20 flex items-center px-40 justify-between">
      <div>
        <img src={LogoWhite} alt="" />
      </div>
      <div>
        <ul className="flex">
          <li className=" mr-10 text-white font-semibold hover:text-[#9A494F] duration-500">
            <a href="">Home</a>
          </li>
          <li className=" mr-10 text-white font-semibold hover:text-[#9A494F] duration-500">
            <a href="">Home</a>
          </li>
          <li className=" mr-10 text-white font-semibold hover:text-[#9A494F] duration-500">
            <a href="">Home</a>
          </li>
          <li className=" mr-10 text-white font-semibold hover:text-[#9A494F] duration-500">
            <a href="">Home</a>
          </li>
          <li className=" mr-10 text-white font-semibold hover:text-[#9A494F] duration-500">
            <a href="">Home</a>
          </li>
          <button className="text-white font-semibold bg-pink-400 ">
            Get Quote
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
