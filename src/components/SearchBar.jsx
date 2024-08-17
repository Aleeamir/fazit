// src/components/SearchBar.js
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center rounded-3xl w-full mr-1 pt-3 " style={{marginLeft:'8px'}}>
      <select className="bg-gray-300  " style={{border:"1px solid rgba(0, 0, 0, 0.1)",color:'dadada',borderRadius:'20px 0px 0px 20px'}} >
        <option value="all" style={{color:'#d9d9d9'}}>All</option>
        {/* Add more options as needed */}
      </select>
      <input
        type="text"
        className=" h-6 border-5 rounded-l-none  bg-blue-200 px-2 py-2 pr-2 " style={{border: "1px solid rgba(8, 62, 135, 0.5)"
          ,width:'80%'}}
        placeholder=""
      />
      <button className=" px-2  bg-[#ba3030] text-white rounded-r-lg" style={{borderRadius:'0px 20px 20px 0px'}}>
        FAZIT
      </button>
    </div>
  );
};

export default SearchBar;
