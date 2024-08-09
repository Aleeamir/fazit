import React, { useState } from 'react';

const RankingPopup = ({ togglePopup }) => {
  const [rankSettings, setRankSettings] = useState([
    { item: 'R1', rankSelection: '', sortOrder: '' },
    { item: 'R2', rankSelection: '', sortOrder: '' },
    { item: 'R3', rankSelection: '', sortOrder: '' },
  ]);

  const [filterSettings, setFilterSettings] = useState([
    { item: 'F1', filterSelection: '', incExc: true, filterValue: '' },
    { item: 'F2', filterSelection: '', incExc: true, filterValue: '' },
    { item: 'F3', filterSelection: '', incExc: true, filterValue: '' },
  ]);

  const handleRankChange = (index, key, value) => {
    const updatedRankSettings = [...rankSettings];
    updatedRankSettings[index][key] = value;
    setRankSettings(updatedRankSettings);
  };

  const handleFilterChange = (index, key, value) => {
    const updatedFilterSettings = [...filterSettings];
    updatedFilterSettings[index][key] = value;
    setFilterSettings(updatedFilterSettings);
  };

  const clearRankSettings = () => {
    setRankSettings([
      { item: 'R1', rankSelection: '', sortOrder: '' },
      { item: 'R2', rankSelection: '', sortOrder: '' },
      { item: 'R3', rankSelection: '', sortOrder: '' },
    ]);
  };

  const clearFilterSettings = () => {
    setFilterSettings([
      { item: 'F1', filterSelection: '', incExc: true, filterValue: '' },
      { item: 'F2', filterSelection: '', incExc: true, filterValue: '' },
      { item: 'F3', filterSelection: '', incExc: true, filterValue: '' },
    ]);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded border-popupcolor border-8 " style={{ width: '60%'}}>
        <div className="flex mb-6 text-stone-700">
          <h2 className="text-xl text-popupcolor">Custom Ranking and Filtering of Your Search Results</h2>
          <button
            className="px-4 py-2 text-base bg-[#C0A74F] text-white focus:outline-none border-0 rounded-[5px] ml-auto"
            onClick={togglePopup}
          >
            CLOSE
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="w-full text-stone-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-popupcolor">Rank</h3>
              <button
                className="px-4 py-2 text-base bg-red-500 text-white focus:outline-none border-0 rounded-[5px]"
                onClick={clearRankSettings}
              >
                Clear
              </button>
            </div>
            <table className="w-full border-collapse border-popupcolor border-2 text-stone-700">
              <thead className="border-popupcolor border-2 text-sm text-popupcolor">
                <tr>
                  <th className="border border-popupcolor p-1">Item</th>
                  <th className="border border-popupcolor p-1">Rank Selection</th>
                  <th className="border border-popupcolor p-1">Sort Order</th>
                </tr>
              </thead>
              <tbody>
                {rankSettings.map((rank, index) => (
                  <tr key={index} className="border-popupcolor border-2 text-popupcolor">
                    <td className="border border-popupcolor p-1">{rank.item}</td>
                    <td className="border border-popupcolor p-1">
                      <select
                        value={rank.rankSelection}
                        onChange={(e) => handleRankChange(index, 'rankSelection', e.target.value)}
                      >
                        <option value="">Select</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                      </select>
                    </td>
                    <td className="border border-popupcolor p-1">
                      <select
                        value={rank.sortOrder}
                        onChange={(e) => handleRankChange(index, 'sortOrder', e.target.value)}
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full text-stone-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-popupcolor">Filters</h3>
              <button
                className="px-4 py-2 text-base bg-red-500 text-white focus:outline-none border-0 rounded-[5px]"
                onClick={clearFilterSettings}
              >
                Clear
              </button>
            </div>
            <table className="w-full border-collapse border-popupcolor border-2 text-stone-700">
              <thead className="border-popupcolor border-2 text-sm text-popupcolor">
                <tr>
                  <th className="border border-popupcolor p-1">Item</th>
                  <th className="border border-popupcolor p-1">Filter Selection</th>
                  <th className="border border-popupcolor p-1">Inc/Exc</th>
                  <th className="border border-popupcolor p-1">Filter Value</th>
                </tr>
              </thead>
              <tbody>
                {filterSettings.map((filter, index) => (
                  <tr key={index} className="border-popupcolor border-2 text-popupcolor">
                    <td className="border border-popupcolor p-1">{filter.item}</td>
                    <td className="border border-popupcolor p-1">
                      <select
                        value={filter.filterSelection}
                        onChange={(e) => handleFilterChange(index, 'filterSelection', e.target.value)}
                      >
                        <option value="">Select</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                      </select>
                    </td>
                    <td className="border border-popupcolor p-1 text-center">
                      <input
                        type="checkbox"
                        checked={filter.incExc}
                        onChange={(e) => handleFilterChange(index, 'incExc', e.target.checked)}
                      />
                    </td>
                    <td className="border border-popupcolor p-1">
                      <input
                        type="text"
                        value={filter.filterValue}
                        onChange={(e) => handleFilterChange(index, 'filterValue', e.target.value)}
                        className="w-full"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingPopup;
