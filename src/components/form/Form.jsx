import React from "react";
import Amplitude1 from "../img/amplitude1.png";
import Profitwell from "../img/profitwell.png";
import Tempo from "../img/tempo.png";
import Toast from "../img/toast.png";
import Velocity from "../img/velocity.png";
import Sitemate from "../img/sitemate-2.png";
import Gmcontactbg from "../img/gm-contact-bg.png";

function Form() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between  bg-[#1E1E2C] h-screen p-10">
        <div className="">
          <h1 className="text-[#fff] text-5xl font-bold leading-loose ">
            Know About Updates
          </h1>
          <div className="flex flex-wrap items-end ">
            <h3 className="text-[#fff]  text-3xl font-medium inline">
              Our Top Clients
            </h3>
            <p className=" left-64 border-y-4 w-1/4 absolute border-red-600	 "></p>
          </div>
          <ul className="grid grid-cols-3 justify-between gap-5 mt-5 w-full">
            <li className="bg-[#26262c] px-10 py-4 ">
              <img src={Amplitude1} alt="" />
            </li>
            <li className="bg-[#26262c] px-10 py-4">
              <img src={Profitwell} alt="" />
            </li>
            <li className="bg-[#26262c] px-10 py-4  ">
              <img src={Tempo} alt="" />
            </li>
            <li className="bg-[#26262c] px-10 py-4  ">
              <img src={Toast} alt="" />
            </li>
            <li className="bg-[#26262c] px-10 py-4  ">
              <img src={Velocity} alt="" />
            </li>
            <li className="bg-[#26262c] px-10 py-4  ">
              <img src={Sitemate} alt="" />
            </li>
          </ul>
          <div className="text-white text-xl mt-7 m-8 flex flex-wrap items-center hover:w-52 cursor-pointer  ">
            <p className="p-5 w-5 rounded-3xl z-1 bg-red-600 border-solid border-2 hover:px-16 duration-700 cursor-pointer	"></p>
            <h1 className="absolute 	">VIEW ALL 200+ CLIENTS </h1>
          </div>
        </div>
        <div className=" ">
          <div className="mb-5 flex flex-wrap justify-between gap-x-10">
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
                className="w-full rounded-md border  bg-[#26262c] py-3 px-16 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                className="w-full rounded-md border bg-[#26262c] py-3 px-16 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="mb-5 flex flex-wrap justify-between gap-x-10">
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
                className="w-full rounded-md border bg-[#26262c] py-3 px-16 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                className="w-full rounded-md border bg-[#26262c] py-3 px-16 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="mb-5 flex flex-wrap justify-between gap-x-10">
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
                className="w-full rounded-md border bg-[#26262c] py-3 px-16 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                className="w-full rounded-md border bg-[#26262c] py-3 px-16 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
              className="w-full resize-none rounded-md border bg-[#26262c] py-3 px-16 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-5 px-24 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 ">
        <img src={Gmcontactbg} alt="" />
      </div>
    </div>
  );
}

export default Form;
