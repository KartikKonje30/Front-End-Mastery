import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-center md:py-4">
      <ul className="flex gap-6 text-gray-500 font-lato">
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
      <div className="flex gap-2">
        <img src="./assets/Help-Avatar.svg" alt="help" />
        <div>
          <p className="font-playfair font-thin">Have any questions?</p>
          <a href="#" className="font-lato font-bold">Talk to a specialist</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
