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

const MatrixApp = ({ togglePopup, onNewReturn }) => {
  return (
    <div className="fixed inset-0 flex flex-col bg-white m-0 p-0 z-50 overflow-y-auto">
      <HeaderMatrix
        togglePopup={togglePopup}
        onNewReturn={onNewReturn}
        text="Matrix"
      />
      <AfterHeaderMatrix />
      <div className="flex " style={{ marginTop: "8px" }}>
        <div className="flex-1 basis-[60%] p-2" style={{ marginLeft: "21px" }}>
          <Articles />
        </div>
        <div
          className="flex-1 basis-[40%] p-2"
          style={{ marginRight: "21px", marginTop: "10px" }}
        >
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
