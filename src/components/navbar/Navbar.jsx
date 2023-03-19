import React from "react";
import Logo from "../../images/logo-white.png";

function Navbar() {
  return (
    <div>
      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
        defer
      ></script>
      <div class="min-h-screen ">
        <div class="antialiased bg-gray-100 dark-mode:bg-gray-900">
          <div class=" text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div
              x-data="{ open: true }"
              class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 bg-[#292937] w-[300vh]"
            >
              <div class="flex items-center justify-between p-4 ">
                <img src={Logo} alt="" />
                <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                  <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                    <path
                      x-show="!open"
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      x-show="open"
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                <a
                  class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 text-white hover:duration-500 hover:text-[#F16262] focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  Blog
                </a>
                <a
                  class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 text-white hover:duration-500 hover:text-[#F16262] focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  Portfolio
                </a>
                <a
                  class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 text-white hover:text-[#F16262] hover:duration-500 focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  About
                </a>
                <a
                  class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 text-white hover:text-[#F16262] hover:duration-500 focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  Contact
                </a>
              </nav>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Purple to blue
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
