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
  className={`text-xs py-[10px]`}
  style={{
    fontSize: "14px",
    textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
    color: selected
      ? "#99063c"
      : title === "COUNTRY"
        ? (label === "All" ? "#c7ab6d" :
           label === "UnitedStates" ? "#b75f7e" :
           label === "Germany" ? "#787876" :
           label === "UnitedKingdom" ? "#6c7ca4" :
           label === "Comoros" ? "#94bc8f" :
           label === "France" ? "#5b6cb1" :
           label === "More..." ? "#0066f5" :
           "") 
        : (title !== "COUNTRY"
            ? (label === "All" ? "#c7ab6d" :
               label === "UnitedStates" ? "#b75f7e" :
               label === "Germany" ? "#787876" :
               label === "UnitedKingdom" ? "#6c7ca4" :
               label === "Comoros" ? "#94bc8f" :
               label === "France" ? "#5b6cb1" :
               label === "More..." ? "blue" :
               "#0066f5")
            : "")
  }}
>
  {label}
</span>




      {/* <div className=" flex items-center justify-center py-[10px]"> */}
      <div className=" flex items-center justify-center py-[10px]">

        <img
          src={title === "COUNTRY" || title=="DATA" ? icon : selected ? selectedIcon : unselectedIcon}
          alt={label}
          className="object-contain"
          // style={{ mixBlendMode: "multiply"}}
          style={{
            mixBlendMode: "multiply",
            // marginTop: "10px",
            // marginBottom: "10px",
            marginLeft: "10px",
            height: "65px",
            width: "83px",
          }}
        />
      </div>
      {/* <span
        className={`text-sm ${
          selected ?title=="COUNTRY"?"text-red-700": "text-[#99063c] underline" : title==="COUNTRY"?"text-[#6d401b]":"text-[#0066f5]"
        } py-[10px]`}
        style={{ fontFamily: "Arial" }}
      >
        {count}
      </span> */}
      <span
  className={`text-sm py-[10px] ${selected ? 'underline' : ''}`}
  style={{
    fontFamily: "Arial",
    color: selected
      ? "#99063c"
      : title === "COUNTRY"
        ? (label === "All" ? "#c7ab6d" :
           label === "UnitedStates" ? "#b75f7e" :
           label === "Germany" ? "#787876" :
           label === "UnitedKingdom" ? "#6c7ca4" :
           label === "Comoros" ? "#94bc8f" :
           label === "France" ? "#5b6cb1" :
           label === "More..." ? "#0066f5" :
           "") 
        : (title !== "COUNTRY"
            ? (label === "All" ? "#c7ab6d" :
               label === "UnitedStates" ? "#b75f7e" :
               label === "Germany" ? "#787876" :
               label === "UnitedKingdom" ? "#6c7ca4" :
               label === "Comoros" ? "#94bc8f" :
               label === "France" ? "#5b6cb1" :
               label === "More" ? "blue" :
               "#0066f5")
            : "")
  }}
>
  
  {count}
</span>

    </div>
  );
};

export default CategoryButton;
