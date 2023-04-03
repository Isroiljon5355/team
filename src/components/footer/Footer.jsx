import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import "./footer.css";
import Link from "./Link";
import Input from "./Input";

function Footer() {
  return (
    <div>
      <div className="w-[100%] bg-[#33313D] p-6 lg:grid grid-cols-3">
        <div>
          <img
            className="hostim object-cover cursor-pointer"
            src="https://hostim-html.themetags.com/assets/img/home3/logo-white.png"
            alt=""
          />
          <p className="text-[#fff] mt-8 text-base lg:text-[13px]">
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
        <Link />
        <Input />
      </div>
      <div className="w-[100%] h-[40px] bg-[#515050] grid grid-cols-2 lg:h-11">
        <p className="text-[16px] text-[#fff] mt-2 cursor-pointer lg: pl-6">
          Copyright 2022 Hostim. All Rights Reserved
        </p>
        <p className="text-[#fff] text-[12px] ml-[50px] mt-2 cursor-pointer lg:pl-[350px] text-base">
          Terms & Conditions | Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default Footer;
