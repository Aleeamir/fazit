import React, { useState } from "react";

const KeyWords = () => {
  const [sortConfig, setSortConfig] = useState(null);
  const cssclass = "py-2 px-4 border-2";
  const websites = [
    {
      searchitems: "Google",
      types: "Search Engine",
      pages: 1000,
      images: 500,
      videos: 200,
      website: 300,
    },
    {
      searchitems: "Facebook",
      types: "Social Media",
      pages: 800,
      images: 600,
      videos: 150,
      website: 250,
    },
    {
      searchitems: "Amazon",
      types: "E-commerce",
      pages: 900,
      images: 400,
      videos: 100,
      website: 350,
    },
    {
      searchitems: "YouTube",
      types: "Video Platform",
      pages: 700,
      images: 300,
      videos: 800,
      website: 200,
    },
    {
      searchitems: "Twitter",
      types: "Social Media",
      pages: 600,
      images: 500,
      videos: 100,
      website: 150,
    },
    {
      searchitems: "LinkedIn",
      types: "Professional Network",
      pages: 500,
      images: 200,
      videos: 50,
      website: 100,
    },
    {
      searchitems: "Instagram",
      types: "Social Media",
      pages: 800,
      images: 700,
      videos: 120,
      website: 220,
    },
    {
      searchitems: "Reddit",
      types: "Discussion Forum",
      pages: 750,
      images: 450,
      videos: 130,
      website: 210,
    },
    {
      searchitems: "Pinterest",
      types: "Image Sharing",
      pages: 400,
      images: 900,
      videos: 60,
      website: 140,
    },
    {
      searchitems: "Wikipedia",
      types: "Online Encyclopedia",
      pages: 1000,
      images: 1000,
      videos: 10,
      website: 500,
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

  return (
    <div className="overflow-x-auto rounded-none ">
      <table className="min-w-full bg-white border-2">
        <thead className="border-2">
          <tr className="border-2">
            <th className={cssclass} onClick={() => requestSort("website")}>
              Search Items
            </th>
            <th className={cssclass} onClick={() => requestSort("overallRank")}>
              Types
            </th>
            <th
              className={cssclass}
              onClick={() => requestSort("popularityRank")}
            >
              Pages
            </th>
            <th className={cssclass} onClick={() => requestSort("relRank")}>
              Images
            </th>
            <th className={cssclass} onClick={() => requestSort("pages")}>
              Videos
            </th>
            <th className={cssclass} onClick={() => requestSort("images")}>
              Websites
            </th>
          </tr>
        </thead>
        <tbody className="border-2">
          {sortedWebsites.map((website, index) => (
            <tr key={index} className="border-2">
              <td className={cssclass}>{website.searchitems}</td>
              <td className={cssclass}>{website.types}</td>
              <td className={cssclass}>{website.pages}</td>
              <td className={cssclass}>{website.images}</td>
              <td className={cssclass}>{website.videos}</td>
              <td className={cssclass}>{website.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeyWords;
