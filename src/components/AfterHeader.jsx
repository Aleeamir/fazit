import React, { useState } from "react";
import RowSettingsPopup from "./RowSettingsPopup ";
const AfterHeader = ({ selectedTab, setSelectedTab }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="bg-bordercolor text-white shadow" style={{ height: 18 }}>
      <div className="flex justify-between items-center">
        <div className="flex pl-96">
          <div className="flex space-x-4 text-xs">
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
          <div className="flex space-x-2 pl-12 text-xs">
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
          <div className="flex space-x-4 pl-12 text-xs">
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
            <div className="group relative text-xs">
              <select
                className={` text-white bg-bordercolor border-none ${
                  selectedTab === "keywords" ? "underline" : ""
                }  `}
                onClick={() => setSelectedTab("keywords")}
              >
                <option value="all">Keywords</option>
              </select>
            </div>
            <div className="group relative text-xs">
              <select className="text-white bg-bordercolor border-none">
                <option value="all">Drilldown</option>
              </select>
            </div>
            <div className="group text-xs">
              <select className="text-white bg-bordercolor border-none">
                <option value="all">Ranking</option>
              </select>
            </div>
            <div className="group text-xs">
              <select
                className={` text-white bg-bordercolor border-none ${
                  selectedTab === "keywords" ? "underline" : ""
                }  `}
                onClick={() => setSelectedTab("keywords")}
              >
                <option value="all">Advanced</option>
              </select>
            </div>
          </div>
        </div>
        <div className="group text-xs">
          <button
            className="text-white bg-bordercolor border-none"
            onClick={togglePopup}
          >
            Row Setting
          </button>
        </div>
      </div>
      {isPopupOpen && <RowSettingsPopup togglePopup={togglePopup} />}
    </div>
  );
};

export default AfterHeader;
