import { React, useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./fazitButton.css";
import "../css/DemoSearch2.css";
const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (isSearching) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isSearching]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setIsSearching(true);
  };

  const handleCancel = () => {
    setIsSearching(false);
    setElapsedTime(0);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header
      className="flex justify-between items-center  bg-white  py-[58px] "
      style={{ height: "126px" }}
    >
      <div
        className="flex items-center"
        style={{ marginTop: "10px", marginBottom: "19px", marginLeft: "70px" }}
      >
        <img
          src={logo}
          alt="Fazit Logo"
          style={{ width: "191px", height: "104px" }}
        />
      </div>

      <div
        className="flex items-center space-x-4 pr-[10px] rounded-3xl "
        style={{ marginTop: "58px", marginBottom: "30px", marginRight: "40px" }}
      >
        <span className="text-categrycolor text-[14px]">SEARCH 1</span>
        <div className="relative rounded-3xl" style={{ marginLeft: "10px" }}>
          <div className="flex items-center w-full relative">
            <div className="relative">
              <select
                className="bg-gray-300 appearance-none text-[11px] border-[1px] border-[#98999c]"
                style={{
                  color: "#333",
                  borderRadius: "50px 0px 0px 50px",
                  padding: "2px 10px 1px 10px",
                  background:
                    "linear-gradient(to bottom, #ffffff, #ececec, #d1d1d1, #b8b8b8)",
                  cursor: "pointer",
                  width: "47px",
                  height: "26px",
                  fontFamily: "arial",
                  borderRightWidth: "1px",
                }}
              >
                <option
                  value="all"
                  style={{ color: "#333", backgroundColor: "#706e6e" }}
                >
                  All
                </option>
                <option
                  value="all"
                  style={{ color: "#333", backgroundColor: "#706e6e" }}
                >
                  All
                </option>
              </select>
              <span className="absolute right-2 transform -translate-y-1/2 text-[#7c7c7c]  pointer-events-none text-[11px] top-[50%]">
                ▼
              </span>
            </div>
            <div className="relative flex-grow">
              <div className="flex items-center">
                {isDropdownOpen ? (
                  <textarea
                    className={`border-[1px] border-[#98999c] bg-gray-200 placeholder:text-[#0d1444] px-3 resize-none overflow-hidden`}
                    style={{
                      width: "518px",
                      height: "78px",
                      maxHeight: "78px",
                      paddingRight: isSearching ? "40px" : "30px",
                      transition: "height 0.3s ease",
                      position: "relative",
                      zIndex: 2, // Keep it above the input field
                      marginTop: "50px",
                      borderBottomLeftRadius: "15px", // Round bottom-left corner
                      borderBottomRightRadius: "15px", // Round bottom-right corner
                    }}
                    value={inputValue}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="San Francisco 49ers"
                  />
                ) : (
                  <input
                    type="text"
                    className="border-[1px] border-[#98999c] bg-gray-200 placeholder:text-[#0d1444] px-3"
                    style={{
                      width: "518px",
                      height: "26px",
                      paddingRight: isSearching ? "40px" : "30px",
                    }}
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="San Francisco 49ers"
                  />
                )}
                <button
                  className="toggle-dropdown-button absolute right-3"
                  style={{
                    backgroundColor: "transparent",
                    color: "#333",
                    height: "26px",
                    fontSize: "14px",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "arial",
                    marginRight: "20px",
                    zIndex: 3,
                  }}
                  onClick={toggleDropdown}
                >
                  ▼
                </button>
              </div>
              {isSearching && (
                <div className="absolute right-[10px] top-[5px] loader"></div>
              )}
            </div>
            <button
              className="fazit-button"
              style={{
                backgroundColor: "#e94e3c", // Color similar to the "FAZIT" button
                color: "#fff",
                padding: "0 15px",
                height: "26px",
                fontSize: "12px",
                borderRadius: "0px 50px 50px 0px",
                border: "none",
                cursor: "pointer",
                fontFamily: "arial",
              }}
              onClick={isSearching ? handleCancel : handleSearch}
            >
              {isSearching ? "Cancel" : "FAZIT"}
            </button>
          </div>
          {isSearching && (
            <span className="absolute right-0 top-[-20px] text-[12px] text-[#7c7c7c] font-arial">
              Elapsed time: {elapsedTime.toString().padStart(2, "0")}:00
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
