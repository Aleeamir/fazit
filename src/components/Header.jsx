import React from "react";
import logo from "../assets/logo.png";
import "./fazitButton.css"
const Header = () => {
  return (
    <header
      className="flex justify-between items-center  bg-white  pl-[58px] py-[58px] "
      style={{ height: "123px" }}
    >
      <div
        className="flex items-center"
        // style={{ marginTop: "11px", marginBottom: "19px", marginLeft: "67px" }}
        style={{ marginTop: "11px", marginBottom: "19px", marginLeft: "67px" }}
      >
        <img
          src={logo}
          alt="Fazit Logo"
          // style={{ width: '180px', height: 'auto' }}
          style={{ width: "191px", height: "104px" }}
        />
      </div>
      <div
        className="flex items-center space-x-4 pr-[10px] rounded-3xl "
        style={{ marginTop: "58px", marginBottom: "30px", marginRight: "40px" }}
      >
        <span className="text-categrycolor text-[14px]">SEARCH 1</span>
        <div className="relative rounded-3xl">
          <div className="flex items-center w-full">
            <div className="relative">
              <select
                className="mb-[2px] bg-gray-300 appearance-none text-[11px] border-[1px] border-[#98999c]"
                style={{
                  color: "#333", // Changed to a visible color
                  borderRadius: "10px 0px 0px 10px",
                  padding: "0px 10px 1px 10px", // Add padding for the dropdown arrow
                  background:
                    "linear-gradient(to bottom, #ffffff, #ececec, #d1d1d1, #b8b8b8)",
                  cursor: "pointer", // Change cursor to pointer
                  width: "47px", // Adjusted width
                  height: "26px", // Match input height
                }}
              >
                <option value="all" style={{ color: "#333" }}>
                  All
                </option>
                {/* Add more options as needed */}
              </select>
              {/* Custom dropdown arrow */}
              <span className="absolute right-2 transform -translate-y-1/2 text-[#7c7c7c] pointer-events-none text-[12px] top-[55%]">
                ▼
              </span>
            </div>
            <input
              type="text"
              className="flex-grow w-96 border-[1px]  border-[#98999c] h-6 bg-gray-200 placeholder:text-[#0d1444] px-3"
              style={{ width: "518px", height: "26px" }}
              placeholder="Search..."
            />
            <button className="fazit-button">FAZIT</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
