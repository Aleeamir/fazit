import React, { useState } from "react";

const MatrixTable = () => {
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
              Matrix - Add / Edit Rows
            </h2>

            <div className="w-full mx-auto my-5 p-6 border border-yellow-600">
              <table className="w-full border-collapse mb-5 table-fixed">
                <thead>
                  <tr className="text-xs">
                    <th className="text-center text-yellow-600 p-1 border border-yellow-600 w-1/3">
                      Col / Row
                    </th>
                    <th className="text-center text-yellow-600 p-1 border border-yellow-600 w-1/3">
                      Search Type
                    </th>
                    <th className="text-center text-yellow-600 p-1 border border-yellow-600 w-1/3">
                      Value
                    </th>
                    <th className="text-center text-yellow-600 p-1 border border-yellow-600 w-1/3">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td className="border text-xs text-popupcolor p-2 pl-2 pr-2 border-yellow-600 w-1/3">
                        <select
                          value={row.row}
                          onChange={(event) =>
                            handleInputChange(event, index, "row")
                          }
                          className="w-full text-xs p-1 border border-yellow-600"
                        >
                          <option value={1}></option>
                          <option value={2}></option>
                          <option value={3}></option>
                        </select>
                      </td>
                      <td className="border text-xs text-popupcolor p-1 pl-2 pr-2 border-yellow-600 w-1/3">
                        <select
                          value={row.searchType}
                          onChange={(event) =>
                            handleInputChange(event, index, "searchType")
                          }
                          className="w-full text-xs text-popupcolor p-1 border border-yellow-600"
                        >
                          <option value="Keyword"></option>
                        </select>
                      </td>
                      <td className="border text-xs text-popupcolor p-1 pl-2 pr-2 border-yellow-600 w-1/3">
                        <input
                          type="text"
                          className="w-full text-xs p-1 border border-gray-300"
                        />
                      </td>
                      <td className="border text-xs text-popupcolor p-1 pl-2 pr-2 border-yellow-600 w-1/3">
                        <select
                          value={row.searchType}
                          onChange={(event) =>
                            handleInputChange(event, index, "searchType")
                          }
                          className="w-full text-xs text-popupcolor p-1 border border-yellow-600"
                        >
                          <option value="Keyword"></option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center gap-4 mt-5">
              <button
                className="bg-yellow-600 text-sm text-white p-1 pl-3 pr-3 rounded-lg absolute top-3 right-4"
                onClick={togglePopup}
              >
                CLOSE
              </button>
              <div className=" justify-between items-center text-xs absolute top-7 right-92 text-yellow-600 p-1 w-[20%]">
                <select className="w-full text-xs p-1 border border-yellow-600">
                  <option value="Keyword">Matrix 1</option>
                  <option value="Keyword">Matrix 2</option>
                </select>
              </div>
              <button className="text-yellow-600 p-1 absolute top-10 right-4">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatrixTable;
