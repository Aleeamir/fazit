// src/components/SearchBar.js
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative flex items-center bg-gray-100 rounded-3xl pl-0 mr-0 shadow-md w-full">
    <select className="bg-gray-200 border rounded-l-lg">
      <option value="all">All</option>
      {/* Add more options as needed */}
    </select>
    <div className="relative flex-grow">
      <input
        type="text"
        className="w-full border-5 bg-blue-200 pr-10"
        placeholder="Search..."
      />
      <button
        className="absolute inset-y-0 right-0 flex items-center px-2 text-categrycolor"
    
      >
        clear
      </button>
    </div>
    
    <button className="px-2 bg-[#ba3030] text-white rounded-r-lg">
      FAZIT
    </button>
  </div>
  
  );
};

export default SearchBar;
