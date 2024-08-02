import React from "react";

const DrilldownPopup = ({ togglePopup }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-3/4 p-4 rounded-lg border-popupcolor border-8">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-2">
            <button className="text-slate-400 rounded-l-md">
              Custom Drilldown
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded">
              ADD DRILLDOWN
            </button>
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded"
              onClick={togglePopup}
            >
              CLOSE
            </button>
          </div>
        </div>
        <div className=" p-4 border-popupcolor border-2">
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="mb-2 flex items-center">
                <label className="block text-sm font-medium text-gray-700">
                  Search 1
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  defaultValue="Trump"
                />
              </div>
              <div className="mb-2 flex items-center">
                <label className="block text-sm font-medium text-gray-700 mr-2">
                  Search 2
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded">
                  X
                </button>
                <button className="ml-2 px-4 py-2 bg-gray-300 rounded">
                  ⇅
                </button>
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
          <div className="flex-2  mt-4">
            <div className="flex">
              <label className="block text-sm font-medium text-gray-700">
                Group
              </label>
              <div className="mt-1 grid grid-cols-7 gap-y-4 ">
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
                    className=" border  border-popupcolor text-popupcolor text-sm"
                  >
                    {group}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex mt-5">
              <label className="block text-sm font-medium text-gray-700">
                SubGroup
              </label>
              <div className="mt-1 grid grid-cols-4  ">
                {[
                  "All",
                  "Central Governments",
                  "States & Provinces",
                  "Cities & Local",
                ].map((subgroup) => (
                  <button
                    key={subgroup}
                    className=" border  border-popupcolor text-popupcolor text-sm "
                  >
                    {subgroup}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-2 flex items-center">
              <label className="block text-sm font-medium text-gray-700">
                Search 3
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 bg-red-500 text-white rounded">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrilldownPopup;
