import React from "react";

const CategoryButton = ({ label, count, icon, selected, onClick }) => {
  return (
    <div
      className="flex flex-col items-center  w-auto px-4 pl-2 cursor-pointer"
      onClick={onClick}
    >
      <span
        className={`text-[10px]   ${
          selected ? "text-red-700 " : "text-gray-700"
        }`}
      >
        {label}
      </span>
      <div className=" my-[10px] ml-[10px] mr-[5px]  ">
        <img src={icon} alt={label} className="" />
      </div>

      <span
        className={`text-sm font-  ${
          selected ? "text-red-700 " : "text-gray-700"
        }`}
        style={{ fontFamily: "arial" }}
      >
        {count}
      </span>
    </div>
  );
};

export default CategoryButton;
