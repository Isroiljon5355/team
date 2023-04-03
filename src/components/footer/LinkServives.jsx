import React from "react";
import { ServisecData } from "./ServisecData";
function LinkServives() {
  return (
    <div className="mt-5">
      <h1 className="text-[#fff] font-bold text-[18px]">Services</h1>
      <hr className="w-12 h-1 mt-2" />

      {ServisecData.map((item) => {
        return (
          <div className="mt-5" key={item.id}>
            <a className="text-[#fff] list-none leading-4" href={item.link}>
              {item.title}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default LinkServives;
