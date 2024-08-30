import React from "react";
import HeaderCustomRow from "./HeaderCustomRow";
import AfterHeaderCustom from "./AfterHeaderCustom";
import Section from "../Section";
import Articles from "../Articles";
import SearchBar from "../SearchBar";
import {
  countryCategories,
  dataCategories,
  industryCategories,
} from "../../components/categories.js";

const CustomApp = ({ togglePopup, onRetrun }) => {
  return (
    <div className="fixed inset-0 flex flex-col bg-white m-0 p-0 z-50 overflow-y-auto">
      <HeaderCustomRow
        togglePopup={togglePopup}
        onRetrun={onRetrun}
        text="Custom Search Rows (CSR)"
      />
      <AfterHeaderCustom />
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
            <Section
              title="Row 1"
              categories={countryCategories}
              className="my-[10px] ml-[10px]  mr-[5px] bg-white"
            />
            <Section
              title="Row 2"
              categories={dataCategories}
              className="my-[10px] ml-[10px]  mr-[5px] bg-white"
            />
            <Section
              title="Row 3"
              categories={industryCategories}
              className="my-[10px] ml-[10px]  mr-[5px] bg-white"
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default CustomApp;
