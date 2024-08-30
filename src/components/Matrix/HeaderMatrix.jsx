import React from "react";
import logo from "../../assets/logo.png";
const HeaderMatrix = ({ togglePopup, onNewReturn, text }) => {
  return (
    <header
      className="flex justify-between items-center  bg-white  py-[58px] "
      style={{ height: "126px" }}
    >
      <div
        className="flex items-center"
        style={{ marginTop: "10px", marginBottom: "19px", marginLeft: "70px" }}
      >
        <img
          src={logo}
          alt="Fazit Logo"
          style={{ width: "191px", height: "104px" }}
        />
        <h1 className="text-popupcolor pl-4 text-3xl text-bold">{text}</h1>
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
                onNewReturn();
                togglePopup();
              }}
            >
              RETURN DATA
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMatrix;
