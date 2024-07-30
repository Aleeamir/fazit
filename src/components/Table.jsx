import React, { useState } from "react";

const Table = () => {
  const [sortConfig, setSortConfig] = useState(null);
  const cssclass = "py-2 px-4 border-2";
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
      website: "theepochtimes.com",
      overallRank: 2,
      popularityRank: 3,
      relRank: 2,
      pages: 1054,
      images: 1035,
      videos: 0,
      Cfg: 3,
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

  return (
    <div className="overflow-x-auto rounded-none ">
      <table className="min-w-full bg-white border-2">
        <thead className="border-2">
          <tr className="border-2">
            <th className={cssclass}style={{color:"#c2b483"}} onClick={() => requestSort("website")}>
              Website
            </th>
            <th className={cssclass}style={{color:"#c2b483"}} onClick={() => requestSort("overallRank")}>
              Overall Rank
            </th>
            <th
              className={cssclass}style={{color:"#c2b483"}}
              onClick={() => requestSort("popularityRank")}
            >
              Popularity Rank
            </th>
            <th className={cssclass} style={{color:"#c2b483"}} onClick={() => requestSort("relRank")}>
              Rel Rank
            </th>
            <th className={cssclass} style={{color:"#c2b483"}} onClick={() => requestSort("pages")}>
              Pages
            </th>
            <th className={cssclass}style={{color:"#c2b483"}} onClick={() => requestSort("images")}>
              Images
            </th>
            <th className={cssclass} style={{color:"#c2b483"}} onClick={() => requestSort("videos")}>
              Videos
            </th>
            <th className={cssclass} style={{color:"#c2b483"}} onClick={() => requestSort("cfg")}>
              Cfg
            </th>
            <th className={cssclass} style={{color:"#c2b483"}} onClick={() => requestSort("sel")}>
              Sel
            </th>
          </tr>
        </thead>
        <tbody className="border-2">
          {sortedWebsites.map((website, index) => (
            <tr key={index} className="border-2">
              <td className={cssclass} style={{color:"#c2b483"}}>{website.website}</td>
              <td className={cssclass}style={{color:"#c2b483"}}>{website.overallRank}</td>
              <td className={cssclass}style={{color:"#c2b483"}}>{website.popularityRank}</td>
              <td className={cssclass}style={{color:"#c2b483"}}>{website.relRank}</td>
              <td className={cssclass}style={{color:"#c2b483"}}>{website.pages}</td>
              <td className={cssclass}style={{color:"#c2b483"}}>{website.images}</td>
              <td className={cssclass}style={{color:"#c2b483"}}>{website.videos}</td>
              <td className={cssclass}style={{color:"#c2b483"}}>{website.Cfg}</td>
              <td className="py-2 px-4 border border-gray-300 text-[#6394b4]" ><input type="checkbox" name="" id="" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
