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
          <img className=" w-[100%] h-[100vh] relative" src={img1} alt="" />
        </div>
      </div>
      <div class="bg-gradient-to-l from-black  absolute top-[0%] left-[0%] w-[100%] h-[100vh]"></div>
      <img
        className=" top-[27%] absolute left-[10vh] bg-opacity-[0.1]: "
        src={img2}
        alt=""
      />
      <img
        className="top-[0%] absolute left-[0vh] h-[100vh] "
        src={img3}
        alt=""
      />
      <div className="absolute top-[5%] left-[0%] text-white">
        <h1 className=" text-[30px] font-[700] ml-[20px]">
          We are the Best <br />
          Game Distributors For all <br /> Gamers.
        </h1>
        <img className="absolute top-[16%] left-[40%]" src={img4} alt="" />
        <div className="ml-[70px] my-[100px]">
          <h3 className="text-2xl font-[600]">Design & Strategy</h3>
          <p className="text-[15px] font-[500]">
            Find wholesale prices and suppliers of video games, consoles,
            <br /> and game accessories.
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
