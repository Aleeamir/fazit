import React from "react";
import AfterHeaderMatrix from "./AfterHeaderMatrix.jsx";
import Section from "../Section";
import Articles from "../Articles";
import SearchBar from "../SearchBar";
import {
  countryCategories,
  dataCategories,
  industryCategories,
} from "../../components/categories.js";
import HeaderMatrix from "./HeaderMatrix.jsx";
import Matrix1 from "./Matrix1.jsx";
import Matrix2 from "./Matrix2.jsx";

const MatrixApp = ({ togglePopup, onNewReturn}) => {
  return (
    <div className="fixed inset-0 flex flex-col bg-white m-0 p-0 z-50 overflow-y-auto">
      <HeaderMatrix
        togglePopup={togglePopup}
        onNewReturn={onNewReturn}
        
        text="Matrix"
      />
      <AfterHeaderMatrix />
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
            <Matrix1 />
            <Matrix2 />
          </>
        </div>
      </div>
    </div>
  );
};

export default MatrixApp;
