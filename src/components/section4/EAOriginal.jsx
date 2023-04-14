import React from "react";
import Another from "./Another";
function EAOriginal() {
  return (
    <div className=" bg-gray-700 ">
      <div className="lg:mx-[90px]">
        <div>
          <ul className="flex "></ul>
        </div>
        <div className="md:flex md:m-[20px]">
          <div className="relative  ">
            <img
              className="rounded-lg"
              src="https://hostim-html.themetags.com/assets/img/home3/ft-5.jpg"
              alt=""
            />
            <div className=" w-[92%]  md:w-[92%] md:top-[35%] lg:w-[92%] lg:top-[42%] xl:w-[92%] absolute xl:top-[67%] left-[4%] backdrop-blur-[33px] p-[20px] rounded-lg text-white bg-[rgba(0,0,0,.6)] sm:grid-cols-1  ">
              <h1 className="text-[30px] lg:text-[25px] font-extrabold">
                Assassin's Creed Valhalla
              </h1>
              <div className="flex ">
                <p className="font-medium">$26.00</p>
                <p className="ml-[15px] mb-[40px] font-medium">$30.00</p>
              </div>
              <div className="flex justify-between text-center ">
                <div className="md:hidden">
                  <p className="mr-[169px] lg:mr-[285px]  font-medium">
                    Activison:
                  </p>
                  <p className="font-medium lg:mr-[140px] ">
                    PS4, PS5, Xbox One, Xbox{" "}
                  </p>
                </div>
                <div className="w-[120px] md:py-[10px] lg:py-[10px] lg:mt-[10px] py-[5px] border-none overflow-hidden rounded-lg  bg-gradient-to-r from-red-600 to-indigo-500 hover:bg-gradient-to-l to-indigo-500 from-red-600 text-white">
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Another />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EAOriginal;
