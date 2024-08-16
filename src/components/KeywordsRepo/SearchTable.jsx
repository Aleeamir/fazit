import React, { useState } from "react";

const SearchTable = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const data = [
    {
      name: "Neil Abercrombie",
      pages: 45612,
      images: 21401,
      videos: 1206,
      websites: 1987,
    },
    {
      name: "Amy Adams",
      pages: 99541,
      images: 256877,
      videos: 95477,
      websites: 47966,
    },
    {
      name: "Roma Agrawal",
      pages: 8549,
      images: 844,
      videos: 26,
      websites: 471,
    },
    {
      name: "Julie Andrews",
      pages: 89180,
      images: 158177,
      videos: 66947,
      websites: 46874,
    },
    {
      name: "Jean Arthur",
      pages: 12833,
      images: 15966,
      videos: 11744,
      websites: 2889,
    },
    {
      name: "Amy Adams",
      pages: 99541,
      images: 256877,
      videos: 95477,
      websites: 47966,
    },
    {
      name: "Roma Agrawal",
      pages: 8549,
      images: 844,
      videos: 26,
      websites: 471,
    },
    {
      name: "Julie Andrews",
      pages: 89180,
      images: 158177,
      videos: 66947,
      websites: 46874,
    },
    {
      name: "Jean Arthur",
      pages: 12833,
      images: 15966,
      videos: 11744,
      websites: 2889,
    },
    {
      name: "Amy Adams",
      pages: 99541,
      images: 256877,
      videos: 95477,
      websites: 47966,
    },
    {
      name: "Roma Agrawal",
      pages: 8549,
      images: 844,
      videos: 26,
      websites: 471,
    },
    {
      name: "Julie Andrews",
      pages: 89180,
      images: 158177,
      videos: 66947,
      websites: 46874,
    },
    {
      name: "Jean Arthur",
      pages: 12833,
      images: 15966,
      videos: 11744,
      websites: 2889,
    },
    {
      name: "Roma Agrawal",
      pages: 8549,
      images: 844,
      videos: 26,
      websites: 471,
    },
    {
      name: "Julie Andrews",
      pages: 89180,
      images: 158177,
      videos: 66947,
      websites: 46874,
    },
    {
      name: "Jean Arthur",
      pages: 12833,
      images: 15966,
      videos: 11744,
      websites: 2889,
    },
    {
      name: "Amy Adams",
      pages: 99541,
      images: 256877,
      videos: 95477,
      websites: 47966,
    },
    {
      name: "Roma Agrawal",
      pages: 8549,
      images: 844,
      videos: 26,
      websites: 471,
    },
    {
      name: "Julie Andrews",
      pages: 89180,
      images: 158177,
      videos: 66947,
      websites: 46874,
    },
    {
      name: "Jean Arthur",
      pages: 12833,
      images: 15966,
      videos: 11744,
      websites: 2889,
    },
    // Add more rows here...
  ];

  const handleSelect = (item) => {
    setSelectedItems((prevState) => {
      if (prevState.includes(item)) {
        return prevState.filter((i) => i !== item);
      } else {
        return [...prevState, item];
      }
    });
  };

  const cssClass = "p-2 border border-categrycolor";

  return (
    <>
      <div className="flex  font-sans ">
        <table className="w-[80%] border-collapse text-sm text-center">
          <thead>
            <tr className="text-categrycolor bg-[#ecf0f0] text-center">
              <th className={cssClass}>Select</th>
              <th className={cssClass}>Search Item</th>
              <th className={cssClass}>Type</th>
              <th className={cssClass}>Pages ▼</th>
              <th className={cssClass}>Images</th>
              <th className={cssClass}>Videos</th>
              <th className={cssClass}>Websites</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-categrycolor">
                <td className="border border-categrycolor">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.name)}
                    onChange={() => handleSelect(item.name)}
                  />
                </td>
                <td className="p-2 border border-categrycolor text-left">
                  {item.name}
                </td>
                <td className="p-2 border border-categrycolor text-left">KW</td>
                <td className="p-2 border border-categrycolor text-right">
                  {item.pages}
                </td>
                <td className="p-2 border border-categrycolor text-right">
                  {item.images}
                </td>
                <td className="p-2 border border-categrycolor text-right">
                  {item.videos}
                </td>
                <td className="p-2 border border-categrycolor text-right">
                  {item.websites}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="w-1/5 border h-[420px]   border-categrycolor  text-categrycolor">
          <div className="border-b bg-[#ecf0f0] border-categrycolor  text-center p-[6px] font-bold ">
            Selected Items
          </div>
          <div className="text-center">
            <p>julie Andrews </p>
            <p>jean Arthur </p>
          </div>
        </div>
      </div>
      <div className="ml-auto   w-1/5 p-2">
        <button className="w-full py-2 bg-red-800 text-white cursor-pointer">
          SUBMIT
        </button>
      </div>
    </>
  );
};

export default SearchTable;
