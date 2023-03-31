import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { data } from "./FooterData";
import "./footer.css";

function Footer() {
  return (
    <div>
      <div className=" bg-[#33313D] p-6 grid grid-cols-4 justify-around">
        <div>
          <img
            className="hostim object-cover cursor-pointer"
            src="https://hostim-html.themetags.com/assets/img/home3/logo-white.png"
            alt=""
          />
          <p className="text-[#fff] mt-8 text-[13px]">
            My service is not something I even think about because <br /> it is
            always there as we agreed. The customer service is <br /> responsive
            and knowledge needs for
          </p>
          <br />
          <h1 className="text-[#fff]">
            Follow us on <span className="text-[blue]">______</span>
          </h1>
          <div className="flex mt-6 gap-3  cursor-pointer">
            <FaFacebookF className="face bg-gradient-to-r from-purple-500 to-pink-500 w-[30px] h-[30px] rounded-[50%] p-[7px]" />
            <FaTwitter className="face bg-gradient-to-r from-purple-500 to-pink-500 w-[30px] h-[30px] rounded-[50%] p-[7px]" />
            <FaInstagram className="face bg-gradient-to-r from-purple-500 to-pink-500 w-[30px] h-[30px] rounded-[50%] p-[7px]" />
            <FaLinkedin className="face bg-gradient-to-r from-purple-500 to-pink-500 w-[30px] h-[30px] rounded-[50%] p-[7px]" />
          </div>
        </div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div className="mt-4 pl-6">
                <h1 className="text-[#fff] font-bold text-[18px]">
                  {item.title}
                </h1>
                <hr className="w-12 h-1 text-orange-300 mt-2 " />
                <div>
                  <h4 className="text-[#fff] list-none leading-8">
                    {item.support}
                  </h4>
                  <h4 className="text-[#fff] list-none leading-8">
                    {item.about}
                  </h4>
                  <h4 className="text-[#fff] list-none leading-8">
                    {item.search}
                  </h4>
                  <h4 className="text-[#fff] list-none leading-8">
                    {item.account}
                  </h4>
                  <h4 className="text-[#fff] list-none leading-8">
                    {item.customer}
                  </h4>
                  <h4 className="text-[#fff] list-none leading-8">
                    {item.contact}
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
        <div className="mt-4">
          <h1 className="text-[white]">Get In Touch</h1>
          <hr className="w-12 h-1 text-orange-300 mt-2 " />
          <div className="input flex border-white w-[350px] h-[55px] mt-5 ">
            <input
              className="item w-[340px] pl-2  h-[55px] mt-1 outline-none border-none  text-[white]"
              type="text"
              placeholder="Type Your Mail"
            />
            <button className="w-[100px] h-[40px] text-[white] p-1 pl-4 mt-3 pr-12 rounded-[5px] bg-gradient-to-r from-purple-500 to-pink-500 ">
              Subscribe
            </button>
          </div>
          <p className="text-[white] mt-8">
            We Accepted <span className="text-[blue]">_____</span>
          </p>
          <div className="mt-2 flex gap-2">
            <img
              className=" w-[300px] h-[20x] cursor-pointer object-cover"
              src="https://kachabazar-store.vercel.app/_next/image?url=%2Fpayment-method%2Fpayment-logo.png&w=384&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[40px] bg-[#515050] grid grid-cols-2 justify-between">
        <p className=" text-[15px] text-[#fff] mt-2 pl-2 cursor-pointer">
          Copyright 2022 Hostim. All Rights Reserved
        </p>
        <p className=" text-[#fff] pl-[420px] mt-2 cursor-pointer">
          Terms & Conditions | Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default Footer;
