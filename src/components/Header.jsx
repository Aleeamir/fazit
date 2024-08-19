import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header
      className="flex justify-between items-center  bg-white  pl-[58px] py-[58px] "
      style={{ height: 83 }}
    >
      <div
        className="flex items-center"
        style={{ marginTop: "11px", marginBottom: "19px", marginLeft: "67px" }}
      >
        <img
          src={logo}
          alt="Fazit Logo"
          style={{ width: "180px", height: "auto" }}
        />
      </div>
      <div
        className="flex items-center   space-x-4 pr-[10px] rounded-3xl "
        style={{ marginTop: "58px", marginBottom: "30px", marginRight: "25px" }}
      >
        <span className="text-categrycolor  text-[18px]">SEARCH 1</span>
        <div className="border-gray-700  border-2 rounded-3xl">
          <div className="flex items-center w-full">
            <select className=" bg-gray-50   rounded-l-lg ">
              <option value="all">All</option>
            </select>
            <input
              type="text"
              className="flex-grow w-96  text-gray-950  bg-gray-200"
              style={{ width: "471px" }}
              placeholder="San Francisco 49ers"
            />
            <button className=" px-4  bg-[#ba3030] text-white rounded-r-lg">
              FAZIT
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
