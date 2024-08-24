import React, { useState } from "react";
import CategoryButton from "./CategoryButton";

const Section = ({ title, categories, OnSendCountry }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index);
    OnSendCountry(); // Trigger any additional actions on category click
  };

  return (
    <div
      className="mb-4 rounded-lg"
      style={{
        backgroundColor: "#f5f5f5",
        display: "inline-block",
        width: "100%",
        borderRadius: '25px 25px 25px 25px'
      }}
    >
      <h2
        className="text-sm text-[#a98c3c] bg-gray-100 mb-2 pt-[10px] pl-[20px] h-[30px]"
        style={{
          backgroundColor: "#e8e9e9",
          // borderRadius: "12px 0 0 0",
          borderTopRightRadius: "12px",
          fontFamily: "Arial",
          fontSize: "14px",
          textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
          borderRadius: "20px 20px 0px 0px"
        }}
      >
        {title}
      </h2>

      <div
        className="flex space-x-1 overflow-x-auto items-center pl-[45px]"
        style={{ width: "auto" }}
      >
        <div
          style={{
            //whitebar
            width: "38%",
            height: "6%",
            backgroundColor: "white",
            position: "absolute",
            margin: "0px 7px ",
            marginBottom: "5px",
            marginTop: "0px",
          }}
        ></div>
        {categories.map((category, index) => (
          <CategoryButton
          title={title}
            key={index}
            label={category.label}
            count={category.count}
            icon={category.icon}
            selected={index === selectedCategoryIndex}
            OnClick={() => handleCategoryClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
