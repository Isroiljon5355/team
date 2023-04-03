import React from "react";
import { data } from "./FooterData";

function Link() {
  return (
    <div className="">
      {data.map((item) => {
        return (
          <div className="mt-5 lg:pl-6" key={item.id}>
            <h1 className="text-[#fff] font-bold text-[18px]">{item.title}</h1>
            {item.hr}
            <a className="text-[#fff] list-none leading-4" href={item.link}>
              {item.link}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Link;
