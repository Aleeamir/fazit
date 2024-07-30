// src/components/SearchBar.js
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-3xl shadow-md w-full">
      <select className="bg-white border rounded-l-lg ">
        <option value="all">All</option>
        {/* Add more options as needed */}
      </select>
      <input
        type="text"
        className="flex-grow border-5 w-80 bg-blue-200"
        placeholder="Search..."
      />
      <button className=" px-2  bg-red-500 text-white rounded-r-lg">
        FAZIT
      </button>
    </div>
  );
};

export default SearchBar;
