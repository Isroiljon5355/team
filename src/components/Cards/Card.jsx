import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "../Cards/Card.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { data } from "../../data";
import "../../style.css";

import { Autoplay, Pagination } from "swiper";

function Card() {
  return (
    <>
      <div className="text-center text-white pt-10 bg-slate-800 ">
        <h1 className="text-3xl font-bold">Gaming Product Corner</h1>
        <p className="leading-6">
          Compete with 100 players on a remote island for winner takes showdown
          known <br /> issue t feels at home on the head-up skin strategic.
        </p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        loop
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwipper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item}>
              <section className="responsive bg-slate-800 w-[100%]  h-[650px]">
                <div className="mt-8">
                  <div className="item w-[300px] h-[380px] drop-shadow-md ">
                    <div className=" w-[300px] h-[280px] bg-zinc-600 p-21 rounded-t-lg">
                      <p className="price w-[65px] h-[15] bg-zinc-400 shadow-lg shadow-zinc-500/50 hover:bg-red-500 rounded-sm">
                        10% off
                      </p>
                      <div>
                        <img
                          className="hover:cursor-pointer "
                          src={item.Image}
                          alt=""
                        />
                      </div>
                      <AiOutlineHeart className="icon float-right text-2xl hidden duration-700" />
                    </div>
                    <div className="w-[100%] h-[130px] bg-zinc-900 rounded-b-lg">
                      <p className="text-center text-xl text-white pt-1 hover:cursor-pointer hover:text-red-600 hover:ease-in-out duration-500">
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
                      <button className="h-12 w-[150px] ml-[6px] mt-3 rounded-sm text-white border-solid border-2 border-white hover:bg-gradient-to-r from-purple-500 to-blue-900  hover:ease-in-out duration-500 hover:border-none">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Card;
