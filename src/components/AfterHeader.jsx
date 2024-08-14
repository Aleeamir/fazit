import React, { useState } from "react";
import RowSettingsPopup from "./RowSettingsPopup ";
import DrilldownPopup from "./DrilldownPopup";
import CustomApp from "./CustomSearchRowSection/CustomApp";
import RankingPopup from "./RankingPopup";
import QueryApp from "./QueryBuilder/QueryApp";
import MatrixApp from "./Matrix/MatrixApp";
import KeywordApp from "./KeywordsRepo/KeywordApp.jsx";
const AfterHeader = ({ selectedTab, setSelectedTab, onRetrun }) => {
  const [isRowSettingsPopupOpen, setIsRowSettingsPopupOpen] = useState(false);
  const [isDrilldownPopupOpen, setIsDrilldownPopupOpen] = useState(false);
  const [isHeaderCustomRow, setIsHeaderCustomRow] = useState(false);
  const [isHeaderMatrix, setIsHeaderMatrix] = useState(false);
  const [isHeaderQuery, setIsHeaderQuery] = useState(false);
  const [isHeaderKeyword, setIsHeaderKeyword] = useState(false);
  const [isRankingPopupOpen, setIsRankingPopupOpen] = useState(false);

  const toggleRowSettingsPopup = () => {
    setIsRowSettingsPopupOpen(!isRowSettingsPopupOpen);
  };

  const toggleDrilldownPopup = () => {
    setIsDrilldownPopupOpen(!isDrilldownPopupOpen);
  };

  const toggleHeaderCustomRowPopup = () => {
    setIsHeaderCustomRow(!isHeaderCustomRow);
  };
  const toggleHeaderMatrixPopup = () => {
    setIsHeaderMatrix(!isHeaderMatrix);
  };
  const toggleHeaderQuerySelectorRowPopup = () => {
    setIsHeaderQuery(!isHeaderQuery);
  };

  const toggleRankingPopup = () => {
    setIsRankingPopupOpen(!isRankingPopupOpen);
  };
  const toggleHeaderKywordPopUp = () => {
    setIsHeaderKeyword(!isHeaderKeyword);
  };

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
              <button
                className="text-white bg-bordercolor border-none"
                onClick={toggleRankingPopup} // Add onClick to toggle RankingPopup
              >
                Ranking
              </button>
            </div>
            <div className="group text-[14px]">
              <select
                name="advanced-options"
                className="text-white bg-bordercolor border-none"
                onChange={(event) => {
                  const value = event.target.value;
                  if (value === "csr") {
                    toggleHeaderCustomRowPopup();
                  } else if (value === "matrix") {
                    toggleHeaderMatrixPopup();
                  } else if (value === "query-builder") {
                    toggleHeaderQuerySelectorRowPopup();
                  } else if (value === "custom-keyword") {
                    toggleHeaderKywordPopUp();
                  }
                }}
              >
                <option value="">Advanced</option>
                <option value="csr">CSR</option>
                <option value="matrix">Matrix</option>
                <option value="query-builder">Query Builder</option>
                <option value="custom-keyword">Custom Keyword</option>
              </select>
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
          togglePopup={toggleHeaderCustomRowPopup}
          onRetrun={onRetrun}
        />
      )}
      {isHeaderMatrix && (
        <MatrixApp togglePopup={toggleHeaderMatrixPopup} onRetrun={onRetrun} />
      )}
      {isHeaderQuery && (
        <QueryApp
          togglePopup={toggleHeaderQuerySelectorRowPopup}
          onRetrun={onRetrun}
        />
      )}
      {isHeaderKeyword && (
        <KeywordApp
          togglePopup={toggleHeaderQuerySelectorRowPopup}
          onRetrun={onRetrun}
        />
      )}
      {isRankingPopupOpen && <RankingPopup togglePopup={toggleRankingPopup} />}
    </div>
  );
};

export default AfterHeader;
