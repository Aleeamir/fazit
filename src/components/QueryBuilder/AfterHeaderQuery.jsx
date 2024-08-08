import React, { useState } from "react";
import QueryTable from "./QueryTable";

const AfterHeaderQuery = () => {
  const [isMatrixPopup, setIsMatrixPopup] = useState(false);

  function HandleCtrPopup() {
    setIsMatrixPopup(!isMatrixPopup);
  }
  return (
    <div className="border-bordercolor border-b-4 " style={{ height: 18 }}>
      <div className="flex justify-stretch items-center font-bold">
        <div className="flex pl-96">
          <div className=" text-popupcolor   flex space-x-2 pl-16 text-xs">
            <span>Page:</span>
            {[...Array(6)].map((_, i) => (
              <a key={i} href="#" className="hover:underline pl-2">
                {i + 1}
              </a>
            ))}
            <span>...</span>
          </div>
          <div className="flex space-x-4 pl-[600px] text-xs">
            <div className="group relative text-xs">
              <button className="text-popupcolor  border-none">Add</button>
              <span>/</span>
              <button
                className="text-popupcolor  border-none"
                onClick={HandleCtrPopup}
              >
                Edit Row
              </button>
            </div>

            <div className="group text-xs">
              <button className="text-popupcolor  border-none">Reset</button>
            </div>
          </div>
        </div>
      </div>
      {isMatrixPopup && <QueryTable />}
    </div>
  );
};

export default AfterHeaderQuery;
