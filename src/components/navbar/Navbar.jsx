import React from "react";
import Logo from "../../images/logo-white.png";

function Navbar() {
  return (
    <div>
      <div className="min-h-screen ">
        <div className="antialiased bg-gray-200 dark-mode:bg-gray-900">
          <div className=" text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 ">
            <div
              x-data="{ open: true }"
              className="flex flex-col sm:px-40 lg:py-1 mx-auto md:items-center md:justify-between md:flex-row  bg-[#292937]"
            >
              <div className="flex items-center justify-between p-4 ">
                <img src={Logo} alt="" />
                <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      x-show="!open"
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 text-white hover:duration-500 hover:text-[#F16262] focus:outline-none"
                  href="#"
                >
                  Blog
                </a>
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 text-white hover:duration-500 hover:text-[#F16262] "
                  href="#"
                >
                  Portfolio
                </a>
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 text-white hover:text-[#F16262] hover:duration-500 focus:outline-none"
                  href="#"
                >
                  About
                </a>
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 text-white hover:text-[#F16262] hover:duration-500 focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  Contact
                </a>
                <button
                  type="button"
                  class=" hover:bg-white hover:border-0 hover:text-red-500 hover:font-medium ml-10 inline-block bg-red-500 rounded bg-danger px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"
                >
                  Get Quote
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
