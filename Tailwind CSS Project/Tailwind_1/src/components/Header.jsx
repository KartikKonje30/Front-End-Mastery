import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center gap-2 ">
        <img src="./assets/Logo.svg" alt="Logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-500 text-xs text-white rounded-3xl px-2.5 py-1.5">
          Hoister is hiring
        </button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-500 gap-6">
        <li>
          <a href="#">Plans</a>
        </li>
        <li>
          <a href="#">Find Domain</a>
        </li>
        <li>
          <a href="#">Why Hoster</a>
        </li>
      </ul>
      <div className="hidden lg:flex justify-between items-center font-lato gap-4">
        <a href="#" className="text-gray-500">Sign in</a>
        <button className="rounded-md px-4 py-3 bg-blue-500 text-white hover:bg-blue-700">Join Waitlist</button>
      </div>
      <div className="lg:hidden">
        <FaBars className="size-7" />
      </div>
    </div>
  );
};

export default Header;
