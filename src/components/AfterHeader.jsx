import React, { useState } from "react";
import RowSettingsPopup from "./RowSettingsPopup ";
import DrilldownPopup from "./DrilldownPopup";
import CustomApp from "./CustomSearchRowSection/CustomApp";
import RankingPopup from "./RankingPopup";
import QueryApp from "./QueryBuilder/QueryApp";
import QueryHeader from "./QueryBuilder/QueryHeader.jsx";
import MatrixApp from "./Matrix/MatrixApp";
import KeywordApp from "./KeywordsRepo/KeywordApp.jsx";
const AfterHeader = ({
  selectedTab,
  setSelectedTab,
  onRetrun,
  onNewReturn,
  queryReturnData,
}) => {
  const [activeTab, setActiveTab] = useState(null); // Track active tab
  const [isRowSettingsPopupOpen, setIsRowSettingsPopupOpen] = useState(false);
  const [isDrilldownPopupOpen, setIsDrilldownPopupOpen] = useState(false);
  const [isHeaderCustomRow, setIsHeaderCustomRow] = useState(false);
  const [isHeaderMatrix, setIsHeaderMatrix] = useState(false);
  const [isHeaderQuery, setIsHeaderQuery] = useState(false);
  const [isHeaderKeyword, setIsHeaderKeyword] = useState(false);
  const [isRankingPopupOpen, setIsRankingPopupOpen] = useState(false);

  const toggleRowSettingsPopup = () =>
    setIsRowSettingsPopupOpen(!isRowSettingsPopupOpen);
  const toggleDrilldownPopup = () =>
    setIsDrilldownPopupOpen(!isDrilldownPopupOpen);
  const toggleHeaderCustomRowPopup = () =>
    setIsHeaderCustomRow(!isHeaderCustomRow);
  const toggleHeaderMatrixPopup = () => setIsHeaderMatrix(!isHeaderMatrix);
  const toggleHeaderQuerySelectorRowPopup = () =>
    setIsHeaderQuery(!isHeaderQuery);
  const toggleRankingPopup = () => setIsRankingPopupOpen(!isRankingPopupOpen);
  const toggleHeaderKywordPopUp = () => setIsHeaderKeyword(!isHeaderKeyword);

  const handleMenuClick = (tab) => {
    setActiveTab(tab);
    setSelectedTab(tab); // Update selectedTab if needed
  };

  return (
    <div
      className="bg-[#00478c] text-stone-200  shadow"
      style={{ height: "28px" }}
    >
      <div
        className="flex justify-center items-center "
        style={{ marginLeft: "310px", marginTop: '3px', marginBottom: '7px' }}
      >
        {/* <div className="flex flex-wrap space-x-4 text-[14px] ml-auto " style={{ paddingLeft: '125px' }} >
          <a href="#" className="hover:underline">
            Options
          </a>
          <a href="#" className="hover:underline">
            Forum
          </a>
          <a href="#" className="hover:underline">
            Login
          </a>
        </div> */}
        <div
          className="flex flex-wrap space-x-2 text-[14px] ml-auto"
          // style={{ marginLeft: "10px" }}
          // style={{ marginLeft: "68px" }}
          style={{ marginLeft: "349px" }}


        >
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
        {/* <div className="group text-[14px] ml-auto"> */}
        <div className="group text-[14px] ml-[112px]">

          <button
            className={`text-white bg-bordercolor border-none mr-5 ${isRowSettingsPopupOpen ? "text-[#77abed]" : "#77abed"
              }`}
            onClick={toggleRowSettingsPopup}
          >
            Row Setting
            <span className="ml-2 text-[12px]" style={{ color: "#77abed" }}>
              ▼
            </span>
          </button>
        </div>
        {/* <div className="flex flex-wrap space-x-4 text-[14px] ml-[72px]"> */}
        <div className="flex flex-wrap space-x-4 text-[14px] ml-[47px]">
          <a
            href="#"
            className={` ${activeTab === "categories" ? "text-[#77abed]" : ""}`}
            onClick={() => handleMenuClick("categories")}
          >
            Categories
          </a>
          <a
            href="#"
            className={` ${activeTab === "Stories" ? "text-[#77abed]" : ""}`}
            onClick={() => handleMenuClick("Stories")}
          >
            News Stories
          </a>
          <a
            href="#"
            className={` ${activeTab === "websites" ? "text-[#77abed]" : ""}`}
            onClick={() => handleMenuClick("websites")}
          >
            Websites
          </a>
          <a
            href="#"
            className={` ${activeTab === "Channels" ? "text-[#77abed]" : ""}`}
            onClick={() => handleMenuClick("Channels")}
          >
            Channels
          </a>
          <div className="group relative text-[14px] ml-auto">
            <button
              className={`text-white bg-bordercolor border-none ${activeTab === "keywords" ? "text-[#77abed]" : ""
                }`}
              onClick={() => handleMenuClick("keywords")}
            >
              Keywords
              <span className="text-[12px]" style={{ color: "#77abed" }}>
                ▼
              </span>
            </button>
          </div>
          {/* <div className="group relative text-[14px] ml-auto">
            <button
              className={`text-white bg-bordercolor border-none ${isDrilldownPopupOpen ? "text-[#77abed]" : ""
                }`}
              onClick={toggleDrilldownPopup}
            >
              Drilldown
              <span className="ml text-[14px]" style={{ color: "#77abed" }}>
                ▼
              </span>
            </button>
          </div> */}
          {/* <div className="group text-[14px] ml-auto">
            
            <button
              className={`text-white bg-bordercolor border-none ${isRankingPopupOpen ? "text-[#77abed]" : ""
                }`}
              onClick={toggleRankingPopup}
            >
              Ranking
              <span className="text-[14px]" style={{ color: "#77abed" }}>
                ▼
              </span>
            </button>
          </div> */}
          {/* <div className="group text-[14px] ml-auto">
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
          </div> */}
          {/* Conditionally Rendered Context: News Button */}
          {(activeTab === "websites" || activeTab === "keywords") && (
            <div className="group text-[14px]">
              <button
                className="text-white bg-bordercolor border-none"
                onClick={() => handleMenuClick("news")}
              >
                Context:
                <a href="#" className="text-[#77abed] underline ml-1">
                  News
                </a>
              </button>
            </div>
          )}
        </div>
        <div className="group text-[14px] ml-auto">
          {/* <button
            className={`text-white bg-bordercolor border-none mr-5 ${isRowSettingsPopupOpen ? "text-[#77abed]" : "#77abed"
              }`}
            onClick={toggleRowSettingsPopup}
          >
            Setting
            <span className="ml-2 text-[12px]" style={{ color: "#77abed" }}>
              ▼
            </span>
          </button> */}
          {/* <div className="group relative text-[14px] ml-auto"> */}
          <div className="group relative text-[14px] ml-[103px]">

            <button
              className={`text-white bg-bordercolor border-none ${isDrilldownPopupOpen ? "text-[#77abed]" : ""
                }`}
              onClick={toggleDrilldownPopup}
            >
              Drilldown
              <span className="ml text-[14px]" style={{ color: "#77abed" }}>
                ▼
              </span>
            </button>
            <button
              className={`text-white bg-bordercolor border-none ml-[10px] ${isRankingPopupOpen ? "text-[#77abed]" : ""
                }`}
              onClick={toggleRankingPopup}
            >
              Ranking
              <span className="text-[14px]" style={{ color: "#77abed" }}>
                ▼
              </span>
            </button>
          </div>
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
        <MatrixApp
          togglePopup={toggleHeaderMatrixPopup}
          onNewReturn={onNewReturn}
        />
      )}
      {isHeaderQuery && (
        <QueryApp
          togglePopup={toggleHeaderQuerySelectorRowPopup}
          queryReturnData={queryReturnData}
        />
      )}
      {isHeaderKeyword && (
        <KeywordApp togglePopup={toggleHeaderKywordPopUp} onRetrun={onRetrun} />
      )}
      {isRankingPopupOpen && <RankingPopup togglePopup={toggleRankingPopup} />}
    </div>
  );
};

export default AfterHeader;
