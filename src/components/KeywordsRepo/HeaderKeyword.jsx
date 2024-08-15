import React from "react";
import logo from "../../assets/logo.png";
const HeaderKeyword = ({ togglePopup, text }) => {
  return (
    <header
      className="flex justify-between items-center  p-4 shadow"
      style={{ height: 83 }}
    >
      <div className="flex  items-center">
        <img src={logo} alt="Fazit Logo" className="h-16 w-32" />
        <h1 className="text-popupcolor text-3xl text-bold">{text}</h1>
      </div>
      <div className="flex  items-end space-x-4 ">
        <div className="relative">
          <div className="flex flex-col pb-4 items-end  rounded-3xl  w-full">
            <button
              className=" px-2 m-4  bg-popupcolor text-white rounded-lg"
              onClick={togglePopup}
            >
              CLOSE
            </button>
            <div className="flex items-center space-x-4 rounded-3xl">
              <span className="text-categrycolor text-[14px]">SEARCH 1</span>
              <div className="relative border-2 rounded-3xl">
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    className="flex-grow text-black w-[450px] rounded-3xl border-3 border-categrycolor"
                    placeholder="All keywrds and Search Items"
                  />
                  <button className="px-2 bg-[#ba3030] text-white rounded-r-lg">
                    FAZIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderKeyword;
