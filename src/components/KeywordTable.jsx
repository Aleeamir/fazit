import React, { useState } from "react";

const KeywordTable = () => {
  const [sortConfig, setSortConfig] = useState(null);
  const cssclass = "py-2 px-4 border-2";
  const keywords = [
    { searchItem: "Neil Abercrombie", 
      type: "KW", 
      pages: 45612, 
      images: 21401, 
      videos: 1206,
       websites: 1987
       },
    { searchItem: "Amy Adams",
       type: "KW",
        pages: 99541,
        images: 256877, 
        videos: 95477,
        websites: 47966
        },
    { searchItem: "Roma Agrawal",
     type: "KW", 
     pages: 8549,
     images: 844, 
     videos: 26,
     websites: 1487
    },
    { searchItem: "Troy Aikman", type: "KW", pages: 74852, images: 94401, videos: 25741, websites: 14871 },
    { searchItem: "Daniel Akaka", type: "KW", pages: 2401, images: 748, videos: 20, websites: 149 },
    { searchItem: "Charles Albanel", type: "KW", pages: 1904, images: 799, videos: 82, websites: 78 },
    { searchItem: "Eddie Albert", type: "KW", pages: 14682, images: 28633, videos: 8591, websites: 9563 },
    { searchItem: "Alan Alda", type: "KW", pages: 49271, images: 54997, videos: 54019, websites: 12657 },
    { searchItem: "George Allen", type: "KW", pages: 9637, images: 16397, videos: 9684, websites: 19684 },
    { searchItem: "Marcus Allen", type: "KW", pages: 49817, images: 65339, videos: 9888, websites: 7664 },
  ];

  const sortedKeywords = React.useMemo(() => {
    let sortableKeywords = [...keywords];
    if (sortConfig !== null) {
      sortableKeywords.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableKeywords;
  }, [keywords, sortConfig]);

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
            <th className={cssclass} style={{ color: "#c2b483" }} onClick={() => requestSort("searchItem")}>
              Search Item
            </th>
            <th className={cssclass} style={{ color: "#c2b483" }} onClick={() => requestSort("type")}>
              Type
            </th>
            <th className={cssclass} style={{ color: "#c2b483" }} onClick={() => requestSort("pages")}>
              Pages
            </th>
            <th className={cssclass} style={{ color: "#c2b483" }} onClick={() => requestSort("images")}>
              Images
            </th>
            <th className={cssclass} style={{ color: "#c2b483" }} onClick={() => requestSort("videos")}>
              Videos
            </th>
            <th className={cssclass} style={{ color: "#c2b483" }} onClick={() => requestSort("websites")}>
              Websites
            </th>
          </tr>
        </thead>
        <tbody className="border-2">
          {sortedKeywords.map((keyword, index) => (
            <tr key={index} className="border-2">
              <td className={cssclass} style={{ color: "#c2b483" }}>{keyword.searchItem}</td>
              <td className={cssclass} style={{ color: "#c2b483" }}>{keyword.type}</td>
              <td className={cssclass} style={{ color: "#c2b483" }}>{keyword.pages}</td>
              <td className={cssclass} style={{ color: "#c2b483" }}>{keyword.images}</td>
              <td className={cssclass} style={{ color: "#c2b483" }}>{keyword.videos}</td>
              <td className={cssclass} style={{ color: "#c2b483" }}>{keyword.websites}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeywordTable;
