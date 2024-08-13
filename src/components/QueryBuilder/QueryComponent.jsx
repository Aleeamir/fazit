import React, { useState } from "react";

const QueryComponent = () => {
  const [queries, setQueries] = useState([
    {
      id: 1,
      queryType: "Quick Filter",
      opt: "...",
      reference: "*blog*;freenews*;*.ne...",
      count: 215,
      status: "RUN",
      result: "View",
    },
    {
      id: 2,
      queryType: "Quick Filter",
      opt: "...",
      reference: '*.tv; *.us; "chat".com',
      count: 154,
      status: "RUN",
      result: "Showing",
    },
    {
      id: 3,
      queryType: "",
      opt: "...",
      reference: "",
      count: "",
      status: "RUN",
      result: "",
    },
  ]);

  const handleRunClick = (id) => {
    console.log(`Run clicked for ID: ${id}`);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#b49f57",
        fontSize: "14px",
        paddingLeft: "42px",
      }}
    >
      {/* Header Row */}
      <div>
        <ul
          className="flex items-center"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "10px",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          <li style={{ width: "150px", textAlign: "center" }}>Query Type</li>
          <li style={{ width: "60px", textAlign: "center" }}>Opt</li>
          <li style={{ width: "240px", textAlign: "center" }}>Reference</li>
          <li style={{ width: "60px", textAlign: "center" }}>Count</li>
          <li style={{ width: "120px", textAlign: "center" }}>Results</li>
        </ul>
      </div>

      {/* Rows */}
      {queries.map((query) => (
        <div
          key={query.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* Query Type Dropdown */}
          <select
            value={query.queryType}
            style={{
              marginRight: "10px",
              width: "140px",
              height: "25px",
              borderRadius: "5px",
              border: "1px solid #b49f57",
            }}
          >
            <option value="Quick Filter">Quick Filter</option>
            <option value=""></option>
          </select>

          {/* Opt Dropdown */}
          <select
            value={query.opt}
            style={{
              marginRight: "10px",
              width: "50px",
              height: "25px",
              borderRadius: "5px",
              border: "1px solid #b49f57",
            }}
          >
            <option value="...">...</option>
          </select>

          {/* Reference Input */}
          <input
            type="text"
            value={query.reference}
            readOnly
            style={{
              marginRight: "10px",
              width: "250px",
              height: "25px",
              borderRadius: "5px",
              border: "1px solid #b49f57",
              paddingLeft: "5px",
            }}
          />

          {/* Count Display */}
          <div
            style={{
              marginRight: "10px",
              width: "60px",
              height: "25px",
              lineHeight: "25px",
              textAlign: "center",
              borderRadius: "5px",
              border: "1px solid #b49f57",
              backgroundColor: "#f2f2f2",
            }}
          >
            {query.count}
          </div>

          {/* Run Button */}
          <button
            onClick={() => handleRunClick(query.id)}
            className="px-2 bg-[#ba3030] text-white rounded-r-lg"
          >
            {query.status}
          </button>

          {/* Result Button */}
          <button
            style={{
              color: query.result === "Showing" ? "green" : "#b49f57",
              border:
                query.result === "Showing"
                  ? "1px solid #b49f57"
                  : "1px solid #b49f57",

              padding: "5px 10px",
              height: "30px",
              marginLeft: "12px",
              cursor: "pointer",
            }}
          >
            {query.result}
          </button>
        </div>
      ))}
    </div>
  );
};

export default QueryComponent;
