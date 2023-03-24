import React from "react";
import { FaFacebookF } from "react-icons/fa";
import "./footer.css";
function Footer() {
  return (
    <div className="w-[100%] h-[550px] bg-[#33313D] p-6 grid grid-cols-4 justify-around">
      <div>
        <img
          className="hostim object-cover"
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
          <FaFacebookF className="bg-gradient-to-r from-purple-500 to-pink-500 w-[30px] h-[30px] rounded-[50%] p-[7px]" />
          <FaFacebookF className="bg-gradient-to-r from-purple-500 to-pink-500 w-[30px] h-[30px] rounded-[50%] p-[7px]" />
          <FaFacebookF className="bg-gradient-to-r from-purple-500 to-pink-500 w-[30px] h-[30px] rounded-[50%] p-[7px]" />
          <FaFacebookF className="bg-gradient-to-r from-purple-500 to-pink-500 w-[30px] h-[30px] rounded-[50%] p-[7px]" />
        </div>
      </div>
      <div className="mt-4 pl-5 ">
        <h1 className="text-[#fff] font-bold text-[18px]">Quick Links</h1>

        <hr className="w-12 h-1 text-orange-300 mt-2 " />

        <li className="mt-3 list-none grid  ">
          <a className="text-[#fff] list-none leading-8 " href="#">
            Support Center
          </a>

          <a className="text-[#fff] list-none leading-8" href="#">
            Support Center
          </a>

          <a className="text-[#fff] list-none leading-8 " href="#">
            Support Center
          </a>

          <a className="text-[#fff] list-none leading-8 " href="#">
            Support Center
          </a>

          <a className="text-[#fff] list-none leading-8 " href="#">
            Support Center
          </a>

          <a className="text-[#fff] leading-8" href="#">
            Support Center
          </a>
        </li>
      </div>
      <div className="mt-4 pr-12 ">
        <h1 className="text-[#fff] font-bold text-[18px]">Quick Links</h1>

        <hr className="w-12 h-1 text-orange-300 mt-2 " />

        <li className="mt-3 list-none grid  ">
          <a className="text-[#fff] list-none leading-8 " href="#">
            Support Center
          </a>

          <a className="text-[#fff] list-none leading-8" href="#">
            Support Center
          </a>

          <a className="text-[#fff] list-none leading-8 " href="#">
            Support Center
          </a>

          <a className="text-[#fff] list-none leading-8 " href="#">
            Support Center
          </a>

          <a className="text-[#fff] list-none leading-8 " href="#">
            Support Center
          </a>

          <a className="text-[#fff] leading-8" href="#">
            Support Center
          </a>
        </li>
      </div>
      <div className=" mt-4  ">
        <h1 className="text-[white]">Get In Touch</h1>
        <hr className="w-12 h-1 text-orange-300 mt-2 " />
        <div className="input flex border-white w-[350px] h-[55px] mt-5 ">
          <input
            className="item w-[340px]  h-[55px] mt-2 outline-none border-none  text-[white]"
            type="text"
            placeholder="Type Your Mail"
          />
          <button className="w-[100px] h-[40px] text-[white] p-1 pl-4 mt-4 pr-12 rounded-[5px] bg-gradient-to-r from-purple-500 to-pink-500 ">
            Subscribe
          </button>
        </div>
        <p className="text-[white] mt-8">
          We Accepted <span className="text-[blue]">_____</span>
        </p>
        <div className="mt-6 flex gap-2">
          <img
            className=" w-[72px] h-[30px] cursor-pointer"
            src="	https://hostim-html.themetags.com/assets/img/visa.png"
            alt=""
          />
          <img
            className=" w-[72px] h-[30px] "
            src="	https://hostim-html.themetags.com/assets/img/visa.png"
            alt=""
          />
          <img
            className=" w-[72px] h-[30px] "
            src="	https://hostim-html.themetags.com/assets/img/visa.png"
            alt=""
          />
          <img
            className=" w-[72px] h-[30px] "
            src="	https://hostim-html.themetags.com/assets/img/visa.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
