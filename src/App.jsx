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
  const [showMatrixApp, setShowMatrixApp] = useState(false);
  const [matrixSearchBar, setMatrixSearchBar] = useState(false);

  function handleReturnData() {
    setShowNewSearchBar(!showNewSearchBar);
    setIsPopupVisible(false);
  }

  return (
    <div className="flex flex-col">
      <Header />

      <AfterHeader
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        onRetrun={handleReturnData}
      />

      <div className="flex ">
        <div className="flex-1 w-[58%] p-4">
          <Articles />
        </div>
        <div className="flex-1 w-[48%] p-4">
          {selectedTab === "categories" && (
            <>
              <Section title="COUNTRY" categories={countryCategories} />
              <Section
                title="DATA"
                categories={dataCategories}

                // Pass click handler
              />
              <Section title="INDUSTRY" categories={industryCategories} />
              <div className="mb-4 rounded-lg bg-backcolor py-4 px-4 ">
                {!matrixSearchBar && (
                  <div className="flex items-center space-x-2 ">
                    <span className="text-categrycolor  ">SEARCH2</span>
                    <SearchBar />
                  </div>
                )}

                {showNewSearchBar && (
                  <div className="flex items-center space-x-2">
                    <span className="text-categrycolor py-3 leading-none pl-1 mr-6">
                      CRS3
                    </span>
                    <div className="relative flex items-center bg-gray-100 rounded-3xl shadow-md w-full">
                      <select className="bg-gray-200 border rounded-l-lg">
                        <option value="all">All</option>
                        {/* Add more options as needed */}
                      </select>
                      <div className="relative flex-grow">
                        <input
                          type="text"
                          className="w-full border-5 bg-blue-200 pr-16"
                          placeholder="Search..."
                        />

                        <button
                          className="absolute inset-y-0 right-16 flex items-center  text-categrycolor"
                          onClick={() => alert("Edit button clicked")}
                        >
                          Edit
                        </button>

                        <button
                          className="absolute inset-y-0 right-0 flex items-center px-2 text-categrycolor"
                          onClick={() =>
                            (document.querySelector("input").value = "")
                          }
                        >
                          clear
                        </button>
                      </div>
                      <button className="px-2 bg-[#ba3030] text-white rounded-r-lg">
                        FAZIT
                      </button>
                    </div>
                  </div>
                )}

                {showNewSearchBar && (
                  <div className="flex items-center space-x-2">
                    <span className="text-categrycolor py-3 leading-none">
                      SEARCH4
                    </span>
                    <SearchBar />
                  </div>
                )}

                {matrixSearchBar && (
                   <div className="flex items-center space-x-2">
                   <span className="text-categrycolor py-3 leading-none pl-1 mr-6">
                    SMArtix2
                   </span>
                   <div className="relative flex items-center bg-gray-100 rounded-3xl shadow-md w-full">
                     <select className="bg-gray-200 border rounded-l-lg">
                       <option value="all">All</option>
                       {/* Add more options as needed */}
                     </select>
                     <div className="relative flex-grow">
                       <input
                         type="text"
                         className="w-full border-5 bg-blue-200 pr-16"
                         placeholder="Search..."
                       />

                       <button
                         className="absolute inset-y-0 right-16 flex items-center  text-categrycolor"
                         onClick={() => alert("Edit button clicked")}
                       >
                         Edit
                       </button>

                       <button
                         className="absolute inset-y-0 right-0 flex items-center px-2 text-categrycolor"
                         onClick={() =>
                           (document.querySelector("input").value = "")
                         }
                       >
                         clear
                       </button>
                     </div>
                     <button className="px-2 bg-[#ba3030] text-white rounded-r-lg">
                       FAZIT
                     </button>
                   </div>
                 </div>
                )}

                {matrixSearchBar && (
                  <div className="flex items-center space-x-2">
                    <span className="text-categrycolor py-2 leading-none">
                      Search3
                    </span>
                    <SearchBar />
                  </div>
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
