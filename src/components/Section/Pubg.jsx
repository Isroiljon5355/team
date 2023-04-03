import React from "react";
import Img from "../../assepts/PubgSectionImg/color-blur.png";
import Img2 from "../../assepts/PubgSectionImg/game-logo-2.png";
import Img3 from "../../assepts/PubgSectionImg/call-to-action-circle-top.png";
import Img4 from "../../assepts/PubgSectionImg/call-to-action-circle-bottom.png";
import Img5 from "../../assepts/PubgSectionImg/game-action.png";
import "./Pubg.css";

function Pubg() {
  return (
    <div>
      <div className="big hidden relative h-[570] w-[100%] md:h-[570px] bg-[#26262c] md:flex items-center">
        <div className="left">
          <img className="w-[600px] h-[570px]" src={Img} alt="" />
          <div>
            <img
              className="md:w-[416px] h-[116px] absolute top-20 left-20"
              src={Img2}
              alt=""
            />
            <p className="absolute top-52 left-20 text-white font-[16px]">
              It is a long established fact that a reader will be distracted{" "}
              <br /> the readable content of page when looking at it layout the{" "}
              <br /> point using lorem Ipsum is that it has a more-or-less
              normal <br /> distribution.
            </p>
            <div className="buttons absolute mt-5 top-80 left-20 text-white">
              <button
                className="hah w-[166px] rounded-[8px] h-[56px] 
                bg-gradient-to-r from-purple-500 to-pink-500 ease-in-out duration-500"
              >
                Get a vaucher
              </button>
              <button
                className="hh w-[141px] h-[54px] rounded-[8px] ml-[50px] hover:bg-gradient-to-r from-red-500 via-pink-500 to-blue-900 
              text-white border-2 hover:border-none"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <img className="md:absolute top-0 right-0" src={Img3} alt="" />
          </div>
          <div>
            <img className="md:absolute top-60" src={Img4} alt="" />
          </div>
          <div>
            <img className="md:absolute top-24 right-14" src={Img5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pubg;
