import React, { useState } from "react";
import CategoryPopup from "./CategoryPopup";
import SearchBar from "./SearchBar";

const KeywordTable = () => {
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("/ All (4621)");
  const [selectedTime, setSelectedTime] = useState("Last 24 Hrs");
  const [selectedAlpha, setSelectedAlpha] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const cssclass = "py-1 px-1 border-2";
  const textStyle = { fontSize: "14px", fontFamily: "Arial", padding: "5px" };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const categories = ["/ All (4621)", "/ News", "/ Sports", "/ Entertainment"];
  const times = ["Last 24 Hrs", "Last Week", "Last Month", "Last Year"];
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const websites = [
    {
      website: "Neil Abercrombie",
      overallRank: "KW",
      popularityRank: 45612,
      relevanceRank: 21401,
      pages: 1206,
      images: 1987,
    },
    {
      website: "Amy Adams",
      overallRank: "KW",
      popularityRank: 99541,
      relevanceRank: 256877,
      pages: 95477,
      images: 47966,
    },
    {
      website: "Roma Agrawal",
      overallRank: "KW",
      popularityRank: 8549,
      relevanceRank: 844,
      pages: 26,
      images: 471,
    },
    {
      website: "Neil Abercrombie",
      overallRank: "KW",
      popularityRank: 45612,
      relevanceRank: 21401,
      pages: 1206,
      images: 1987,
    },
    {
      website: "Amy Adams",
      overallRank: "KW",
      popularityRank: 99541,
      relevanceRank: 256877,
      pages: 95477,
      images: 47966,
    },
    {
      website: "Roma Agrawal",
      overallRank: "KW",
      popularityRank: 8549,
      relevanceRank: 844,
      pages: 26,
      images: 471,
    },
    {
      website: "Neil Abercrombie",
      overallRank: "KW",
      popularityRank: 45612,
      relevanceRank: 21401,
      pages: 1206,
      images: 1987,
    },
    {
      website: "Amy Adams",
      overallRank: "KW",
      popularityRank: 99541,
      relevanceRank: 256877,
      pages: 95477,
      images: 47966,
    },
    {
      website: "Roma Agrawal",
      overallRank: "KW",
      popularityRank: 8549,
      relevanceRank: 844,
      pages: 26,
      images: 471,
    },
    {
      website: "Neil Abercrombie",
      overallRank: "KW",
      popularityRank: 45612,
      relevanceRank: 21401,
      pages: 1206,
      images: 1987,
    },
    {
      website: "Amy Adams",
      overallRank: "KW",
      popularityRank: 99541,
      relevanceRank: 256877,
      pages: 95477,
      images: 47966,
    },
    {
      website: "Roma Agrawal",
      overallRank: "KW",
      popularityRank: 8549,
      relevanceRank: 844,
      pages: 26,
      images: 471,
    },
    {
      website: "Neil Abercrombie",
      overallRank: "KW",
      popularityRank: 45612,
      relevanceRank: 21401,
      pages: 1206,
      images: 1987,
    },
    {
      website: "Amy Adams",
      overallRank: "KW",
      popularityRank: 99541,
      relevanceRank: 256877,
      pages: 95477,
      images: 47966,
    },
    {
      website: "Roma Agrawal",
      overallRank: "KW",
      popularityRank: 8549,
      relevanceRank: 844,
      pages: 26,
      images: 471,
    },
    {
      website: "Neil Abercrombie",
      overallRank: "KW",
      popularityRank: 45612,
      relevanceRank: 21401,
      pages: 1206,
      images: 1987,
    },
    {
      website: "Amy Adams",
      overallRank: "KW",
      popularityRank: 99541,
      relevanceRank: 256877,
      pages: 95477,
      images: 47966,
    },
    {
      website: "Roma Agrawal",
      overallRank: "KW",
      popularityRank: 8549,
      relevanceRank: 844,
      pages: 26,
      images: 471,
    },
    {
      website: "Neil Abercrombie",
      overallRank: "KW",
      popularityRank: 45612,
      relevanceRank: 21401,
      pages: 1206,
      images: 1987,
    },
    {
      website: "Amy Adams",
      overallRank: "KW",
      popularityRank: 99541,
      relevanceRank: 256877,
      pages: 95477,
      images: 47966,
    },
    {
      website: "Roma Agrawal",
      overallRank: "KW",
      popularityRank: 8549,
      relevanceRank: 844,
      pages: 26,
      images: 471,
    },
    {
      website: "Neil Abercrombie",
      overallRank: "KW",
      popularityRank: 45612,
      relevanceRank: 21401,
      pages: 1206,
      images: 1987,
    },
    {
      website: "Amy Adams",
      overallRank: "KW",
      popularityRank: 99541,
      relevanceRank: 256877,
      pages: 95477,
      images: 47966,
    },
    {
      website: "Roma Agrawal",
      overallRank: "KW",
      popularityRank: 8549,
      relevanceRank: 844,
      pages: 26,
      images: 471,
    },
    {
      website: "Neil Abercrombie",
      overallRank: "KW",
      popularityRank: 45612,
      relevanceRank: 21401,
      pages: 1206,
      images: 1987,
    },
    {
      website: "Amy Adams",
      overallRank: "KW",
      popularityRank: 99541,
      relevanceRank: 256877,
      pages: 95477,
      images: 47966,
    },
    {
      website: "Roma Agrawal",
      overallRank: "KW",
      popularityRank: 8549,
      relevanceRank: 844,
      pages: 26,
      images: 471,
    },
    {
      website: "Neil Abercrombie",
      overallRank: "KW",
      popularityRank: 45612,
      relevanceRank: 21401,
      pages: 1206,
      images: 1987,
    },
    {
      website: "Amy Adams",
      overallRank: "KW",
      popularityRank: 99541,
      relevanceRank: 256877,
      pages: 95477,
      images: 47966,
    },
    {
      website: "Roma Agrawal",
      overallRank: "KW",
      popularityRank: 8549,
      relevanceRank: 844,
      pages: 26,
      images: 471,
    },
    {
      website: "Amy Adams",
      overallRank: "KW",
      popularityRank: 99541,
      relevanceRank: 256877,
      pages: 95477,
      images: 47966,
    },

    // Add more data as necessary
  ];
  const [selectedColumn, setSelectedColumn] = useState(null);


  const itemsPerPage = 10;
  const totalPages = Math.ceil(websites.length / itemsPerPage);

  const handleClick = (column) => {
    setSelectedColumn(column);
    requestSort(column); // Call your sorting function
  };
  const sortedWebsites = React.useMemo(() => {
    let sortableWebsites = [...websites];
    if (sortConfig !== null) {
      sortableWebsites.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableWebsites.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [websites, sortConfig, currentPage]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  const handleCategoryClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleTimeClick = () => {
    setSelectedTime(selectedTime === "Last 24 Hrs" ? "All" : "Last 24 Hrs");
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleRowClick = (index) => {
    setSelectedRowIndex(index);
  };

  return (
    <div className="overflow-x-auto">
      {/* <div style={{ marginBottom: '9px', display: 'flex', justifyContent: 'flex-end', fontSize: '14px', fontFamily: 'Arial' }}>
        <div style={{ display: "flex", color: "#A68036", marginRight: "10px" }}>
          <button style={{ backgroundColor: "transparent", border: "none", color: "#A68036", cursor: "pointer", marginRight: "10px" }}>
            Rank#
          </button>
          <button style={{ backgroundColor: "transparent", border: "none", color: "#A68036", cursor: "pointer", marginRight: "10px" }}>
            Score
          </button>
          <button style={{ backgroundColor: "transparent", border: "none", color: "#A68036", cursor: "pointer"}}>
            Count: 71
          </button>
        </div>
      </div> */}
      {/*  <div className="py-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
       <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "10px", color: "#A68036" }}>
            Category:
          </span>
          <a href="#" onClick={handleCategoryClick} style={{ color: "#172d5f", marginRight: "180px" }}>
            {selectedCategory}
          </a>
          <span style={{ marginRight: "10px", color: "#A68036" }}>
            Time:
          </span>
          <a href="#" onClick={handleTimeClick} style={{ color: "#172d5f", marginRight: "20px" }}>
            {selectedTime}
          </a>
          <div style={{ borderLeft: "2px solid #A68036", height: "35px", marginLeft: "10px" }}></div>
        </div> */}
      {/* <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '14px', fontFamily: 'Arial' }}>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => handlePageClick(page + 1)}
              style={{
                margin: '0 5px',
                padding: '0',
                backgroundColor: 'transparent',
                color: currentPage === page + 1 ? '#172d5f' : '#A68036',
                border: 'none',
                cursor: 'pointer',
                textDecoration: currentPage === page + 1 ? 'underline' : 'none',
              }}
            >
              {page + 1}
            </button>
          ))}
        </div> 
      </div>*/}
      {/*<div style={{ textAlign: "center", marginBottom: "10px" ,color: "#A68036"}}>
        {alphabets.map((alpha) => (
          <span
            key={alpha}
            onClick={() => setSelectedAlpha(alpha)}
            style={{
              cursor: "pointer",
              margin: "0 5px",
              textDecoration: selectedAlpha === alpha ? "underline" : "none",
              color: selectedAlpha === alpha ? "#A68036" : "#050505",
            }}
          >
            {alpha}
          </span>
        ))}
        <span
          onClick={() => setSelectedAlpha(null)}
          style={{
            cursor: "pointer",
            margin: "0 5px",
            textDecoration: selectedAlpha === null ? "underline" : "none",
            color: selectedAlpha === null ? "#A68036" : "#050505",
          }}
        >
          All
        </span>
      </div>*/}
      <div className="table-div rounded-xl overflow-hidden">
        <div className="top  flex justify-between bg-gray-200 p-3 rounded-t-lg">
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#A68036",
              cursor: "pointer",
            }}
          >
            Count: 71
          </button>
          <div
            style={{ display: "flex", fontSize: "14px", fontFamily: "Arial"  }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                style={{
                  margin: "0 5px",
                  padding: "0",
                  backgroundColor: "transparent",
                  color: currentPage === page ? "#77abed" : "#A68036",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: currentPage === page ? "none" : "none",
                }}
              >
                {page}
              </button>
            ))}
                      <button style={{ backgroundColor: 'transparent', border: 'none', color: '#A68036', cursor: 'pointer', fontSize: '14px', fontFamily: 'Arial', marginRight: '10px' }}>
                    ...  18
                  </button>
          </div>

        </div>
        <table className="min-w-full border-2 rounded-xl table-fixed">
        <thead style={{ backgroundColor: "#eff1ef" }}>
      <tr className="border-2">
        <th
          className={`py-1 px-1 border-2 uppercase cursor-pointer ${selectedColumn === "website" ? 'text-custom' : ''}`}
          style={{
            color: selectedColumn === "website" ? "rgb(23, 45, 95)" : "#A68036",
            textAlign: "center",
          }}
          onClick={() => handleClick("website")}
        >
          Search Item
        </th>
        <th
          className={`py-1 px-1 border-2 uppercase cursor-pointer ${selectedColumn === "overallRank" ? 'text-custom' : ''}`}
          style={{
            color: selectedColumn === "overallRank" ? "rgb(23, 45, 95)" : "#A68036",
            textAlign: "center",
          }}
          onClick={() => handleClick("overallRank")}
        >
          Type
        </th>
        <th
          className={`py-1 px-1 border-2 uppercase cursor-pointer ${selectedColumn === "popularityRank" ? 'text-custom' : ''}`}
          style={{
            color: selectedColumn === "popularityRank" ? "rgb(23, 45, 95)" : "#A68036",
            textAlign: "center",
          }}
          onClick={() => handleClick("popularityRank")}
        >
          overall rank ▼
        </th>
        <th
          className={`py-1 px-1 border-2 uppercase cursor-pointer ${selectedColumn === "popularityRank" ? 'text-custom' : ''}`}
          style={{
            color: selectedColumn === "popularityRank" ? "rgb(23, 45, 95)" : "#A68036",
            textAlign: "center",
          }}
          onClick={() => handleClick("popularityRank")}
        >
          Popularity rank
        </th>
        <th
          className={`py-1 px-1 border-2 uppercase cursor-pointer ${selectedColumn === "relevanceRank" ? 'text-custom' : ''}`}
          style={{
            color: selectedColumn === "relevanceRank" ? "rgb(23, 45, 95)" : "#A68036",
            textAlign: "center",
          }}
          onClick={() => handleClick("relevanceRank")}
        >
          relevance rank
        </th>
        <th
          className={`py-1 px-1 border-2 uppercase cursor-pointer ${selectedColumn === "pages" ? 'text-custom' : ''}`}
          style={{
            color: selectedColumn === "pages" ? "rgb(23, 45, 95)" : "#A68036",
            textAlign: "center",
          }}
          onClick={() => handleClick("pages")}
        >
          <div className="flex justify-center items-center gap-2">

          <span>Pages</span>
          <span className="text-[12px]" style={{ color: selectedColumn === "pages" ? "rgb(23, 45, 95)" : '#A68036' }}> ▼</span>
          </div>
        </th>
        <th
          className={`py-1 px-1 border-2 uppercase cursor-pointer ${selectedColumn === "videos" ? 'text-custom' : ''}`}
          style={{
            color: selectedColumn === "videos" ? "rgb(23, 45, 95)" : "#A68036",
            textAlign: "center",
          }}
          onClick={() => handleClick("videos")}
        >
          Videos
        </th>
        <th
          className={`py-1 px-1 border-2 uppercase cursor-pointer ${selectedColumn === "websites" ? 'text-custom' : ''}`}
          style={{
            color: selectedColumn === "websites" ? "rgb(23, 45, 95)" : "#A68036",
            textAlign: "center",
          }}
          onClick={() => handleClick("websites")}
        >
          Websites
        </th>
      </tr>
    </thead>
          <tbody className="border-2 rounded-lg">
            {sortedWebsites.map((website, index) => (
              <tr
                key={index}
                className="border-2 rounded-lg"
                style={{
                  color: selectedRowIndex === index ? "#172d5f" : "#A68036",
                  cursor: "pointer",
                  backgroundColor: index % 2 === 0 ? "transparent" : "#f0f0f0", // Alternating colors
                }}
                onClick={() => handleRowClick(index)}
              >
                <td
                  className={`${cssclass} w-[10rem] min-w-[10rem]`}
                  style={{ ...textStyle, textAlign: "left" }}
                >
                  {website.website}
                </td>
                <td
                  className={cssclass}
                  style={{ ...textStyle, textAlign: "center" }}
                >
                  {website.overallRank}
                </td>
                <td
                  className={cssclass}
                  style={{ ...textStyle, textAlign: "center" }}
                >
                  {website.popularityRank}
                </td>
                <td
                  className={cssclass}
                  style={{ ...textStyle, textAlign: "center" }}
                >
                  {website.relevanceRank}
                </td>
                <td
                  className={cssclass}
                  style={{ ...textStyle, textAlign: "center" }}
                >
                  {website.relevanceRank}
                </td>
                <td
                  className={cssclass}
                  style={{ ...textStyle, textAlign: "center" }}
                >
                  {website.relevanceRank}
                </td>
                <td
                  className={cssclass}
                  style={{ ...textStyle, textAlign: "center" }}
                >
                  {website.pages}
                </td>
                <td
                  className={cssclass}
                  style={{ ...textStyle, textAlign: "center" }}
                >
                  {website.images}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isPopupOpen && <CategoryPopup onClose={() => setIsPopupOpen(false)} />}{" "}
      {/* Render popup conditionally */}
      <div
        className="mb-4 rounded-lg  "
        style={{
          backgroundColor: "#f5f5f5",
          display: "inline-block",
          width: "100%",
          minHeight: "100px",
          marginTop: "20px",
        }}
      >
        <h2
          className="text-sm text-categrycolor bg-gray-100 mb-2 px-4 py-1 "
          style={{
            backgroundColor: "#e8e9e9",
            borderRadius: "12px 12px 0 0",
            borderTopRightRadius: "12px",
          }}
        >
          SEARCH 2
        </h2>
        <div
          className="flex space-x-1 overflow-x-auto items-center pl-[40px]"
          style={{ width: "auto" }}
        >
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default KeywordTable;
