import React from "react";
import logo from "../../assets/logo.png";
const QueryHeader = ({ togglePopup, queryReturnData, text }) => {
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
            <button
              className=" px-2  bg-popupcolor text-white rounded-lg"
              onClick={() => {
                queryReturnData();
                togglePopup();}}
            >
              RETURN DATA
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default QueryHeader;
