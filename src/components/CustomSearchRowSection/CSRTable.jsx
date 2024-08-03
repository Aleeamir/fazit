import React, { useState } from "react";

const CSRTable = ({}) => {
  const [tableData, setTableData] = useState([
    { row: 1, searchType: "Keyword", value: "Vaccine" },
    { row: 1, searchType: "Keyword", value: "Acquired Immunity" },
    { row: 1, searchType: "Keyword", value: "Vaccine Mandate" },
    { row: 1, searchType: "Keyword", value: "Booster" },
    { row: 1, searchType: "Keyword", value: "Masked Mandate" },
    { row: 1, searchType: "Keyword", value: "FDA" },
    { row: 2, searchType: "Keyword", value: "Florida" },
    { row: 2, searchType: "Keyword", value: "Ron Desantis" },
    { row: 2, searchType: "Keyword", value: "Omicron" },
    { row: 2, searchType: "Keyword", value: "School" },
    { row: 3, searchType: "Keyword", value: "Pfizer" },
    { row: 3, searchType: "Keyword", value: "Children" },
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
              CSR - Add / Edit Rows
            </h2>
            <div className="w-full mx-auto my-5 p-8 border-2 border-yellow-600">
              <table className="w-full border-collapse mb-5">
                <thead>
                  <tr className="text-xs">
                    <th className="text-center text-popupcolor p-1 border border-yellow-600 ">
                      Row
                    </th>
                    <th className="text-center text-popupcolor p-1 border border-yellow-600 ">
                      Search Type
                    </th>
                    <th className="text-center text-popupcolor p-1 border border-yellow-600 ">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td className="border text-xs text-popupcolor p-1 border-yellow-600">
                        <select
                          value={row.row}
                          onChange={(event) =>
                            handleInputChange(event, index, "row")
                          }
                          className="w-full text-xs p-1 border border-yellow-600 rounded"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </td>
                      <td className="border text-xs text-popupcolor p-1 border-yellow-600">
                        <select
                          value={row.searchType}
                          onChange={(event) =>
                            handleInputChange(event, index, "searchType")
                          }
                          className="w-full text-xs text-popupcolor p-1 border border-yellow-600 rounded"
                        >
                          <option value="Keyword">Keyword</option>
                          {/* Add other search types if needed */}
                        </select>
                      </td>
                      <td className="border text-xs text-popupcolor p-1 border-yellow-600">
                        <input
                          type="text"
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
              <button
                className="bg-red-600 text-white ml-80 p-1 rounded"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
            <div className="flex justify-center gap-4 mt-5">
              <button
                className="bg-yellow-600 text-sm text-white p-1 rounded-lg absolute top-4 right-4"
                onClick={togglePopup}
              >
                CLOSE
              </button>
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

export default CSRTable;
