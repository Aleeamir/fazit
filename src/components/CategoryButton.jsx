import React from "react";
import unselectedIcon from "../assets/!selected-icon.png";
import selectedIcon from "../assets/selected-icon.png";

const CategoryButton = ({ title, label, count,icon, selected, OnClick }) => {
 
  return (
    <div
      // className="flex flex-col items-center px-4 py-2 cursor-pointer transition-transform"
      className="flex flex-col items-center cursor-pointer transition-transform"
      // style={{ width: "105px" }}
      style={{ width: "82px", paddingLeft:'5px', paddingRight:'5px' }}
      onClick={OnClick}
    >
      <span
        className={`text-xs
          
          ${
          selected
            ? title === "COUNTRY"
              ? "text-red-700"
              : "text-[#99063c] "
            : title==="COUNTRY"?"text-[#6d401b]":"text-[#0066f5]"
        } py-[10px]`}
        style={{ fontSize: "14px", textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)" }}
      >
        {label}
      </span>
      <div className=" flex items-center justify-center py-[10px]">
        <img
          src={title === "COUNTRY" ? icon : selected ? selectedIcon : unselectedIcon}
          alt={label}
          className="object-contain"
          // style={{ mixBlendMode: "multiply"}}
          style={{
            mixBlendMode: "multiply",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            height: "65px",
            width: "83px",
          }}
        />
      </div>
      <span
        className={`text-sm ${
          selected ?title=="COUNTRY"?"text-red-700": "text-[#99063c] underline" : title==="COUNTRY"?"text-[#6d401b]":"text-[#0066f5]"
        } py-[10px]`}
        style={{ fontFamily: "Arial" }}
      >
        {count}
      </span>
    </div>
  );
};

export default CategoryButton;
