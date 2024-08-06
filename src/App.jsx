import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AfterHeader from "./components/AfterHeader";
import Articles from "./components/Articles";
import Section from "./components/Section";
import Table from "./components/Table";
import KeywordTable from "./components/KeywordTable";
import MatrixApp from "./components/Matrix/MatrixApp.jsx";

import {
  countryCategories,
  dataCategories,
  industryCategories,
} from "./components/categories.js";

function App() {
  const [selectedTab, setSelectedTab] = useState("categories");
  const [showNewSearchBar, setShowNewSearchBar] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [showMatrixApp, setShowMatrixApp] = useState(false); // State to manage MatrixApp visibility

  function handleReturnData() {
    setShowNewSearchBar(!showNewSearchBar);
    setIsPopupVisible(false);
  }

  function handleCategoryClick() {
    setShowMatrixApp(true); // Show MatrixApp on category button click
  }

  function handleCloseMatrixApp() {
    setShowMatrixApp(false); // Hide MatrixApp
  }

  return (
    <div className="flex flex-col">
      <Header />
      {isPopupVisible && (
        <AfterHeader
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          onRetrun={handleReturnData}
        />
      )}

      <div className="flex flex-1">
        <div className="flex-1 p-4">
          <Articles />
        </div>
        <div className="flex-1 p-4">
          {selectedTab === "categories" && (
            <>
              <Section
                title="COUNTRY"
                categories={countryCategories}
                onCategoryClick={handleCategoryClick} // Pass click handler
              />
              <Section
                title="DATA"
                categories={dataCategories}
                onCategoryClick={handleCategoryClick} // Pass click handler
              />
              <Section
                title="INDUSTRY"
                categories={industryCategories}
                onCategoryClick={handleCategoryClick} // Pass click handler
              />
              <div className="mb-4 rounded-lg bg-backcolor py-4 px-4">
                <span className="text-categrycolor py-3">SEARCH 2</span>
                <SearchBar />

                {showNewSearchBar && (
                  <>
                    <span className="text-categrycolor py-3">CRS 3</span>
                    <SearchBar />
                    <span className="text-categrycolor py-3">SEARCH 4</span>
                    <SearchBar />
                  </>
                )}
              </div>
            </>
          )}
          {selectedTab === "websites" && <Table />}
          {selectedTab === "keywords" && (
            <div className="mb-4 rounded-lg bg-backcolor py-4 px-4">
              <KeywordTable />
            </div>
          )}
        </div>
      </div>

      {showMatrixApp && (
        <MatrixApp
          togglePopup={handleCloseMatrixApp}
          onRetrun={handleCloseMatrixApp}
        />
      )}
    </div>
  );
}

export default App;
