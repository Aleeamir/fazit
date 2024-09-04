import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AfterHeader from "./components/AfterHeader";
import Articles from "./components/Articles";
import Section from "./components/Section";
import Table from "./components/Table";
import KeywordTable from "./components/KeywordTable";
import NewSearchBar from "./components/NewSearchBar";
import Articles1 from "./components/Articles1.jsx";

import {
  countryCategories,
  dataCategories,
  industryCategories,
} from "./components/categories.js";

function App() {
  const [selectedTab, setSelectedTab] = useState("categories");
  const [showNewSearchBar, setShowNewSearchBar] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [matrixSearchBar, setMatrixSearchBar] = useState(false);
  const [querySearchBar, setquerySearchBar] = useState(false);
  const [selectCounty, setSelectCOuntry] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  function handleReturnData() {
    setShowNewSearchBar(!showNewSearchBar);
    setIsPopupVisible(false);
  }

  function handleNewReturnData() {
    setMatrixSearchBar(!matrixSearchBar);
    setIsPopupVisible(false);
  }

  function handlequeryReturnData() {
    setquerySearchBar(!querySearchBar);
    setIsPopupVisible(false);
  }

  function handleCountyData() {
    setSelectCOuntry(!selectCounty);
  }

  return (
    <div className="flex flex-col">
      <Header setSearchQuery={setSearchQuery} isSearching={isSearching} setIsSearching={setIsSearching} />

      <AfterHeader
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        onRetrun={handleReturnData}
        onNewReturn={handleNewReturnData}
        queryReturnData={handlequeryReturnData}
      />

      <div className="flex " style={{ marginTop: "8px" }}>
        <div className="flex-1 basis-[60%] p-2" style={{ marginLeft: "21px" }}>
          {selectCounty ? (
            <Articles1 />
          ) : (
            <Articles searchQuery={searchQuery} isSearching={isSearching} setIsSearching={setIsSearching}/>
          )}
        </div>
        <div
          className="flex-1 basis-[40%] p-2"
          style={{ marginRight: "21px", marginTop: "10px" }}
        >
          {selectedTab === "categories" && (
            <>
              <Section
                title="COUNTRY"
                categories={countryCategories}
                className="my-[10px] ml-[10px]  mr-[5px] bg-white"
                OnSendCountry={handleCountyData}
              />

              <Section
                title="DATA"
                categories={dataCategories}
                className=" my-[10px] ml-[10px] mr-[5px] bg-white "
                OnSendCountry={handleCountyData}
              />
              <Section
                title="INDUSTRY"
                categories={industryCategories}
                className=" my-[10px] ml-[10px] mr-[5px] bg-white "
                OnSendCountry={handleCountyData}
              />

              <div
                className="mb-4 rounded-lg px-"
                style={{
                  backgroundColor: "#f5f5f5",
                  display: "inline-block",
                  width: "100%",
                  height: "14%",
                }}
              >
                <h2
                  className="text-sm text-categrycolor bg-gray-100 mb-2 px-2 py-1"
                  style={{
                    backgroundColor: "#e8e9e9",
                    borderRadius: "12px 0 0 0",
                    borderTopRightRadius: "12px",
                  }}
                >
                  SEARCH2
                </h2>
                <div
                  className="flex space-x-1 overflow-x-auto items-center pl-[40px]"
                  style={{ width: "auto" }}
                >
                  <SearchBar />
                </div>
              </div>

              {showNewSearchBar && (
                <>
                  <div className="flex items-center mb-4">
                    <span className="text-categrycolor py-3 mr-10">CRS3</span>
                    <NewSearchBar />
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="text-categrycolor py-3 mr-4">SEARCH4</span>
                    <SearchBar />
                  </div>
                </>
              )}

              {matrixSearchBar && (
                <>
                  <div className="flex items-center mb-4">
                    <span className="text-categrycolor py-3 mr-4">Matrix2</span>
                    <NewSearchBar />
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="text-categrycolor py-3 mr-4">Search3</span>
                    <SearchBar />
                  </div>
                </>
              )}

              {querySearchBar && (
                <div className="flex items-center mb-4">
                  <span className="text-categrycolor py-3 mr-4">Query5</span>
                  <NewSearchBar />
                </div>
              )}
            </>
          )}
          {selectedTab === "websites" && <Table />}
          {selectedTab === "keywords" && (
            <div className="">
              <KeywordTable />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
