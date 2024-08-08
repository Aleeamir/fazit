import React, { useState } from "react";
import RowSettingsPopup from "./RowSettingsPopup ";
import DrilldownPopup from "./DrilldownPopup";
import CustomApp from "./CustomSearchRowSection/CustomApp";
const AfterHeader = ({ selectedTab, setSelectedTab, onRetrun }) => {
  const [isRowSettingsPopupOpen, setIsRowSettingsPopupOpen] = useState(false);
  const [isDrilldownPopupOpen, setIsDrilldownPopupOpen] = useState(false);
  const [isHeaderCustomRow, setIsHeaderCustomRow] = useState(false);

  const toggleRowSettingsPopup = () => {
    setIsRowSettingsPopupOpen(!isRowSettingsPopupOpen);
  };

  const toggleDrilldownPopup = () => {
    setIsDrilldownPopupOpen(!isDrilldownPopupOpen);
  };

  function toogleHeaderCustomeRowPopup() {
    setIsHeaderCustomRow(!isHeaderCustomRow);
  }

  return (
    <div className="bg-bordercolor text-white shadow" style={{ height: 24 }}>
      <div className="flex justify-between items-center">
        <div className="flex pl-96">
          <div className="flex space-x-4 text-[14px]">
            <a href="#" className="hover:underline">
              Options
            </a>
            <a href="#" className="hover:underline">
              Forum
            </a>
            <a href="#" className="hover:underline">
              Login
            </a>
          </div>
          <div className="flex space-x-2 pl-12 text-[14px]">
            <span>Page:</span>
            {[...Array(6)].map((_, i) => (
              <a key={i} href="#" className="hover:underline">
                {i + 1}
              </a>
            ))}
            <span>...</span>
            <a href="#" className="hover:underline">
              Browse All
            </a>
          </div>
          <div className="flex space-x-4 pl-12 text-[14px]">
            <a
              href="#"
              className={`hover:underline ${
                selectedTab === "categories" ? "underline" : ""
              }`}
              onClick={() => setSelectedTab("categories")}
            >
              Categories
            </a>
            <a
              href="#"
              className={`hover:underline ${
                selectedTab === "websites" ? "underline" : ""
              }`}
              onClick={() => setSelectedTab("websites")}
            >
              Websites
            </a>
            <div className="group relative text-[14px]">
              <select
                className={` text-white bg-bordercolor border-none ${
                  selectedTab === "keywords" ? "underline" : ""
                }  `}
                onClick={() => setSelectedTab("keywords")}
              >
                <option value="all">Keywords</option>
              </select>
            </div>
            <div className="group relative text-[14px]">
              <button
                className="text-white bg-bordercolor border-none"
                onClick={toggleDrilldownPopup}
              >
                Drilldown
              </button>
            </div>
            <div className="group text-[14px]">
              <select className="text-white bg-bordercolor border-none">
                <option value="all">Ranking</option>
              </select>
            </div>
            <div className="group text-[14px]">
              <button
                className="text-white bg-bordercolor border-none"
                onClick={toogleHeaderCustomeRowPopup}
              >
                Advanced
              </button>
            </div>
          </div>
        </div>
        <div className="group text-[14px]">
          <button
            className="text-white bg-bordercolor border-none"
            onClick={toggleRowSettingsPopup}
          >
            Row Setting
          </button>
        </div>
      </div>
      {isRowSettingsPopupOpen && (
        <RowSettingsPopup togglePopup={toggleRowSettingsPopup} />
      )}
      {isDrilldownPopupOpen && (
        <DrilldownPopup togglePopup={toggleDrilldownPopup} />
      )}
      {isHeaderCustomRow && (
        <CustomApp
          togglePopup={toogleHeaderCustomeRowPopup}
          onRetrun={onRetrun}
        />
      )}
    </div>
  );
};

export default AfterHeader;
