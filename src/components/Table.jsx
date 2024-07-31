import React, { useState } from "react";

const Table = () => {
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('/ All (4621)');
  const [selectedTime, setSelectedTime] = useState('Last 24 Hrs');
  const [selectedAlpha, setSelectedAlpha] = useState(null);
  const cssclass = "py-1 px-1 border-2"; 
  const textStyle = { fontSize: "14px", fontFamily: "Arial" };

  const categories = [
    '/ All (4621)', '/ News', '/ Sports', '/ Entertainment'
  ];

  const times = [
    'Last 24 Hrs', 'Last Week', 'Last Month', 'Last Year'
  ];

  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const websites = [
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
  const selectedColor = "#b18b45";
  const headerBackgroundColor = "#eff1ef"; // Background color for the header
  const defaultColor = "#050505";

  return (
    <div className="overflow-x-auto rounded-none">
      <div className="py-2">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ marginRight: '10px', color: selectedColor }}>Category:</span>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)} 
            style={{ marginRight: '20px' }}
          >
            {categories.map((category, index) => (
              <option 
                key={index} 
                value={category}
                style={{ color: selectedCategory === category ? selectedColor : defaultColor }}
              >
                {category}
              </option>
            ))}
          </select>
          <span style={{ marginRight: '10px', color: selectedColor }}>Time:</span>
          <select 
            value={selectedTime} 
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            {times.map((time, index) => (
              <option 
                key={index} 
                value={time}
                style={{ color: selectedTime === time ? selectedColor : defaultColor }}
              >
                {time}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ marginRight: '10px', color: selectedColor }}>Alpha Match:</span>
          {alphabets.map((alpha) => (
            <span 
              key={alpha} 
              onClick={() => setSelectedAlpha(alpha)} 
              style={{ 
                cursor: 'pointer', 
                margin: '0 5px', 
                textDecoration: selectedAlpha === alpha ? 'underline' : 'none',
                color: selectedAlpha === alpha ? selectedColor : defaultColor
              }}
            >
              {alpha}
            </span>
          ))}
          <span 
            onClick={() => setSelectedAlpha(null)} 
            style={{ 
              cursor: 'pointer', 
              margin: '0 5px', 
              textDecoration: selectedAlpha === null ? 'underline' : 'none',
              color: selectedAlpha === null ? selectedColor : defaultColor
            }}
          >
            All
          </span>
        </div>
      </div>
      <table className="min-w-full border-2">
        <thead style={{ backgroundColor: headerBackgroundColor }}>
          <tr className="border-2">
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
              onClick={() => requestSort("relRank")}
            >
              Rel Rank
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
            <th
              className={cssclass}
              style={{ ...textStyle, color: selectedColor }}
              onClick={() => requestSort("Cfg")}
            >
              Cfg
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: selectedColor }}
              onClick={() => requestSort("sel")}
            >
              Sel
            </th>
          </tr>
        </thead>
        <tbody className="border-2">
          {sortedWebsites.map((website, index) => (
            <tr key={index} className="border-2">
              <td className={cssclass} style={textStyle}>
                {website.website}
              </td>
              <td className={cssclass} style={textStyle}>
                {website.overallRank}
              </td>
              <td className={cssclass} style={textStyle}>
                {website.popularityRank}
              </td>
              <td className={cssclass} style={textStyle}>
                {website.relRank}
              </td>
              <td className={cssclass} style={textStyle}>
                {website.pages}
              </td>
              <td className={cssclass} style={textStyle}>
                {website.images}
              </td>
              <td className={cssclass} style={textStyle}>
                {website.videos}
              </td>
              <td className={cssclass} style={textStyle}>
                {website.Cfg}
              </td>
              <td className="py-1 px-1 border border-gray-300" style={{ color: "#050544" }}>
                <input type="checkbox" name="" id="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
