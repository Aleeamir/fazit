import React from "react";
import CategoryButton from "./CategoryButton";

const Section = ({ title, categories, OnSendCountry }) => {
  return (
    <div
      className="mb-4 rounded-lg "
      style={{ backgroundColor: "#f5f5f5", display: "inline-block" }}
    >
      <h2
        className="text-sm text-categrycolor bg-gray-100 mb-2 px-2 py-1"
        style={{
          backgroundColor: "#e8e9e9",
          borderRadius: "12px 0 0 0",
          borderTopRightRadius: "12px",
          fontFamily: "Arial",
          fontSize: "14px",
          textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        }}
      >
        {title}
      </h2>

      <div
        className="flex space-x-1 overflow-x-auto items-center pl-[30px]"
        style={{ width: "auto" }}
      >
        <div
          style={{
            width: "44%",
            height: "9%",
            backgroundColor: "white",
            position: "absolute",
            margin: "0px 7px ",
            marginBottom: "5px",
          }}
        ></div>
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            label={category.label}
            count={category.count}
            icon={category.icon}
            selected={category.selected}
            OnSendCountry={OnSendCountry}
          />
        ))}
      </div>
    </div>
  );
};
export default Section;
