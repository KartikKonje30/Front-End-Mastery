import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div>
        <img src="./assets/Logo.svg" alt="Logo" />
        <button>Hoister is hiring</button>
      </div>
      <div>
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
