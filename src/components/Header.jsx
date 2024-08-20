import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header
      className="flex justify-between items-center  bg-white  pl-[58px] py-[58px] "
      style={{ height: '123px' }}
    >
      <div
        className="flex items-center"
        // style={{ marginTop: "11px", marginBottom: "19px", marginLeft: "67px" }}
        style={{ marginTop: "11px", marginBottom: "19px", marginLeft: "67px" }}
      >
        <img src={logo} alt="Fazit Logo"
          // style={{ width: '180px', height: 'auto' }}
          style={{ width: '191px', height: '104px' }}
        />
      </div>
      <div
        className="flex items-center space-x-4 pr-[10px] rounded-3xl "
        style={{ marginTop: "58px", marginBottom: "30px", marginRight: "25px" }}
      >
        <span className="text-categrycolor text-[14px]">SEARCH 1</span>
        <div className="relative rounded-3xl">
          <div className="flex items-center w-full">
          <div className="relative">
        <select
          className="bg-gray-300 appearance-none"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            color: '#333', // Changed to a visible color
            borderRadius: '20px 0px 0px 20px',
            padding: '0px 22px 1px 15px', // Add padding for the dropdown arrow
            background: 'linear-gradient(to bottom, #ffffff, #ececec, #d1d1d1, #b8b8b8)',
            cursor: 'pointer', // Change cursor to pointer
            width: '60px', // Adjusted width
            height: '25px', // Match input height
          }}
        >
          <option value="all" style={{ color: '#333', }}>All</option>
          {/* Add more options as needed */}
        </select>
        {/* Custom dropdown arrow */}
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none text-[12px] top-[13px]">▼</span>

      </div>
            <input
              type="text"
              className="flex-grow w-96 border-2 border-gray-400 h-6 bg-gray-200"
              style={{ width: "471px" }}
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
