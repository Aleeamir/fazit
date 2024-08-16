import React, { useState } from "react";

const NewSearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleEdit = () => {
    // Add your edit logic here (if needed)
    console.log("Edit button clicked");
  };

  const handleClear = () => {
    setSearchText(""); // Clear the search text
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-3xl shadow-md w-full">
      <select className="bg-gray-300 border rounded-l-lg">
        <option value="all">All</option>
        {/* Add more options as needed */}
      </select>
      <div className="relative flex-grow">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full h-6 border-5 rounded-l-none bg-blue-200 px-2 py-2 pr-2"
          placeholder="Returned Data"
        />
        <button
          className="absolute right-16 top-1/2 transform -translate-y-1/2 text-categrycolor px-3 py-1"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-categrycolor px-3 py-1"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <button
        className="px-2  bg-[#ba3030] text-white rounded-r-lg"
      >
        FAZIT
      </button>
    </div>
  );
};

export default NewSearchBar;
