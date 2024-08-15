import React from "react";

const CategoryButton = ({ label, count, icon, selected, onClick }) => {
  return (
    <div
      className="flex flex-col items-center w-auto px-2 cursor-pointer"
      onClick={onClick}
    >
      <span
        className={`text-[10px] mb-1 ${
          selected ? "text-red-700 font-bold" : "text-gray-700"
        }`}
      >
        {label}
      </span>
      <div className="flex items-center justify-center w-full h-[60px] bg-white rounded-full p-2">
        <img src={icon} alt={label} className="h-[40px] w-[40px]" />
      </div>
      <span
        className={`text-sm font-bold ${
          selected ? "text-red-700" : "text-gray-700"
        }`}
        style={{ fontFamily: "Arial" }}
      >
        {count}
      </span>
    </div>
  );
};

export default CategoryButton;
