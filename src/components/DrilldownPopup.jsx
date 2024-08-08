import React from "react";

const DrilldownPopup = ({ togglePopup }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white max-w-max p-4 border border-gray-300">
        {/* Popup header with buttons */}
        <div className="flex justify-between mb-4">
          <div className="flex space-x-2">
            <button className="text-slate-400">
              Custom Drilldown
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-yellow-500 text-white">
              ADD DRILLDOWN
            </button>
            <button
              className="px-4 py-2 bg-yellow-500 text-white"
              onClick={togglePopup}
            >
              CLOSE
            </button>
          </div>
        </div>
        {/* Popup content area */}
        <div className="p-4 border border-gray-300">
          <div className="space-y-5">
            {/* Input fields with labels */}
            <div className="flex items-center">
              <label className="block text-sm font-medium text-[#A68036] w-24 text-right mr-2">
                Search 1
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-none"
                defaultValue="Trump"
                style={{ border: '1px solid rgb(204, 204, 204)' }}
              />
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-medium text-[#A68036] w-24 text-right mr-2">
                Search 2
              </label>
              <div className="flex w-full items-center">
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-none"
                  style={{ border: '1px solid rgb(204, 204, 204)' }}
                />
                <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded-none">
                  X
                </button>
                <button className="ml-2 px-4 py-2 bg-gray-300 rounded-none">
                  ⇅
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-5">
            {/* Group selection */}
            <div className="flex items-center">
              <label className="block text-sm font-medium text-[#A68036] w-24 text-right mr-2 ">
                Group
              </label>
              <div className="grid grid-cols-7 gap-2">
                {[
                  "All",
                  "Politics & Government",
                  "Business & the Economy",
                  "Crime & Justice",
                  "Immigration",
                  "Society",
                  "Climate & Environment",
                  "Technology",
                  "Health & Medicine",
                  "Social Issues",
                  "Defense & Military",
                  "Religion",
                  "Entertainment",
                  "More (23)",
                ].map((group) => (
                  <button
                    key={group}
                    className="border border-[#A68036] text-[#A68036] text-sm px-2 py-1 rounded-none"
                  >
                    {group}
                  </button>
                ))}
              </div>
            </div>
            {/* SubGroup selection */}
            <div className="flex items-center">
              <label className="block text-sm font-medium text-[#A68036] w-24 text-right mr-2">
                SubGroup
              </label>
              <div className="grid grid-cols-4 gap-2 h-10">
                {[
                  "All",
                  "Central Governments",
                  "States & Provinces",
                  "Cities & Local",
                ].map((subgroup) => (
                  <button
                    key={subgroup}
                    className="border border-[#A68036] text-[#A68036] text-sm px-2 py-1 rounded-none"
                  >
                    {subgroup}
                  </button>
                ))}
              </div>
            </div>
            {/* Additional search field */}
            <div className="flex items-center">
              <label className="block text-sm font-medium text-[#A68036] w-24 text-right mr-2">
                Search 3
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-none"
                style={{ border: '1px solid rgb(204, 204, 204)' }}
              />
            </div>
          </div>
        </div>
        {/* Submit button */}
        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 bg-red-500 text-white rounded-none">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrilldownPopup;
