import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className=" pl-[110px] bg-gray-700 text-white">
      <Link to="/medium" className=" mr-[20px]">
        Latest Games <sup className="text-red-700">19</sup>
      </Link>
      <Link to="/section1" className=" mr-[20px]">
        EA Sports <sup>10</sup>
      </Link>
      <Link to="/section2" className=" mr-[20px]">
        Star Wars<sup className="text-red-700">20</sup>
      </Link>
      <Link to="/section3" className="mr-[20px]">
        The Sims <sup>09</sup>
      </Link>
      <Link to="/section4">
        EA Original <sup>17</sup>
      </Link>
      <div className="pr-[110px]">
        <hr className="mt-[10px]" />
      </div>
    </div>
  );
}

export default Navbar;
