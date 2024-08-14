import React from "react";
import QueryHeader from "./QueryHeader.jsx";
import AfterHeaderQuery from "./AfterHeaderQuery.jsx";
import Articles from "../Articles";
import SearchBar from "../SearchBar";
import QueryComponent from "./QueryComponent.jsx";

const QueryApp = ({ togglePopup, onRetrun }) => {
  return (
    <div className="fixed inset-0 flex flex-col bg-white m-0 p-0 z-50 overflow-y-auto">
      <QueryHeader
        togglePopup={togglePopup}
        onRetrun={onRetrun}
        text="Query Builder"
      />
      <AfterHeaderQuery />
      <div className="flex flex-1">
        <div className="flex-1 p-4">
          <Articles />
        </div>
        <div className="flex-1 p-4">
          <>
            <div className="mb-4  rounded-lg  py-2 px-2">
              <span className="text-categrycolor py-3">SEARCH 2</span>
              <SearchBar />
            </div>
            <QueryComponent />
          </>
        </div>
      </div>
    </div>
  );
};

export default QueryApp;
