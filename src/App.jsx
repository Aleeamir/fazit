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
  const [querySearchBar, setQuerySearchBar] = useState(false); // Fixed the case here
  const [selectCountry, setSelectCountry] = useState(false); // Fixed the case here
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

  function handleQueryReturnData() {
    setQuerySearchBar(!querySearchBar); // Fixed function name
    setIsPopupVisible(false);
  }

  function handleCountyData() {
    setSelectCountry(!selectCountry); // Fixed function and state name
  }

  // Navigation bar between Search 2 and Search 3
  const [activeTab, setActiveTab] = useState("Search 2");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col">
      <Header
        setSearchQuery={setSearchQuery}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
      />

      <AfterHeader
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        onRetrun={handleReturnData}
        onNewReturn={handleNewReturnData}
        queryReturnData={handleQueryReturnData}
      />

      <div className="flex " style={{ marginTop: "8px" }}>
        <div className="flex-1 basis-[60%] p-2" style={{ marginLeft: "21px" }}>
          {selectCountry ? (
            <Articles1 />
          ) : (
            <Articles
              searchQuery={searchQuery}
              isSearching={isSearching}
              setIsSearching={setIsSearching}
            />
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

              {/* Tabbed Navigation Header */}
              <div
                className="mb-4 rounded-lg"
                style={{
                  backgroundColor: "#e8e9e9",
                  display: "inline-block",
                  width: "100%",
                  height: "14%",
                }}
              >
                {/* Tabbed Navigation Header */}
                <div
                  className="text-sm text-categrycolor bg-gray-100 mb-2 px-2 py-1"
                  style={{
                    backgroundColor: "#e8e9e9",
                    borderRadius: "12px 12px 12px 12px",
                    borderTopRightRadius: "12px",
                    display: "flex", // Flex layout for navigation
                  }}
                >
                  {/* Tab: Search 2 */}
                  <button
                    className={`mr-2 px-3 py-1  ${
                      activeTab === "Search 2" ? "bg-[#a8c4eb]" : ""
                    }`}
                    style={{
                      border: "none",
                      outline: "none",
                      cursor: "pointer",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px"
                    }}
                    onClick={() => handleTabChange("Search 2")}
                  >
                    SEARCH 2 (73620)
                  </button>

                  {/* Tab: Search 3 */}
                  <button
                    className={`px-[45px] py-1  ${
                      activeTab === "Search 3" ? "bg-[#a8c4eb]" : ""
                    }`}
                    style={{
                      border: "none",
                      outline: "none",
                      cursor: "pointer",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px"
                    }}
                    onClick={() => handleTabChange("Search 3")}
                  >
                    SEARCH 3
                  </button>
                </div>

                {/* Search Bar Area */}
                <div
                  className="flex space-x-1 overflow-x-auto items-center pl-[40px]"
                  style={{ width: "auto" }}
                >
                  {/* Render Search 2 or Search 3 based on active tab */}
                  {activeTab === "Search 2" && (
                    <div className="w-[98%]">
                      <SearchBar placeholder="Search in Search 2" />
                    </div>
                  )}
                  {activeTab === "Search 3" && (
                    <div className="w-[98%]">
                      <SearchBar placeholder="Search in Search 3" />
                    </div>
                  )}
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
