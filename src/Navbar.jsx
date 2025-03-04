import { useState } from "react";
import { FiMenu, FiUser } from "react-icons/fi";

const Navbar = ({ triggerUsericon }) => {
  return (
    <nav className="text-grey-900 ">
      <div className="container mx-auto flex justify-between items-center">
        <a href="">
          <img
            src="./logo2.png"
            className="h-18 md:h-22 md:flex w-auto p-3 mt-2 md:p-2 md:pt-5"
            alt=""
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-green-900 transition">
            Home
          </a>
          <a href="#" className="hover:text-green-900 transition">
            About
          </a>
          <a href="#" className="hover:text-green-900 transition">
            Services
          </a>
          <a href="#" className="hover:text-green-900 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={triggerUsericon}>
          <span className="text-4xl">
            <FiUser className="p-1 m-3" />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
