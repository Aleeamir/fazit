import React, { useState } from "react";

const KeywordTable = () => {
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("/ All (4621)");
  const [selectedTime, setSelectedTime] = useState("Last 24 Hrs");
  const [selectedAlpha, setSelectedAlpha] = useState(null);

  const cssclass = "py-1 px-1 border-2";
  const textStyle = { fontSize: "14px", fontFamily: "Arial" };

  const categories = ["/ All (4621)", "/ News", "/ Sports", "/ Entertainment"];

  const times = ["Last 24 Hrs", "Last Week", "Last Month", "Last Year"];

  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const websites = [
    {
      website: "washingtonpost.com",
      overallRank: 1,
      popularityRank: 3,
      relevanceRank: 1,
      pages: 87,
      images: 87,
      videos: 0,
    },
    {
      website: "breitbart.com",
      overallRank: 2,
      popularityRank: 4,
      relevanceRank: 2,
      pages: 145,
      images: 145,
      videos: 0,
    },
    {
      website: "mysanantonio.com",
      overallRank: 3,
      popularityRank: 31,
      relevanceRank: 3,
      pages: 65,
      images: 65,
      videos: 0,
    },
    {
      website: "salon.com",
      overallRank: 4,
      popularityRank: 17,
      relevanceRank: 4,
      pages: 21,
      images: 21,
      videos: 0,
    },
    {
      website: "wn.com",
      overallRank: 5,
      popularityRank: 62,
      relevanceRank: 5,
      pages: 14,
      images: 14,
      videos: 0,
    },
    {
      website: "foxnews.com",
      overallRank: 6,
      popularityRank: 2,
      relevanceRank: 17,
      pages: 88,
      images: 88,
      videos: 0,
    },
    {
      website: "businessinsider.com",
      overallRank: 7,
      popularityRank: 5,
      relevanceRank: 16,
      pages: 77,
      images: 45,
      videos: 0,
    },
    {
      website: "theepochtimes.com",
      overallRank: 8,
      popularityRank: 6,
      relevanceRank: 15,
      pages: 50,
      images: 50,
      videos: 0,
    },
    {
      website: "time.com",
      overallRank: 9,
      popularityRank: 9,
      relevanceRank: 14,
      pages: 73,
      images: 67,
      videos: 0,
    },
    {
      website: "dailycaller.com",
      overallRank: 10,
      popularityRank: 8,
      relevanceRank: 13,
      pages: 170,
      images: 170,
      videos: 0,
    },
    {
      website: "latimes.com",
      overallRank: 11,
      popularityRank: 11,
      relevanceRank: 12,
      pages: 49,
      images: 48,
      videos: 0,
    },
    {
      website: "abcnews.go.com",
      overallRank: 12,
      popularityRank: 12,
      relevanceRank: 11,
      pages: 50,
      images: 49,
      videos: 0,
    },
    {
      website: "wsj.com",
      overallRank: 13,
      popularityRank: 7,
      relevanceRank: 22,
      pages: 39,
      images: 39,
      videos: 0,
    },
    {
      website: "nytimes.com",
      overallRank: 14,
      popularityRank: 14,
      relevanceRank: 1,
      pages: 25,
      images: 27,
      videos: 0,
    },
  ];

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
    return sortableWebsites;
  }, [websites, sortConfig]);

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

  // Define color variables
  const selectedColor = "#A68036";
  const defaultColor = "#050505";
  const headerBgColor = "#eff1ef"; // Background color for table headers

  return (
    <div className="overflow-x-auto rounded-none">
      <div className="py-2">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span style={{ marginRight: "10px", color: selectedColor }}>
            Category:
          </span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ marginRight: "20px" }}
          >
            {categories.map((category, index) => (
              <option
                key={index}
                value={category}
                style={{
                  color:
                    selectedCategory === category
                      ? selectedColor
                      : defaultColor,
                }}
              >
                {category}
              </option>
            ))}
          </select>
          <span style={{ marginRight: "10px", color: selectedColor }}>
            Time:
          </span>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            {times.map((time, index) => (
              <option
                key={index}
                value={time}
                style={{
                  color: selectedTime === time ? selectedColor : defaultColor,
                }}
              >
                {time}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span style={{ marginRight: "10px", color: selectedColor }}>
            Alpha Match:
          </span>
          {alphabets.map((alpha) => (
            <span
              key={alpha}
              onClick={() => setSelectedAlpha(alpha)}
              style={{
                cursor: "pointer",
                margin: "0 5px",
                textDecoration: selectedAlpha === alpha ? "underline" : "none",
                color: selectedAlpha === alpha ? selectedColor : defaultColor,
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
              color: selectedAlpha === null ? selectedColor : defaultColor,
            }}
          >
            All
          </span>
        </div>
      </div>
      <table className="min-w-full bg-white border-2">
        <thead className="border-2">
          <tr className="border-2" style={{ backgroundColor: headerBgColor }}>
            <th
              className={cssclass}
              style={{ ...textStyle, color: selectedColor }}
              onClick={() => requestSort("website")}
            >
              Website
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: selectedColor }}
              onClick={() => requestSort("overallRank")}
            >
              Overall Rank
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: selectedColor }}
              onClick={() => requestSort("popularityRank")}
            >
              Popularity Rank
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: selectedColor }}
              onClick={() => requestSort("relevanceRank")}
            >
              Relevance Rank
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: selectedColor }}
              onClick={() => requestSort("pages")}
            >
              Pages
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: selectedColor }}
              onClick={() => requestSort("images")}
            >
              Images
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: selectedColor }}
              onClick={() => requestSort("videos")}
            >
              Videos
            </th>
          </tr>
        </thead>
        <tbody className="border-2">
          {sortedWebsites.map((website, index) => (
            <tr key={index} className="border-2">
              <td
                className={cssclass}
                style={{ ...textStyle, color: "#050505" }}
              >
                {website.website}
              </td>
              <td
                className={cssclass}
                style={{ ...textStyle, color: "#050505" }}
              >
                {website.overallRank}
              </td>
              <td
                className={cssclass}
                style={{ ...textStyle, color: "#050505" }}
              >
                {website.popularityRank}
              </td>
              <td
                className={cssclass}
                style={{ ...textStyle, color: "#050505" }}
              >
                {website.relevanceRank}
              </td>
              <td
                className={cssclass}
                style={{ ...textStyle, color: "#050505" }}
              >
                {website.pages}
              </td>
              <td
                className={cssclass}
                style={{ ...textStyle, color: "#050505" }}
              >
                {website.images}
              </td>
              <td
                className={cssclass}
                style={{ ...textStyle, color: "#050505" }}
              >
                {website.videos}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeywordTable;
