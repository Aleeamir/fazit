import React from "react";

const CategoryButton = ({ label, count, icon, selected, OnSendCountry }) => {
  return (
    <div
      className="flex flex-col items-center w-auto px-4 py-2 cursor-pointer transition-transform "
      onClick={OnSendCountry}
    >
      <span
        className={`text-xs ${selected ? "text-red-700" : "text-gray-700"}`}
        style={{ fontSize: "14px", textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)" }}
      >
        {label}
      </span>
      <div className="my-[10px] flex items-center justify-center">
        <img
          src={icon}
          alt={label}
          className=" object-contain"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
      <span
        className={`text-sm ${selected ? "text-red-700" : "text-gray-700"}`}
        style={{ fontFamily: "Arial" }}
      >
        {count}
      </span>
    </div>
  );
};

export default CategoryButton;
