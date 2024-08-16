// src/components/SearchBar.js
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-3xl shadow-md w-full">
      <select className="bg-gray-300 border rounded-l-lg ">
        <option value="all">All</option>
        {/* Add more options as needed */}
      </select>
      <input
        type="text"
        className="w-full h-6 border-5 rounded-l-none bg-blue-200 px-2 py-2 pr-2"
        placeholder="Search..."
      />
      <button className=" px-2  bg-[#ba3030] text-white rounded-r-lg">
        FAZIT
      </button>
    </div>
  );
};

export default SearchBar;
