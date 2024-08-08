import React, { useState } from "react";

const QueryTable = () => {
  const [tableData, setTableData] = useState([
    {
      row: 1,
      searchType: "URL Match",
      value: "*Blog* *freenews*; *.net*;*.org*;*.biz*",
    },
    { row: 1, searchType: "Keyword", value: "The fed and jrome Power" },
    { row: 1, searchType: "Keyword", value: "Keyword" },
    { row: 1, searchType: "Keyword", value: "Keyword" },
    { row: 1, searchType: "", value: "" },
    { row: 1, searchType: "", value: "" },
    { row: 2, searchType: "", value: "" },
    { row: 2, searchType: "", value: "" },
    { row: 2, searchType: "", value: "" },
    { row: 2, searchType: "", value: "" },
    { row: 3, searchType: "", value: "" },
    { row: 3, searchType: "", value: "" },
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleInputChange = (event, index, field) => {
    const updatedTableData = [...tableData];
    updatedTableData[index][field] = event.target.value;
    setTableData(updatedTableData);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Submitted data:", tableData);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-auto my-5 p-6 border-4 border-yellow-600 shadow-lg bg-white h-full max-h-screen overflow-auto">
            <h2 className="text-left text-lg mb-5 text-yellow-600">
              Query - Add / Edit Rows
            </h2>

            <div className="w-full mx-auto my-5 p-8 border-2 border-yellow-600">
              <table className="w-full border-collapse mb-5 table-fixed">
                <thead>
                  <tr className="text-xs">
                    <th className="text-center text-popupcolor p-1 border border-yellow-600 w-1/3">
                      Search Type
                    </th>
                    <th className="text-center text-popupcolor p-1 border border-yellow-600 w-1/3">
                      Value
                    </th>
                    <th className="text-center text-popupcolor p-1 border border-yellow-600 w-1/3">
                      Exclude
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td className="border text-xs text-popupcolor p-1 border-yellow-600 w-1/3">
                        <select
                          value={row.searchType}
                          onChange={(event) =>
                            handleInputChange(event, index, "searchType")
                          }
                          className="w-full text-xs text-popupcolor p-1 border border-yellow-600 rounded"
                        >
                          <option value="Keyword">{row.searchType}</option>
                        </select>
                      </td>
                      <td className="border text-xs text-popupcolor p-1 border-yellow-600 w-1/3">
                        <input
                          type="text"
                          value={row.value}
                          onChange={(event) =>
                            handleInputChange(event, index, "value")
                          }
                          className="w-full text-xs p-1 border border-yellow-600 rounded"
                        />
                      </td>
                      <td className="border text-xs text-popupcolor p-1 border-yellow-600 w-1/3">
                        <input
                          type="checkbox"
                          value={row.value}
                          onChange={(event) =>
                            handleInputChange(event, index, "value")
                          }
                          className="w-full text-xs p-1 border border-yellow-600 rounded"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center gap-4 mt-5">
              <button
                className="bg-yellow-600 text-sm text-white p-1 rounded-lg absolute top-4 right-4"
                onClick={togglePopup}
              >
                CLOSE
              </button>
              <div className=" justify-between items-center text-xs absolute top-8 right-92 text-popupcolor p-1 w-[20%]">
                <select className="w-full text-xs p-1 border-2 border-yellow-600 ">
                  <option value="Keyword">Filter 1</option>
                </select>
              </div>
              <button className="text-yellow-600 p-1 absolute top-12 right-4">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QueryTable;
