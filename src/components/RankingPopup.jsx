import React, { useState } from 'react';
import data from '../rowInfo.json';

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
    <>
      {/* Background overlay */}
      <div className="fixed inset-0 bg-gray opacity-50 z-40 h-[100vh] "></div>

      {/* Popup */}
      <div className="flex justify-end sticky inset-0 items-center z-50 w-auto">
        <div className="mt-[48px] bg-white border-popupcolor h-auto" style={{ width: '50%' }}>
          <div className='flex justify-end text-popupcolor font-[500] text-[19px]'>
            All-<span>>></span>(36) (Trump)
          </div>
          <hr className='h-[2px] bg-popupcolor'></hr>
          {/* Buttons */}
          <div className="px-[6px] mt-1 text-popupcolor flex items-center justify-between mb-1 text-[18px]">
            {/* Left */}
            <div>
              <button className='py-[1px] px-[20px] text-popupcolor focus:outline-none border-[2px] border-popupcolor rounded-[5px] ml-auto'>
                Full Screen
              </button>
            </div>
            {/* Right */}
            <div className='space-x-1'>
              <button className='px-[20px] py-[1px] text-popupcolor focus:outline-none border-[2px] border-popupcolor rounded-[5px] ml-auto'>
                ST1
              </button>
              <button className='px-[20px] py-[1px] text-popupcolor focus:outline-none border-[2px] border-popupcolor rounded-[5px] ml-auto'>
                ST2
              </button>
              <button className='px-[20px] py-[1px] text-popupcolor focus:outline-none border-[2px] border-popupcolor rounded-[5px] ml-auto'>
                ST3
              </button>
              <button className='px-[20px] py-[1px] text-popupcolor focus:outline-none border-[2px] border-popupcolor rounded-[5px] ml-auto'>
                ST4
              </button>
              <button className='px-[20px] py-[1px] text-popupcolor focus:outline-none border-[2px] border-popupcolor rounded-[5px] ml-auto'>
                ST5
              </button>
              <button
                className="px-[20px] py-[1px] text-popupcolor focus:outline-none border-[2px] border-popupcolor rounded-[5px] ml-auto"
                onClick={togglePopup} // Close the popup only when this button is clicked
              >
                Close
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="w-full text-stone-700"></div>
            <div className="w-full text-stone-700">
              <table className="w-full border-collapse text-popupcolor">
                {/* Table Header */}
                <thead>
                  <tr className='text-center border-[1px]'>
                    <th style={{ width: '150px', border: '1px solid' }} className="border-popupcolor"></th>
                    <th className="border-[1px] border-popupcolor">Type</th>
                    <th className="border-[1px] border-popupcolor">1</th>
                    <th className="border-[1px] border-popupcolor">2</th>
                    <th className="border-[1px] border-popupcolor">3</th>
                    <th className="border-[1px] border-popupcolor">4</th>
                    <th className="border-[1px] border-popupcolor">5</th>
                    <th className="border-[1px] border-popupcolor">6</th>
                    <th className="border-[1px] border-popupcolor">7</th>
                    <th className="border-[1px] border-popupcolor">8</th>
                    <th className="border-[1px] border-popupcolor">9</th>
                    <th className="border-[1px] border-popupcolor">10</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index} className='text-center'>
                      <td style={{ width: '150px', border: '1px solid' }} className="border-popupcolor">
                        {row.firstCol}
                      </td>
                      <td className="border-[1px] border-popupcolor">{row.secondCol}</td>
                      <td className="border-[1px] border-popupcolor">{row.thirdCol}</td>
                      <td className="border-[1px] border-popupcolor">{row.fourthCol}</td>
                      <td className="border-[1px] border-popupcolor">{row.fifthCol}</td>
                      <td className="border-[1px] border-popupcolor">{row.sixthCol}</td>
                      <td className="border-[1px] border-popupcolor">{row.seventhCol}</td>
                      <td className="border-[1px] border-popupcolor">{row.eighthCol}</td>
                      <td className="border-[1px] border-popupcolor">{row.ninthCol}</td>
                      <td className="border-[1px] border-popupcolor">{row.tenthCol}</td>
                      <td className="border-[1px] border-popupcolor">{row.eleventhCol}</td>
                      <td className="border-[1px] border-popupcolor">{row.twelfthCol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RankingPopup;
