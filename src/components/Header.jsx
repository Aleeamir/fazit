import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header
      className="flex justify-between items-center  bg-white  pl-[50px] py-[50px] shadow"
      style={{ height: 83 }}
    >
      <div className="flex items-center">
        <img src={logo} alt="Fazit Logo" />
      </div>
      <div className="flex items-center space-x-4 pr-[10px] rounded-3xl ">
        <span className="text-categrycolor text-[14px]">SEARCH 1</span>
        <div className="relative border-2 rounded-3xl">
          <div className="flex items-center  shadow-md w-full">
            <select className="bg-gray-100 border rounded-l-lg ">
              <option value="all">All</option>
            </select>
            <input
              type="text"
              className="flex-grow w-96  border-5 bg-gray-200"
              placeholder="Search..."
            />
            <button className=" px-2  bg-[#ba3030] text-white rounded-r-lg">
              FAZIT
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
