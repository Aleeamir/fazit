import React from "react";
import CategoryButton from "../CategoryButton";

const KeywordSection = ({ title, categories, onCategoryClick }) => {
  return (
    <div className="mb-4 rounded-lg  py-4 px-4">
      <h2 className="text-sm rounded-lg text-categrycolor  px-2 ">{title}</h2>
      <div className="flex space-x-1 overflow-x-auto  items-center pl-[50px]">
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            label={category.label}
            count={category.count}
            icon={category.icon}
            selected={category.selected}
            onClick={onCategoryClick} // Pass click handler
          />
        ))}
      </div>
    </div>
  );
};

export default KeywordSection;
