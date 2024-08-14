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

  return (
    <>
      <div className="flex  font-sans ">
        <table className="w-3/4 border-collapse text-sm text-center">
          <thead>
            <tr className="text-categrycolor">
              <th className="p-2 border border-gray-300">Select</th>
              <th className="p-2 border border-gray-300">Search Item</th>
              <th className="p-2 border border-gray-300">Type</th>
              <th className="p-2 border border-gray-300">Pages</th>
              <th className="p-2 border border-gray-300">Images</th>
              <th className="p-2 border border-gray-300">Videos</th>
              <th className="p-2 border border-gray-300">Websites</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-categrycolor">
                <td className="border border-gray-300">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.name)}
                    onChange={() => handleSelect(item.name)}
                  />
                </td>
                <td className="p-2 border border-gray-300">{item.name}</td>
                <td className="p-2 border border-gray-300">KW</td>
                <td className="p-2 border border-gray-300">{item.pages}</td>
                <td className="p-2 border border-gray-300">{item.images}</td>
                <td className="p-2 border border-gray-300">{item.videos}</td>
                <td className="p-2 border border-gray-300">{item.websites}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="w-1/5 border border-gray-300 p-3 text-categrycolor">
          <div className="border-b border-gray-300  font-bold mb-3">
            Selected Items
          </div>
          <ul className="list-none pl-0">
            {selectedItems.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="ml-auto w-1/5 p-2">
        <button className="w-full py-2 bg-red-800 text-white cursor-pointer">
          SUBMIT
        </button>
      </div>
    </>
  );
};

export default SearchTable;
