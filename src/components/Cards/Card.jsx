import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../data";
import "../../style.css";
import "../Cards/Card.css";
import Image from "../../gm-product-shape.png";

import { Autoplay, Keyboard, Navigation, Pagination, Scrollbar } from "swiper";

function Card() {
  return (
    <div className="postion h-full  bg-[#26262c]">
      <img src={Image} alt="" />
      <div className="absolute top-0 left-0 w-full">
        <div className="obshi">
          <div className="text-center text-white pt-10 ">
            <h1 className="text-3xl font-bold">Gaming Product Corner</h1>
            <p className="leading-6 ">
              Compete with 100 players on a remote island for winner takes
              showdown known <br /> issue t feels at home on the head-up skin
              strategic.
            </p>
          </div>
        </div>
        <Swiper
          loop
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          spaceBetween
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1000: {
              slidesPerView: 3,
              slidesPerGroup: 2,
            },
            780: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            480: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            430: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            400: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            350: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            300: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item}>
                <section className="responsive relative  left-0  w-[100%]  h-[650px]">
                  <div className="mt-8">
                    <div className="item w-[330px] h-[340px] drop-shadow-md ">
                      <div className=" w-[330px] h-[240px] bg-zinc-600 p-21 rounded-t-lg ">
                        <div className="paragrap ml-4">
                          <p
                            className="price w-[65px] h-[15] mt-4  bg-zinc-400 shadow-lg
                       shadow-zinc-500/50 hover:bg-red-500 rounded-sm "
                          >
                            10% off
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
                      <div className="w-[100%] h-[130px] bg-zinc-900 rounded-b-lg">
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
                          className="h-12 w-[150px] ml-[6px] mt-3 rounded-lg 
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Card;
