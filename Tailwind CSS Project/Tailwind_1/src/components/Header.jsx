import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center gap-2 ">
        <img src="./assets/Logo.svg" alt="Logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-500 text-xs text-white rounded-3xl px-2.5 py-1.5">Hoister is hiring</button>
      </div>
      <div>
        <FaBars className="size-7" />
      </div>
    </div>
  );
};

export default Header;
