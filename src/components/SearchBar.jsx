// src/components/SearchBar.js
import React from "react";
import "./fazitButton.css"
const SearchBar = () => {
  return (
    <div className="flex items-center rounded-3xl w-full mr-1 pt-3" style={{ marginLeft: '8px' }}>
      <div className="relative">
              <select
                className="bg-gray-300 appearance-none text-[11px] border-[1px] border-[#98999c]"
                style={{
                  color: "#333",
                  borderRadius: "50px 0px 0px 50px",
                  padding: "2px 10px 1px 10px",

                  background:
                    "linear-gradient(to bottom, #ffffff, #ececec, #d1d1d1, #b8b8b8)",
                  cursor: "pointer",
                  width: "47px",
                  height: "26px",
                  fontFamily: "arial",
                  // marginRight:'1px'
                  borderRightWidth: "2px",
                }}
              >
                <option value="all" style={{ color: "#333" }}>
                  All
                </option>
              </select>
              <span className="absolute right-2 transform -translate-y-1/2 text-[#7c7c7c] pointer-events-none text-[11px] top-[50%]">
                ▼
              </span>
            </div>
      <input
        type="text"
        className="h-6 border-5 rounded-l-none bg-blue-200 px-2 py-2 pr-2"
        style={{
          border: "1px solid rgba(8, 62, 135, 0.5)",
          width: '80%',
          height: '26px',
          userSelect:'none' ,outline:'none'
        }}
        placeholder="Search..."
      />
      <button className="fazit-button">FAZIT</button>

    </div>
  );
};

export default SearchBar;