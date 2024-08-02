import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AfterHeader from "./components/AfterHeader";
import Articles from "./components/Articles";
import Section from "./components/Section";
import Table from "./components/Table";
import KeywordTable from "./components/KeywordTable";
import KeyWords from "./components/KeyWords";
import c1 from "./assets/icon-images.png";
import c2 from "./assets/icon-pages.png";
import c3 from "./assets/icon-search.png";
import c4 from "./assets/icon-sites.png";
import c5 from "./assets/icon-headlines.png";
import c6 from "./assets/icon-sports.png";
import c7 from "./assets/icon-videos.png";

const countryCategories = [
  {
    label: "All",
    count: 401834,
    icon: c1,
    selected: false,
  },
  {
    label: "United States",
    count: 173620,
    icon: c2,
    selected: true,
  },
  {
    label: "Germany",
    count: 401834,
    icon: c3,
    selected: false,
  },
  {
    label: "United Kingdom",
    count: 173620,
    icon: c4,
    selected: false,
  },
  {
    label: "France",
    count: 401834,
    icon: c5,
    selected: false,
  },
  {
    label: "More",
    count: 173620,
    icon: c6,
    selected: false,
  },
  // Add more countries
];

const dataCategories = [
  {
    label: "Pages",
    count: 173620,
    icon: c2,
    selected: true,
  },
  {
    label: "Images",
    count: 48501,
    icon: c1,
    selected: false,
  },
  {
    label: "Video",
    count: 173620,
    icon: c5,
    selected: false,
  },
  {
    label: "Headline",
    count: 48501,
    icon: c7,
    selected: false,
  },
  {
    label: "Site",
    count: 173620,
    icon: c1,
    selected: false,
  },
  {
    label: "Exit Search",
    count: 48501,
    icon: c4,
    selected: false,
  },
  // Add more data types
];

const industryCategories = [
  {
    label: "Pages",
    count: 173620,
    icon: c7,
    selected: true,
  },
  {
    label: "Sports",
    count: 123472,
    icon: c5,
    selected: false,
  },
  {
    label: "New",
    count: 173620,
    icon: c3,
    selected: false,
  },
  {
    label: "Business",
    count: 123472,
    icon: c1,
    selected: false,
  },
  {
    label: "Celebration",
    count: 173620,
    icon: c2,
    selected: true,
  },
  {
    label: "TV&Movies",
    count: 123472,
    icon: c4,
    selected: false,
  },
  // Add more industries
];

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
