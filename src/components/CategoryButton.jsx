import React from "react";

const CategoryButton = ({ title, label, count, icon, selected, OnClick }) => {
  return (
    <div
      className="flex flex-col items-center px-4 py-2 cursor-pointer transition-transform"
      style={{ width: "105px" }}
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
      <div className="my-[10px] mx-[10px] flex items-center justify-center py-[10px]">
        <img
          src={icon}
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
