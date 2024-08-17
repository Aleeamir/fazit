import { useState } from "react";
import SearchBar from "../SearchBar";

const AfterHeaderKeyword = () => {
  const [activePage, setActivePage] = useState(1); // State to track the active page number
  function handlePageClick(pageNumber) {
    setActivePage(pageNumber); // Update the active page number when a page is clicked
  }
  return (
    <div className="border-bordercolor border-b-4 " style={{ height: 18 }}>
      <div className="flex justify-stretch items-center font-bold">
        <div className="flex pl-96">
          <div className=" text-popupcolor   flex space-x-2 pl-16 text-xs">
            <span>Page:</span>
            {[...Array(6)].map((_, i) => (
              <a
                key={i}
                href="#"
                onClick={() => handlePageClick(i + 1)}
                className={`pl-2 hover:underline ${
                  activePage === i + 1 ? "text-black" :""
                }`}
              >
                {i + 1}
              </a>
            ))}
            <span>...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterHeaderKeyword;
