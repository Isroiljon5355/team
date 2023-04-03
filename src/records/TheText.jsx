import React from "react";
import Img from "./img/img.png";

function Text() {
  return (
    <div>
      <p className="font-bold text-7xl mt-60 ml-20 mb-10">
        The Best <br />
        Players & Get <br /> Better on
        <span className="h-14 linear-gradient-to-r from-purple-500 to-pink-500 text-blue-500	">
          Wildrift
        </span>
      </p>
      <span className="text-2xl ml-20">
        Assertively exploit impactful manufactured products and high <br />
      </span>

      <span className="text-2xl mt-40 ml-20">
        quality Interactively seiz e intuitive mind share.
      </span>

      <div className="pb-56 ">
        <img className="w-6/12 ml-[680px] mt-[-450px]" src={Img} alt="" />
      </div>
    </div>
  );
}

export default Text;
