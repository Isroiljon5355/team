import React from "react";
import img1 from "../img/about-bg.jpg";
import img2 from "../img/gm-net-shape.png";
import img3 from "../img/gm-about-blur (2).png";
import img4 from "../img/uuuu.jpg";
function Game() {
  return (
    <div className="">
      <div className="">
        <div className="bg-neutral-900 relative">
          <img
            className="h-[97vh] w-[82%] my-[40px] relative"
            src={img1}
            alt=""
          />
        </div>
      </div>
      <div class="bg-gradient-to-l from-black  w-[100%] h-[97vh] absolute top-[5%] left-[0%]"></div>
      <img
        className=" top-[19%] absolute left-[79%] opacity-[0.1]"
        src={img2}
        alt=""
      />
      <img className="top-[5%] absolute left-[65%] " src={img3} alt="" />
      <div className="absolute top-[5%] left-[57%] text-white">
        <h1 className="text-[40px] font-[700] my-[130px]">
          We are the Best <br />
          Game Distributors For all <br /> Gamers.
        </h1>
        <img className="absolute top-[42%] left-[40%]" src={img4} alt="" />
        <div className="ml-[70px] my-[-100px]">
          <h3 className="text-2xl font-[600]">Design & Strategy</h3>
          <p className="text-[15px] font-[500] my-[10px]">
            Find wholesale prices and suppliers of video games, consoles,
            <br />
            and game accessories.
          </p>
        </div>
        <div className="ml-[70px] my-[130px]">
          <h3 className="text-2xl font-[600]">Design & Strategy</h3>
          <p className="text-[15px] font-[500] my-[10px]">
            Find wholesale prices and suppliers of video games, consoles,
            <br />
            and game accessories.
          </p>
        </div>
        <button className="text-black bg-gradient-to-r from-pink-600 to-yellow-600 hover:from-pink-500 hover:to-yellow-500 w-[150px] h-[60px] rounded-[7px] absolute top-[90%] left-[5%]">
          Playing Now
        </button>
      </div>
    </div>
  );
}
export default Game;
