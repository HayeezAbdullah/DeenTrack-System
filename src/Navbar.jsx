import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FiX />
          ) : (
            <span className="text-4xl">
              <FiMenu className="p-1 m-3" />
            </span>
          )}
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-purple-800 bg-opacity-95 flex flex-col items-center justify-center space-y-6 z-50">
          <button onClick={() => setIsOpen(false)} className="text-3xl">
            <span className="text-4xl">
              <FiX />
            </span>
          </button>
          <a href="#" className="text-2xl hover:text-gray-300 transition">
            Home
          </a>
          <a href="#" className="text-2xl hover:text-gray-300 transition">
            About
          </a>
          <a href="#" className="text-2xl hover:text-gray-300 transition">
            Services
          </a>
          <a href="#" className="text-2xl hover:text-gray-300 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
