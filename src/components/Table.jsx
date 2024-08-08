import React, { useState } from "react";

const Table = () => {
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("/ All (586)");
  const [selectedTime, setSelectedTime] = useState("Last 24 Hrs");
  const [selectedAlpha, setSelectedAlpha] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null); 
  const cssclass = "py-1 px-1 border-2";
  const textStyle = { fontSize: "14px", fontFamily: "Arial", padding: "5px" };

  const categories = ["/ All (586)", "/ News", "/ Sports", "/ Entertainment"];
  const times = ["Last 24 Hrs", "All"];
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const websites = [
    // Sample data
    {
      website: "washingtonpost.com",
      overallRank: 1,
      popularityRank: 2,
      relRank: 1,
      pages: 29,
      images: 29,
      videos: 0,
    },
    {
      website: "latimes.com",
      overallRank: 2,
      popularityRank: 8,
      relRank: 2,
      pages: 32,
      images: 32,
      videos: 0,
    },
    {
      website: "washingtonpost.com",
      overallRank: 1,
      popularityRank: 2,
      relRank: 1,
      pages: 759,
      images: 641,
      videos: 0,
      Cfg: 6,
    },
    {
      website: "theepochtimes.com",
      overallRank: 2,
      popularityRank: 3,
      relRank: 2,
      pages: 1054,
      images: 1035,
      videos: 0,
      Cfg: 4,
    },
    {
      website: "washingtonpost.com",
      overallRank: 1,
      popularityRank: 2,
      relRank: 1,
      pages: 759,
      images: 641,
      videos: 0,
      Cfg:  4,

    },
    {
      website: "theepochtimes.com", overallRank: 2, popularityRank: 3, relRank: 2, pages: 1054, images: 1035, videos: 0,Cfg: 3,
    },
    {
      website: "washingtonpost.com",
      overallRank: 1,
      popularityRank: 2,
      relRank: 1,
      pages: 759,
      images: 641,
      videos: 0,
      Cfg: 7,
    },
    {
      website: "theepochtimes.com",
      overallRank: 2,
      popularityRank: 3,
      relRank: 2,
      pages: 1054,
      images: 1035,
      videos: 0,
      Cfg: 4,
    },
    {
      website: "washingtonpost.com",
      overallRank: 1,
      popularityRank: 2,
      relRank: 1,
      pages: 759,
      images: 641,
      videos: 0,
      Cfg: 6,
    },
    {
      website: "theepochtimes.com",
      overallRank: 2,
      popularityRank: 3,
      relRank: 2,
      pages: 1054,
      images: 1035,
      videos: 0,
      Cfg: 8,
    },
    {
      website: "washingtonpost.com",
      overallRank: 1,
      popularityRank: 2,
      relRank: 1,
      pages: 759,
      images: 641,
      videos: 0,
      Cfg: 6,
    },
    {
      website: "theepochtimes.com",
      overallRank: 2,
      popularityRank: 3,
      relRank: 2,
      pages: 1054,
      images: 1035,
      videos: 0,
      Cfg: 4,
    },
    {
      website: "washingtonpost.com",
      overallRank: 1,
      popularityRank: 2,
      relRank: 1,
      pages: 759,
      images: 641,
      videos: 0,
      Cfg:  4,

    },
    {
      website: "theepochtimes.com", overallRank: 2, popularityRank: 3, relRank: 2, pages: 1054, images: 1035, videos: 0,Cfg: 3,
    },
    {
      website: "washingtonpost.com",
      overallRank: 1,
      popularityRank: 2,
      relRank: 1,
      pages: 759,
      images: 641,
      videos: 0,
      Cfg: 7,
    },
    {
      website: "theepochtimes.com",
      overallRank: 2,
      popularityRank: 3,
      relRank: 2,
      pages: 1054,
      images: 1035,
      videos: 0,
      Cfg: 4,
    },
    {
      website: "washingtonpost.com",
      overallRank: 1,
      popularityRank: 2,
      relRank: 1,
      pages: 759,
      images: 641,
      videos: 0,
      Cfg: 6,
    },
    {
      website: "theepochtimes.com",
      overallRank: 2,
      popularityRank: 3,
      relRank: 2,
      pages: 1054,
      images: 1035,
      videos: 0,
      Cfg: 8,
    },
    {
      website: "washingtonpost.com",
      overallRank: 1,
      popularityRank: 2,
      relRank: 1,
      pages: 759,
      images: 641,
      videos: 0,
      Cfg: 6,
    },
    {
      website: "theepochtimes.com",
      overallRank: 2,
      popularityRank: 3,
      relRank: 2,
      pages: 1054,
      images: 1035,
      videos: 0,
      Cfg: 8,
    },
    {
      website: "washingtonpost.com",
      overallRank: 1,
      popularityRank: 2,
      relRank: 1,
      pages: 759,
      images: 641,
      videos: 0,
      Cfg: 6,
    },
    {
      website: "theepochtimes.com",
      overallRank: 2,
      popularityRank: 3,
      relRank: 2,
      pages: 1054,
      images: 1035,
      videos: 0,
      Cfg: 8,
    },
    {
      website: "washingtonpost.com",
      overallRank: 1,
      popularityRank: 2,
      relRank: 1,
      pages: 759,
      images: 641,
      videos: 0,
      Cfg: 6,
    },
    {
      website: "theepochtimes.com",
      overallRank: 2,
      popularityRank: 3,
      relRank: 2,
      pages: 1054,
      images: 1035,
      videos: 0,
      Cfg: 8,
    },
    // Add more data as necessary
  ];

  const itemsPerPage = 10; 
  const totalPages = 4; 

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
    alert("Category Popup");
  };

  const handleTimeClick = () => {
    setSelectedTime(selectedTime === "Last 24 Hrs" ? "All" : "Last 24 Hrs");
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  return (
    <div className="overflow-x-auto rounded-none">
      <div style={{ marginBottom: '9px', display: 'flex', justifyContent: 'flex-end', fontSize: '14px', fontFamily: 'Arial' }}>
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
      </div>
  
      <div className="py-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
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
        </div>
  
        <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '14px', fontFamily: 'Arial' }}>
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              style={{
                margin: '0 5px',
                padding: '0',
                backgroundColor: 'transparent',
                color: currentPage === page ? '#172d5f' : '#A68036',
                border: 'none',
                cursor: 'pointer',
                textDecoration: currentPage === page ? 'underline' : 'none',
              }}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
  
      <div style={{ textAlign: "center", marginBottom: "10px" ,color: "#A68036"}}>
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
      </div>
  
      <table className="min-w-full border-2">
        <thead style={{ backgroundColor: "#eff1ef" }}>
          <tr className="border-2">
            <th
              className={`${cssclass} w-64`} 
              style={{ ...textStyle, color: "#A68036", textAlign: "left" }} 
              onClick={() => requestSort("website")}
            >
              Website
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: "#A68036", textAlign: "center" }}
              onClick={() => requestSort("overallRank")}
            >
              Overall Rank
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: "#A68036", textAlign: "center" }}
              onClick={() => requestSort("popularityRank")}
            >
              Popularity Rank
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: "#A68036", textAlign: "center" }}
              onClick={() => requestSort("relRank")}
            >
              Rel Rank
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: "#A68036", textAlign: "center" }}
              onClick={() => requestSort("pages")}
            >
              Pages
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: "#A68036", textAlign: "center" }}
              onClick={() => requestSort("images")}
            >
              Images
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: "#A68036", textAlign: "center" }}
              onClick={() => requestSort("videos")}
            >
              Videos
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: "#A68036", textAlign: "center" }}
              onClick={() => requestSort("Cfg")}
            >
              Cfg
            </th>
            <th className={cssclass} style={{ ...textStyle, color: "#A68036", textAlign: "center" }}>
              Sel
            </th>
          </tr>
        </thead>
        <tbody className="border-2">
          {sortedWebsites.map((website, index) => (
            <tr
              key={index}
              className="border-2"
              onClick={() => handleRowClick(index)}
              style={{ color: selectedRow === index ? "#172d5f" : "#A68036", cursor: "pointer" }}
            >
              <td className={`${cssclass} w-64`} style={{ ...textStyle, textAlign: "left" }}>
                {website.website}
              </td>
              <td className={cssclass} style={{ ...textStyle, textAlign: "center" }}>
                {website.overallRank}
              </td>
              <td className={cssclass} style={{ ...textStyle, textAlign: "center" }}>
                {website.popularityRank}
              </td>
              <td className={cssclass} style={{ ...textStyle, textAlign: "center" }}>
                {website.relRank}
              </td>
              <td className={cssclass} style={{ ...textStyle, textAlign: "center" }}>
                {website.pages}
              </td>
              <td className={cssclass} style={{ ...textStyle, textAlign: "center" }}>
                {website.images}
              </td>
              <td className={cssclass} style={{ ...textStyle, textAlign: "center" }}>
                {website.videos}
              </td>
              <td className={cssclass} style={{ ...textStyle, textAlign: "center" }}>
                {website.Cfg}
              </td>
              <td className="py-1 px-1 border border-gray-300" style={{ color: "#050544", textAlign: "center" }}>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default Table;
