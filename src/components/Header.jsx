import React from "react";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header
      className="flex justify-between items-center  bg-white p-4 shadow"
      style={{ height: 83 }}
    >
      <div className="flex items-center">
        <img src={logo} alt="Fazit Logo" className="h-16 w-32" />
      </div>
      <div className="flex items-center space-x-4 ">
        <span className="text-categrycolor text-sm">SEARCH 1</span>
        <div className="relative">
          <div className="flex items-center bg-gray-100 rounded-3xl shadow-md w-full">
            <select className="bg-white border rounded-l-lg ">
              <option value="all">All</option>
            </select>
            <input
              type="text"
              className="flex-grow w-96  border-5 bg-blue-200"
              placeholder="Search..."
            />
            <button className=" px-2  bg-red-500 text-white rounded-r-lg">
              FAZIT
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
