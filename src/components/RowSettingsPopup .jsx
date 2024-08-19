const RowSettingsPopup = ({ togglePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded  border-popupcolor border-8 ">
        <div className="flex  mb-4 text-stone-700">
          <h2 className="text-xl text-popupcolor  ">Options</h2>
          <button
            className="px-2.5 py-1.5 text-base bg-[#C0A74F] text-white focus:outline-none border-0 rounded-[5px] ml-[620px] "
            onClick={togglePopup}
          >
            CLOSE
          </button>
        </div>
        <div className="flex">
          <div className="w-1/4 pr-2  text-stone-700">
            <div className="mb-2 p-1 text-popupcolor border-popupcolor border-2">
              Category Settings
            </div>
            <div className="mb-2  text-popupcolor p-1 border-popupcolor border-2">
              Toolbar Settings
            </div>
            <div className="mb-2 text-popupcolor  p-1 border-popupcolor border-2">
              Row Fields
            </div>
            <div className="mb-2  text-popupcolor p-1 border-popupcolor border-2">
              Row Icon size
            </div>
          </div>
          <div className="w-max px-2 pt-2 border-popupcolor border-2">
            <table className="w-full border-collapse border-popupcolor border-2 text-stone-700">
              <thead className=" border-popupcolor border-2 text-sm text-popupcolor">
                <tr>
                  <th className="border">Row Name</th>
                  <th className="border">Selection</th>
                  <th className="border">Full Display</th>
                  <th className="border">Partial Hide</th>
                  <th className="border">Full Hide</th>
                  <th className="border">Icon Hide</th>
                  <th className="border">Show Dups?</th>
                  <th className="border">Config</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-popupcolor border-2 text-popupcolor">
                  <td className="border  border-popupcolor ">Country</td>
                  <td className="border  border-popupcolor">United States</td>
                  <td className="border  border-popupcolor">
                    <input type="radio" name="countryDisplay" />
                  </td>
                  <td className="border  border-popupcolor">
                    <input type="radio" name="countryDisplay" />
                  </td>
                  <td className="border  border-popupcolor">
                    <input type="radio" name="countryDisplay" />
                  </td>
                  <td className="border  border-popupcolor">
                    <input type="checkbox" />
                  </td>
                  <td className="border  border-popupcolor">
                    <input type="checkbox" />
                  </td>
                  <td className="border  border-popupcolor"></td>
                </tr>
                <tr className=" border-popupcolor border-2 text-popupcolor">
                  <td className="border  border-popupcolor">Time</td>
                  <td className="border  border-popupcolor">All</td>
                  <td className="border  border-popupcolor">
                    <input type="radio" name="timeDisplay" />
                  </td>
                  <td className="border  border-popupcolor">
                    <input type="radio" name="timeDisplay" />
                  </td>
                  <td className="border  border-popupcolor">
                    <input type="radio" name="timeDisplay" />
                  </td>
                  <td className="border  border-popupcolor">
                    <input type="checkbox" />
                  </td>
                  <td className="border  border-popupcolor">
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td className="border  border-popupcolor text-popupcolor">
                    Industry
                  </td>
                  <td className="border  border-popupcolor text-popupcolor">
                    All
                  </td>
                  <td className="border  border-popupcolor">
                    <input type="radio" name="industryDisplay" />
                  </td>
                  <td className="border  border-popupcolor">
                    <input type="radio" name="industryDisplay" />
                  </td>
                  <td className="border  border-popupcolor ">
                    <input type="radio" name="industryDisplay" />
                  </td>
                  <td className="border  border-popupcolor">
                    <input type="checkbox" />
                  </td>
                  <td className="border  border-popupcolor">
                    <input type="checkbox" />
                  </td>
                  <td className="border  border-popupcolor"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowSettingsPopup;
