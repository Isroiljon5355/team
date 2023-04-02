import React from "react";
function Section() {
  return (
    <div className="  ">
      <div className="">
        <div className="relative mt-[20px] ">
          <img
            className="rounded-lg md:w-[60%]"
            src="https://hostim-html.themetags.com/assets/img/home3/ft-1.jpg"
            alt=""
          />
          <div className=" w-[92%] md:w-[52%] absolute top-[40%] left-[4%] backdrop-blur-[33px] p-[20px] rounded-lg text-white bg-[rgba(0,0,0,.6)] sm:grid-cols-1  ">
            <h1 className="text-[30px] font-extrabold ">
              Assassin's Creed Valhalla
            </h1>
            <div className="flex ">
              <p className="font-medium">$26.00</p>
              <p className="ml-[15px] mb-[40px] font-medium">$30.00</p>
            </div>
            <div className="flex justify-between text-center">
              <div className="">
                <p className="mr-[169px] font-medium">Activison:</p>
                <p className="font-medium ">
                  PS4, PS5, Xbox One, Xbox Series 
                </p>
              </div>
              <div className="w-[120px] py-[5px] border-none overflow-hidden rounded-lg  bg-gradient-to-r from-red-600 to-indigo-500 hover:bg-gradient-to-l to-indigo-500 from-red-600 text-white">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="around">
          <div className="relative mt-[20px]">
            <img
              className="rounded-lg md:w-[60%]"
              src="https://hostim-html.themetags.com/assets/img/home3/ft-2.jpg"
              alt=""
            />
            <div className="w-[92%] md:w-[52%] absolute top-[1%] mx-auto left-[4%] backdrop-blur-[33px] p-[20px] rounded-lg text-white bg-[rgba(0,0,0,.6)]">
              <h1 className="text-[30px] font-extrabold ">
                Assassin's Creed Valhalla
              </h1>
              <div className="flex">
                <p className="font-medium">$26.00</p>
                <p className="ml-[15px] mb-[20px] font-medium">$30.00</p>
              </div>
              <div className="flex justify-between text-center">
                <div className="paragraf">
                  <p className="mr-[176px] font-medium">Activison:</p>
                  <p className="font-medium">
                    PS4, PS5, Xbox One, Xbox Series
                  </p>
                </div>
                <div className="w-[120px] py-[10px] border-none overflow-hidden rounded-lg  bg-gradient-to-r from-red-600 to-indigo-500 hover:bg-gradient-to-l to-indigo-500 from-red-600 text-white">
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex">
            <div className="relative mt-[20px]">
              <img
                className="rounded-lg md:w-[60%]"
                src="https://hostim-html.themetags.com/assets/img/home3/ft-3.jpg"
                alt=""
              />
              <div className="w-[92%] md:w-[52%] absolute top-[73%] mx-auto left-[4%] backdrop-blur-[33px] p-[20px] rounded-lg text-white bg-[rgba(0,0,0,.6)]">
                <h1 className="text-[15px] font-extrabold ">
                  Assassin's Creed Valhalla
                </h1>
                <div className="flex">
                  <p className="font-medium">$26.00</p>
                  <p className="ml-[15px] mb-[20px] font-medium">$30.00</p>
                </div>
                <div className="flex justify-between text-center">
                  <div className="w-[120px] py-[8px] border-none overflow-hidden rounded-lg  bg-gradient-to-r from-red-600 to-indigo-500 hover:bg-gradient-to-l to-indigo-500 from-red-600 text-white">
                    <button>Order Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-[20px]">
              {" "}
              <img
                className="rounded-lg  md:w-[60%]"
                src="https://hostim-html.themetags.com/assets/img/home3/ft-4.jpg"
                alt=""
              />
              <div className="w-[92%] md:w-[52%]  absolute top-[73%] mx-auto left-[4%] backdrop-blur-[33px] p-[20px] rounded-lg text-white bg-[rgba(0,0,0,.6)]">
                <h1 className="text-[15px] font-extrabold ">
                  Assassin's Creed Valhalla
                </h1>
                <div className="flex">
                  <p className="font-medium">$26.00</p>
                  <p className="ml-[15px] mb-[20px] font-medium">$30.00</p>
                </div>
                <div className="flex justify-between text-center">
                  <div className="w-[120px] py-[8px] border-none overflow-hidden rounded-lg  bg-gradient-to-r from-red-600 to-indigo-500 hover:bg-gradient-to-l to-indigo-500 from-red-600 text-white">
                    <button>Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
