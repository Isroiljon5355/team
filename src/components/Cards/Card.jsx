import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "../../gm-product-shape.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../Cards/Card.css";
import { Context } from "./Context";

const Card = () => {
  const data = useContext(Context);
  const [sliderRef] = useKeenSlider(
    {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 4, spacing: 10 },
        },
        "(max-width: 800px)": {
          slides: { perView: 1, spacing: 10 },
        },
      },
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="w-[100%] h-[100vh] bg-[#26262c]">
      <img className="" src={Image} alt="" />
      <div className="absolute top-0 left-0 w-full">
        <div>
          <div className="text-center text-white mt-10">
            <h1 className="md:text-[42px] text-[28px] font-bold ">
              Gaming Product Corner
            </h1>
            <p className="leading-6 text-[16px]">
              Compete with 100 players on a remote island for winner takes
              showdown known <br /> issue t feels at home on the head-up skin
              strategic.
            </p>
          </div>
        </div>
        <div ref={sliderRef} className="keen-slider">
          {data.map((item) => {
            return (
              <div className="keen-slider__slide number-slide" key={item.id}>
                <div>
                  <div
                    className="card w-[320px] mt-5 h-[380px]  container
                   mx-auto p-[10px]"
                  >
                    <div
                      className="pb-[35px] pt-[10px] rounded-t-lg 
                      bg-[rgba(255,255,255,.05)]"
                    >
                      <p
                        className="price text-white text-center w-[75px]
                       ml-5 rounded-sm bg-[rgba(255,255,255,.1)]"
                      >
                        10% off
                      </p>
                      <img
                        className="mx-auto hover:cursor-pointer"
                        src={item.Image}
                        alt=""
                      />
                      <div className="icon w-[25px] text-white hidden hover:cursor-pointer ease-in-out duration-300 float-right">
                        <AiOutlineHeart className="text-2xl" />
                      </div>
                    </div>
                    <div className="rounded-b-[15px] md:w-[300px] h-[150px] bg-[#1c1e25]">
                      <div className="item  text-white text-center">
                        <h3 className="text-xl pt-3 hover:text-[#dc3545] hover:cursor-pointer ease-in-out duration-300">
                          {item.text.h3}
                        </h3>
                      </div>
                      <div className="flex justify-center items-center font-semibold mt-2">
                        <p className="text-[#dc3545]">{item.text.p}</p>
                        <del className="ml-[18px] text-white text-[16px]">
                          {item.text.p}
                        </del>
                      </div>
                      <div className="">
                        <button
                          className="ml-[99px] mt-3 bg-transparent hover:bg-gradient-to-r from-red-500 via-pink-500 to-blue-900 text-white 
                        font-semibold hover:text-white py-2.5 px-4 border border-white hover:border-transparent hover:cursor-pointer ease-in-out duration-300 rounded"
                        >
                          Add to card
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
