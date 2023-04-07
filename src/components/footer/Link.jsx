import React from "react";
import { Linkdata } from "./FooterData";

function Link() {
  return (
    <div className="mt-5 lg:pl-6">
      <h1 className="text-[#fff] font-bold text-[18px]">Quick Links</h1>
      <hr className="w-12 h-1 mt-2" />

      {Linkdata.map((item) => {
        return (
          <div className="mt-5" key={item.id}>
            <h4 className="text-[#fff] list-none leading-4">{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Link;
