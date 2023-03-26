import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { data } from "../../data";
import Image from "../../gm-product-shape.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../Cards/Card.css";

const Card = () => {
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
            <h1 className="text-[42px] font-bold ">Gaming Product Corner</h1>
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
              <div className="keen-slider__slide number-slide " key={item.id}>
                <section className="h-[650px]">
                  <div className="mt-10">
                    <div className="item w-[330px] h-[340px] drop-shadow-md ">
                      <div className=" w-[330px] h-[240px] bg-[rgba(255,255,255,.05)] p-[1px] rounded-t-lg ">
                        <div className="paragrap ml-4">
                          <p
                            className="price pl-2 w-[75px] h-[15] mt-4 text-white bg-[rgba(255,255,255,.05)] shadow-sm
                        hover:bg-red-600 rounded-[6px] "
                          >
                            {item.price}
                          </p>
                        </div>
                        <div className="hh">
                          <img
                            className="hover:cursor-pointer ml-14"
                            src={item.Image}
                            alt=""
                          />
                        </div>
                        <div className="icon float-right">
                          <AiOutlineHeart className="icon text-2xl hidden" />
                        </div>
                      </div>
                      <div className="w-[100%] h-[170px] bg-zinc-900 rounded-b-lg pt-3">
                        <p
                          className="text-center text-xl text-white pt-1 hover:cursor-pointer
                          hover:text-red-600 hover:ease-in-out duration-500"
                        >
                          {item.text.h3}
                        </p>
                        <div className="flex items-center justify-center">
                          <p className="text-red-600 pr-3 text-xl">
                            {item.text.p}
                          </p>
                          <del className="text-xl text-white">
                            {item.text.del}
                          </del>
                        </div>
                        <button
                          className="h-12 w-[150px] ml-[90px]  mt-3 rounded-lg 
                          text-white border-solid border-2
                          border-white hover:bg-gradient-to-r from-purple-500
                          to-blue-900 hover:border-none hover:text-red-600 hover:ease-in-out duration-500
                         "
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
