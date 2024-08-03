import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AfterHeader from "./components/AfterHeader";
import Articles from "./components/Articles";
import Section from "./components/Section";
import Table from "./components/Table";
import KeywordTable from "./components/KeywordTable";

import {
  countryCategories,
  dataCategories,
  industryCategories,
} from "./components/categories.js";
function App() {
  const [selectedTab, setSelectedTab] = useState("categories");

  return (
    <div className="flex flex-col">
      <Header />
      <AfterHeader selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="flex flex-1">
        <div className="flex-1 p-4">
          <Articles />
        </div>
        <div className="flex-1 p-4">
          {selectedTab === "categories" && (
            <>
              <Section title="COUNTRY" categories={countryCategories} />
              <Section title="DATA" categories={dataCategories} />
              <Section title="INDUSTRY" categories={industryCategories} />
              <div className="mb-4 rounded-lg bg-backcolor py-4 px-4">
                <span className="text-categrycolor py-3">SEARCH 1</span>
                <SearchBar />
              </div>
            </>
          )}
          {selectedTab === "websites" && <Table />}
          {selectedTab === "keywords" && (
            <div className="mb-4 rounded-lg bg-backcolor py-4 px-4">
              <KeywordTable />
            </div>
          )}
          {selectedTab === "advnace" && <App />}
        </div>
      </div>
    </div>
  );
}

export default App;
