import React from "react";
function Section() {
  return (
    <div className="sm:grid  ">
      <div className="flex justify-between relative py-[20px] px-[10%] ">
        <div className="mr-[20px]  ">
          <img
            className="rounded-lg"
            src="https://hostim-html.themetags.com/assets/img/home3/ft-1.jpg"
            alt=""
          />
          <div className="w-[33%] h-[200px] absolute top-[61%] mx-[37px] backdrop-blur-[33px] p-[20px] rounded-lg text-white bg-[rgba(0,0,0,.6)] sm:grid-cols-1   ">
            <h1 className="text-[30px] font-extrabold ">
              Assassin's Creed Valhalla
            </h1>
            <div className="flex ">
              <p className="font-medium">$26.00</p>
              <p className="ml-[15px] mb-[40px] font-medium">$30.00</p>
            </div>
            <div className="flex justify-between text-center">
              <div className="">
                <p className="mr-[176px] font-medium">Activison:</p>
                <p className="font-medium ">
                  PS4, PS5, Xbox One, Xbox Series X
                </p>
              </div>
              <div className="w-[120px] py-[5px] border-none overflow-hidden rounded-lg  bg-gradient-to-r from-red-600 to-indigo-500 hover:bg-gradient-to-l to-indigo-500 from-red-600 text-white">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="around">
          <div className="n2">
            <img
              className="rounded-lg"
              src="https://hostim-html.themetags.com/assets/img/home3/ft-2.jpg"
              alt=""
            />
            <div className="w-[33%] h-[180px] absolute top-[15%] mx-[37px] backdrop-blur-[33px] p-[20px] rounded-lg text-white bg-[rgba(0,0,0,.6)]">
              <h1 className="text-[30px] font-extrabold ">
                Assassin's Creed Valhalla
              </h1>
              <div className="flex">
                <p className="font-medium">$26.00</p>
                <p className="ml-[15px] mb-[30px] font-medium">$30.00</p>
              </div>
              <div className="flex justify-between text-center">
                <div className="paragraf">
                  <p className="mr-[176px] font-medium">Activison:</p>
                  <p className="font-medium">
                    PS4, PS5, Xbox One, Xbox Series X
                  </p>
                </div>
                <div className="w-[120px] py-[10px] border-none overflow-hidden rounded-lg  bg-gradient-to-r from-red-600 to-indigo-500 hover:bg-gradient-to-l to-indigo-500 from-red-600 text-white">
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-[10px] mt-[18px] ">
            <div className="mr-[22px]">
              <img
                className="rounded-lg"
                src="https://hostim-html.themetags.com/assets/img/home3/ft-3.jpg"
                alt=""
              />
              <div className="w-[15%] h-[160px] absolute top-[67%] mx-[30px] backdrop-blur-[33px] p-[20px] rounded-lg text-white bg-[rgba(0,0,0,.6)]">
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
            <div className="img4">
              {" "}
              <img
                className="rounded-lg"
                src="https://hostim-html.themetags.com/assets/img/home3/ft-4.jpg"
                alt=""
              />
              <div className="w-[15%] h-[160px] absolute top-[67%] mx-[30px] backdrop-blur-[33px] p-[20px] rounded-lg text-white bg-[rgba(0,0,0,.6)]">
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
