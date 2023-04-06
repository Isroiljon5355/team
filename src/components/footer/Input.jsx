import React from "react";

function Input() {
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-[white] font-bold">Get In Touch</h1>
        <hr className="w-12 h-1 text-orange-300 mt-2 " />
        <div className="input flex border-white w-[350px] h-[55px] mt-5 ">
          <input
            className="item w-[340px] pl-2  h-[55px] mt-1 outline-none border-none  text-[white]"
            type="email"
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
  );
}

export default Input;
