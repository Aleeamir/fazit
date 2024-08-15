import React from "react";
import AfterHeaderKeyword from "./AfterHeaderKeyword.jsx";
import HeaderKeyword from "./HeaderKeyword.jsx";
import KeywordSection from "./KeywordSection.jsx";
import SearchTable from "./SearchTable.jsx";
import {
  languageCategories,
  dataTypeCategories,
  dataSearchItems,
} from "../../components/categories.js";

const KeywordApp = ({ togglePopup, onRetrun }) => {
  return (
    <div className="fixed inset-0 flex flex-col bg-white m-0 p-0 z-50 overflow-y-auto">
      <HeaderKeyword
        togglePopup={togglePopup}
        onRetrun={onRetrun}
        text="Full Keywords Repository"
      />
      <AfterHeaderKeyword />
      <div className="flex flex-1">
        <div className=" w-[60%] p-2">
          <SearchTable />
        </div>
        <div className="flex-1 w-[40%] p-2">
          <>
            <div className="mb-4 rounded-lg py-2 px-2">
              <KeywordSection
                title="Language"
                categories={languageCategories}
              />
              <KeywordSection
                title="Data Type"
                categories={dataTypeCategories}
              />
              <KeywordSection
                title="Search Items"
                categories={dataSearchItems}
              />
            </div>
            <div className="flex items-center space-x-4 rounded-3xl">
              <span className="text-categrycolor text-[14px]">SEARCH 2</span>
              <div className="relative border-2 rounded-3xl">
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    className="flex-grow w-[420px] rounded-3xl border-3 border-categrycolor"
                  />
                  <button className="px-2 bg-[#ba3030] text-white rounded-r-lg">
                    FAZIT
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default KeywordApp;
