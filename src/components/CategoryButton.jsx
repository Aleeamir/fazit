import React from "react";

const CategoryButton = ({ label, count, icon, selected, onClick }) => {
  return (
    <div
      className="flex flex-col items-center bg-stone-50 w-auto px-4 py-2 cursor-pointer"
      onClick={onClick} // Add click event handler
    >
      <span
        className={`text-sm ${selected ? "text-red-700 " : "text-gray-700"}`}
      >
        {label}
      </span>
      <img src={icon} alt={label} className="w-10 h-10 my-1" />
      <span
        className={`text-sm ${selected ? "text-red-700 " : "text-gray-700"}`}
      >
        {count}
      </span>
    </div>
  );
};

export default CategoryButton;
