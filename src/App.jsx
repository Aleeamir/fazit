import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AfterHeader from "./components/AfterHeader";
import Articles from "./components/Articles";
import Section from "./components/Section";
import Table from "./components/Table";
import KeywordTable from "./components/KeywordTable";
import NewSearchBar from "./components/NewSearchBar";

import {
  countryCategories,
  dataCategories,
  industryCategories,
} from "./components/categories.js";
import Articles1 from "./components/Articles1.jsx";

function App() {
  const [selectedTab, setSelectedTab] = useState("categories");
  const [showNewSearchBar, setShowNewSearchBar] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [matrixSearchBar, setMatrixSearchBar] = useState(false);
  const [querySearchBar, setquerySearchBar] = useState(false);
  const [selectCounty, setSelectCOuntry] = useState(false);

  function handleReturnData() {
    setShowNewSearchBar(!showNewSearchBar);
    setIsPopupVisible(false);
    //setMatrixSearchBar(!matrixSearchBar);
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
      <Header />

      <AfterHeader
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        onRetrun={handleReturnData}
        onNewReturn={handleNewReturnData}
        queryReturnData={handlequeryReturnData}
      />

      <div className="flex ">
        <div className="flex-1 w-[58%] p-4">
          {selectCounty ? <Articles1 /> : <Articles />}
        </div>
        <div className="flex-1 w-[48%] p-4">
          {selectedTab === "categories" && (
            <>
              <Section
                title="COUNTRY"
                categories={countryCategories}
                className="my-[10px] ml-[10px] mr-[5px] bg-white"
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
                class=" my-[10px] ml-[10px] mr-[5px] bg-white "
                OnSendCountry={handleCountyData}
              />
              <div className="mb-4 rounded-lg bg-backcolor py-7 px-4">
                {!matrixSearchBar && (
                  <>
                    <span className="text-categrycolor py-3">SEARCH 2</span>
                    <SearchBar />
                  </>
                )}

                {showNewSearchBar && (
                  <>
                    <span className="text-categrycolor py-3">CRS 3</span>
                    <NewSearchBar />
                    <span className="text-categrycolor py-3">SEARCH 4</span>
                    <SearchBar />
                  </>
                )}

                {matrixSearchBar && (
                  <>
                    <span className="text-categrycolor py-3 ">Matrix 2 </span>
                    <NewSearchBar />
                    <span className="text-categrycolor py-3">Search 3</span>
                    <SearchBar />
                  </>
                )}
                {querySearchBar && (
                  <>
                    <span className="text-categrycolor py-3 ">Query 5</span>
                    <NewSearchBar />
                  </>
                )}
              </div>
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
