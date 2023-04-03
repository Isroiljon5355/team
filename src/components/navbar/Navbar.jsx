import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Navbar() {
  const [open, setOpen] = useState(true);
  function openHandle() {
    setOpen(!open);
  }

  return (
    <div>
      <nav className="bg-[#292937] py-3 px-3">
        <div className="max-w-6xl mx-auto px-4">
          {/* logo */}
          <div className="flex justify-between items-center">
            <div>
              <img
                style={{ width: "150px", cursor: "pointer" }}
                src={logo}
                alt=""
              />{" "}
            </div>
            {/* primary nav */}
            <div>
              <ul className="text-white hidden md:block  items-center space-x-9 outline-none">
                <Link>
                  <select className="bg-[#292937] cursor-pointer">
                    <option>Home</option>
                    <option>Salom</option>
                    <option>Salom</option>
                    <option>Salom</option>
                  </select>
                </Link>
                <Link>About</Link>
                <Link>Domain</Link>
                <Link>
                  <select className="bg-[#292937] cursor-pointer">
                    <option>Hostim</option>
                    <option>Salom</option>
                    <option>Salom</option>
                    <option>Salom</option>
                  </select>
                </Link>
                <Link>
                  <select className="bg-[#292937] cursor-pointer">
                    <option>Pages</option>
                    <option>Salom</option>
                    <option>Salom</option>
                    <option>Salom</option>
                  </select>
                </Link>
              </ul>
            </div>
            {/* secondary nav */}
            <div>
              <button
                class="w-40 hidden md:block h-12 rounded-full text-white
        bg-gradient-to-r from-red-500 via-purple-700 to-blue-700"
              >
                Get Quote
              </button>
            </div>
            <div className=" md:hidden flex items-center">
              <button
                onClick={
                  !open ? (
                    <div className="mobile-menu hidden">
                      <ul>
                        <Link className="block py-2 px-4 text-sm hover:bg-gray-200">
                          Home
                        </Link>
                        <Link className="block py-2 px-4 text-sm hover:bg-gray-200">
                          Home
                        </Link>
                      </ul>
                    </div>
                  ) : null
                }
                className="mobile-menu-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
      </nav>
    </div>
  );
}

export default Navbar;
