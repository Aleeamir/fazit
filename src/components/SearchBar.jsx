// src/components/SearchBar.js
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center rounded-3xl w-full mr-1 pt-3" style={{ marginLeft: '8px' }}>
      <div className="relative">
        <select
          className="bg-gray-300 appearance-none"
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            color: '#333', // Changed to a visible color
            borderRadius: '20px 0px 0px 20px',
            padding: '0px 22px 1px 15px', // Add padding for the dropdown arrow
            background: 'linear-gradient(to bottom, #ffffff, #ececec, #d1d1d1, #b8b8b8)',
            cursor: 'pointer', // Change cursor to pointer
            width: '60px', // Adjusted width
            height: '26px', // Match input height
          }}
        >
          <option value="all" style={{ color: '#333', }}>All</option>
          {/* Add more options as needed */}
        </select>
        {/* Custom dropdown arrow */}
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none text-[12px] top-[13px]">▼</span>

      </div>
      <input
        type="text"
        className="h-6 border-5 rounded-l-none bg-blue-200 px-2 py-2 pr-2"
        style={{
          border: "1px solid rgba(8, 62, 135, 0.5)",
          width: '80%',
          height: '26px'
        }}
        placeholder="Search..."
      />
      <button
        className="px-2 bg-[#ba3030] text-white rounded-r-lg"
        style={{ borderRadius: '0px 20px 20px 0px', height:'26px', fontSize: '14px', paddingRight: '17px'}}
      >
        FAZIT
      </button>
    </div>
  );
};

export default SearchBar;