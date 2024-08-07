import React from "react";
import CategoryButton from "./CategoryButton";

const Section = ({ title, categories, onCategoryClick }) => {
  return (
    <div className="mb-4 rounded-lg bg-backcolor py-4 px-4">
      <h2 className="text-sm rounded-lg text-categrycolor bg-back2 mb-2 px-2 py-1">
        {title}
      </h2>
      <div className="flex space-x-1 overflow-x-auto bg-stone-50 items-center pl-[50px]">
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

export default Section;
