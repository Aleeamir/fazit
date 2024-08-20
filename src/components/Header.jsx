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
        // style={{ marginTop: "11px", marginBottom: "19px", marginLeft: "67px" }}
        style={{ marginTop: "11px", marginBottom: "19px", marginLeft: "50px" }}
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
          <select className="bg-gray-300  " style={{border:"1px solid rgba(0, 0, 0, 0.1)",color:'dadada',borderRadius:'20px 0px 0px 20px',background: 'linear-gradient(to bottom, #ffffff, #ececec, #d1d1d1, #b8b8b8)'}} >
        <option value="all" style={{color:'#d9d9d9'}}>All</option>
        {/* Add more options as needed */}
      </select>
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
