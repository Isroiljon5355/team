import React from "react";

function What() {
  return (
    <div className="ml-[15px]">
      <div className="relative ">
        <img
          className="rounded-lg "
          src="https://hostim-html.themetags.com/assets/img/home3/ft-10.jpg"
          alt=""
        />
        <div className="w-[92%] md:w-[92%] md:top-[14%] lg:w-[92%] lg:top-[18%] xl:w-[92%] xl:top-[36%] absolute top-[45%] mx-auto left-[4%] backdrop-blur-[33px] p-[20px] rounded-lg text-white bg-[rgba(0,0,0,.6)]">
          <h1 className="text-[30px] md:text-[22px] lg:text-[25px] font-extrabold ">
            Assassin's Creed Valhalla
          </h1>
          <div className="flex">
            <p className="font-medium">$26.00</p>
            <p className="ml-[15px] mb-[20px] font-medium">$30.00</p>
          </div>
          <div className="flex justify-between text-center">
            <div className="lg:hidden md:hidden">
              <p className="mr-[176px] font-medium">Activison:</p>
              <p className="font-medium">PS4, PS5, Xbox One, Xbox Series</p>
            </div>
            <div className="w-[120px] py-[10px] border-none overflow-hidden rounded-lg  bg-gradient-to-r from-red-600 to-indigo-500 hover:bg-gradient-to-l to-indigo-500 from-red-600 text-white">
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex mt-[12px]">
        <div className="group relative overflow-hidden cursor-pointer">
          <div className="relative">
            {" "}
            <img
              className="rounded-lg w-[330px] ml-2 object-cover"
              src="https://hostim-html.themetags.com/assets/img/home3/ft-15.jpg"
              alt=""
            />
            <div className=" absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
            <div className="w-[92%] sm:w-[53%] md:w-[92%] md:top-[14%] lg:w-[92%] lg:top-[17%] xl:w-[92%]  inset-0  translate-y-[100%] h-[140px] group-hover:translate-y-0 transition-all xl:top-[20%] absolute mx-auto left-[8%] backdrop-blur-[33px] p-[20px] rounded-lg text-white bg-[rgba(0,0,0,.6)]">
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
        <div className="group relative overflow-hidden cursor-pointer">
          <div className="relative">
            {" "}
            <img
              className="rounded-lg w-[330px] ml-2 object-cover"
              src="https://hostim-html.themetags.com/assets/img/home3/ft-15.jpg"
              alt=""
            />
            <div className=" absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
            <div className="w-[92%] sm:w-[53%] md:w-[92%] md:top-[14%] lg:w-[92%] lg:top-[17%] xl:w-[92%]  inset-0  translate-y-[100%] h-[140px] group-hover:translate-y-0 transition-all xl:top-[20%] absolute mx-auto left-[8%] backdrop-blur-[33px] p-[20px] rounded-lg text-white bg-[rgba(0,0,0,.6)]">
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
  );
}

export default What;
