import React from "react";
import Amplitude1 from "../img/amplitude1.png";
import Profitwell from "../img/profitwell.png";
import Sitemate from "../img/sitemate-2.png";
import Tempo from "../img/tempo.png";
import Toast from "../img/toast.png";
import Velocity from "../img/velocity.png";
import Gmcontactbg from "../img/gm-contact-bg.png";
import { createContext } from "react";

function Form() {
  const cart = "salom";
  const greet = createContext(cart);
  return (
    <div>
      <div className="flex flxe-wrap items-center bg-[#1E1E2C]  md:p-24 gap-10 md:flex flex-wrap justify-center ">
        <div className="  ">
          <h1 className="text-[#fff] text-[40px] font-bold leading-loose ">
            Know About Updates
          </h1>
          <div className=" relative flex  mb-12">
            <p className="text-[#fff]  text-2xl font-medium  ">
              Our Top Clients
            </p>
            <p
              className=" absolute bg-gradient-to-r from-[#900975] via-[#2b0340] to-[#020024] w-[40%] 
            rounded-sm h-[5px] mt-4  ml-[200px] 2xl:w-[57%] md:mx-50 "
            ></p>
          </div>
          <ul className="grid flex-wrap grid-cols-2 justify-between gap-4 2xl:grid-cols-3">
            <li className="bg-[#26262c] px-10 py-5 ">
              <img src={Amplitude1} alt="" />
            </li>
            <li className="bg-[#26262c] px-10 py-5">
              <img src={Profitwell} alt="" />
            </li>
            <li className="bg-[#26262c] px-10 py-5  ">
              <img src={Tempo} alt="" />
            </li>
            <li className="bg-[#26262c] px-10 py-5  ">
              <img src={Toast} alt="" />
            </li>
            <li className="bg-[#26262c] px-10 py-5  ">
              <img src={Velocity} alt="" />
            </li>
            <li className="bg-[#26262c] px-10 py-5  ">
              <img src={Sitemate} alt="" />
            </li>
          </ul>
          <div className="text-white text-xl mt-8 m-7 flex flex-wrap items-center hover:w-52  cursor-pointer  ">
            <p className="p-3 overflow-hidden   bg-gradient-to-r from-red-600 to-indigo-500  hover:px-10 hover:py-5 rounded-full duration-700 cursor-pointer	"></p>
            <p className=" absolute mx-5">VIEW ALL 200+ CLIENTS </p>
          </div>
        </div>
        <div className=" absolute right-0 top-[750px]  ">
          <img src={Gmcontactbg} alt="" />
        </div>
        <div className=" relative z-10 ">
          <div className="mb-5 md:flex flex-wrap justify-center  gap-x-10 ">
            <div>
              <label
                for="name"
                className="mb-3 block text-base font-medium text-[#f7f9f8]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="  px-10 2xl:px-12 py-3  rounded-md border  bg-[#26262c]  text-base font-medium
                 text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
              />
            </div>
            <div>
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#ffff]"
              >
                Phone
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                className="  px-10 2xl:px-12 py-3 rounded-md border bg-[#26262c] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="mb-5 md:flex flex-wrap   justify-center  gap-x-10 ">
            <div>
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#fff]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="  px-10 2xl:px-12 py-3 rounded-md border bg-[#26262c]  text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#fff]"
              >
                Games
              </label>
              <input
                type="games"
                name="games"
                id="games"
                placeholder="Assassin's Creed"
                className=" px-10 2xl:px-12 py-3 rounded-md border bg-[#26262c] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="mb-5 md:flex flex-wrap  gap-x-10 ">
            <div>
              <label
                for="subject"
                className="mb-3 block text-base font-medium text-[#fff]"
              >
                Your Country
              </label>
              <input
                type="text"
                name="Your Country"
                id="Your Country"
                placeholder="Assassin's Creed"
                className=" px-10 2xl:px-12 py-3 rounded-md border bg-[#26262c] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <label
                for="subject"
                className="mb-3 block text-base font-medium text-[#fff]"
              >
                Language
              </label>
              <input
                type="text"
                name="Language"
                id="Language"
                placeholder="Assassin's Creed"
                className=" px-10 2xl:px-12 py-3 rounded-md border bg-[#26262c] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="mb-5">
            <label
              for="message"
              className="mb-3 block text-base font-medium text-[#fff]"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-md border bg-[#26262c] px-[16px] py-[12px] text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button className="shadow-form rounded-md bg-gradient-to-r from-red-600 to-indigo-500 hover:bg-gradient-to-l to-indigo-500 from-red-600 py-5 px-24 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
