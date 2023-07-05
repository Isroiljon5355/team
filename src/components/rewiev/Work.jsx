import React from "react";
import datas from "./data";
import { useState } from "react";




function Work() {
  const [search, setSearch] = useState(" ");
  const [add, setAdd] = useState(0);
  return (
    
    <div>
      <div className=" bg-orange-500 h-[60px]">
        <h1 className=" text-5xl">A</h1>
      </div>
      <input
        type="text"
        placeholder="search"
        className=" border-[2px] border-solid border-red-600 mx-[40%]"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button className=" bg-orange-500 p-1 mt-2">click me</button>
      <div className="flex flex-col justify-center">
        {datas
          .filter((item) => {
            return search.toLocaleLowerCase() === " "
              ? item
              : item.title.toLocaleLowerCase().includes(search);
          })
          .map((item) => {
            return (
              <div key={item.id} className="">
                <img
                  className="w-[300px] h-[300px] mt-[200px] m-[30px]"
                  src={
                    item.image
                      ? item.image
                      : "https://images.pexels.com/photos/3825306/pexels-photo-3825306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt=""
                />
                <div className=" ">
                  <h5 className="ml-[30px]">{item.title}</h5>
                  <p className="ml-[30px]">{item.price}</p>
                  <button
                    onClick={() => setAdd(add - 1)}
                    className="ml-[30px] bg-slate-400 p-2"
                  >
                    -
                  </button>
                  <button className=" bg-slate-400 p-2">{add}</button>
                  <button
                    onClick={() => setAdd(add + 1)}
                    className=" bg-slate-400 p-2"
                  >
                    +
                  </button>{" "}
                  <br />
                </div>
              </div>
            );
          })}
      </div>
    </div>
    
  );
}

export default Work;
