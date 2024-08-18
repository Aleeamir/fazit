import React, { useState } from 'react';
import CategoryPopup from './CategoryPopup';
import SearchBar from "../components/SearchBar";  // Import the popup component

const Table = () => {
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('/ All (586)');
  const [selectedTime, setSelectedTime] = useState('Last 24 Hrs');
  const [selectedAlpha, setSelectedAlpha] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // State to manage popup visibility

  const cssclass = 'py-1 px-1 border-2';
  const textStyle = { fontSize: '14px', fontFamily: 'Arial', padding: '5px'  };

  const websites = [
    // Sample data
    // ... (same as your data)
    {
      website: "washingtonpost.com",
      overallRank: 1,
      popularityRank: 3,
      relRank: 1,
      pages: 87,
      videos: 0,
      
    },
    {
      website: "breitbart.com",
      overallRank: 2,
      popularityRank: 3,
      relRank: 2,
      pages: 1054,
      //images: 1035,
      videos: 0,
      
    },
    {
      website: "mysanantonio.com",
      overallRank: 3,
      popularityRank: 2,
      relRank: 1,
      pages: 759,
      //images: 641,
      videos: 0,
      
    },
    {
      website: "salon.com",
      overallRank: 1,
      popularityRank: 3,
      relRank: 1,
      pages: 87,
      videos: 0,
      
    },
    {
      website: "foxnews.com",
      overallRank: 1,
      popularityRank: 3,
      relRank: 1,
      pages: 87,
      videos: 0,
      
    },
    {
      website: "businessinsider.com",
      overallRank: 1,
      popularityRank: 3,
      relRank: 1,
      pages: 87,
      videos: 0,
      
    },
    {
      website: "theepochtimes.com",
      overallRank: 1,
      popularityRank: 3,
      relRank: 1,
      pages: 87,
      videos: 0,
      
    },
    {
      website: "time.com",
      overallRank: 1,
      popularityRank: 3,
      relRank: 1,
      pages: 87,
      videos: 0,
      
      
    },
    {
      website: "dailycaller.com",
      overallRank: 1,
      popularityRank: 3,
      relRank: 1,
      pages: 87,
      videos: 0,
      
    },
    {
      website: "latimes.com",
      overallRank: 1,
      popularityRank: 3,
      relRank: 1,
      pages: 87,
      videos: 0,
      
      
    },
 

  ];

  const itemsPerPage = 19;
  const totalPages = 10;

  const sortedWebsites = React.useMemo(() => {
    let sortableWebsites = [...websites];
    if (sortConfig !== null) {
      sortableWebsites.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableWebsites.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [websites, sortConfig, currentPage]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleCategoryClick = () => {
    setIsPopupOpen(true);  // Show the popup when category is clicked
  };

  const handleTimeClick = () => {
    setSelectedTime(selectedTime === 'Last 24 Hrs' ? 'All' : 'Last 24 Hrs');
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  return (
    <div className="overflow-x-auto ">
      <table
        className="min-w-full border-2   rounded-lg"
        style={{
          borderColor: '#e8e9e9',
          borderRadius: '12px 12px 12px 12px',
          borderCollapse: 'separate',
          borderSpacing: '0px',
          marginTop: '15px',
        }}
      >
        <thead style={{ backgroundColor: '#eff1ef' }}> 
          <tr>
            <td colSpan="6" style={{ backgroundColor: '#eff1ef', padding: '5px'  }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button style={{ backgroundColor: 'transparent', border: 'none', color: '#A68036', cursor: 'pointer', fontSize: '14px', fontFamily: 'Arial', marginLeft: '10px' }}>
                    Count: 249
                  </button>
                  <div style={{ display: 'flex', alignItems: 'center', marginLeft: '360px'  }}>
                    <span style={{ fontSize: '14px', fontFamily: 'Arial', color: '#A68036', marginRight: '5px' }}>
                      Pages:
                    </span>
                    <div style={{ display: 'flex', fontSize: '14px', fontFamily: 'Arial' }}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageClick(page)}
                          style={{
                            margin: '0 5px',
                            padding: '0',
                            backgroundColor: 'transparent',
                            color: currentPage === page ? '#77abed' : '#A68036',
                            border: 'none',
                            cursor: 'pointer',
                            textDecoration: currentPage === page ? 'none' : 'none',
                          }}
                        >
                          {page}
                        </button>
                        
                      ))}
                    </div>
                    <button style={{ backgroundColor: 'transparent', border: 'none', color: '#A68036', cursor: 'pointer', fontSize: '14px', fontFamily: 'Arial', marginRight: '10px' }}>
                    ...  18
                  </button>
                  </div>
                </div>
                {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '10px', color: '#A68036' }}>
                    Category:
                  </span>
                  <a href="#" onClick={handleCategoryClick} style={{ color: '#172d5f', marginRight: '20px' }}>
                    {selectedCategory}
                  </a>
                  <span style={{ marginRight: '10px', color: '#A68036' }}>
                    Time:
                  </span>
                  <a href="#" onClick={handleTimeClick} style={{ color: '#172d5f' }}>
                    {selectedTime}
                  </a>
                </div> */}
              </div>
            </td>
          </tr>
          <tr className="border-2">
            <th
              className={`${cssclass} w-64 `} 
              style={{ ...textStyle, color: '#A68036', textAlign: 'center',fontFamily:'Arial',fontSize:'14px' }} 
              onClick={() => requestSort('website')}
            >
              
              WEBSITE
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: '#77abed', textAlign: 'center', cursor: 'pointer'}}
              onClick={() => requestSort('overallRank')}
            >
              OVERALL RANK
               <span className="text-[12px]" style={{ color: '#77abed' }}> ▼</span>
               
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: '#A68036', textAlign: 'center' }}
              onClick={() => requestSort('popularityRank')}
              
            >
              POPULARITY RANK
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: '#A68036', textAlign: 'center' }}
              onClick={() => requestSort('relRank')}
            >
              RELEVANCE RANK
            </th>
            <th
              className={cssclass}
              style={{ ...textStyle, color: '#A68036', textAlign: 'center' }}
              onClick={() => requestSort('pages')}
            >
              PAGES
            </th>
            <th className={cssclass} style={{ ...textStyle, color: '#A68036', textAlign: 'center' }}>
              VIDEOS
            </th>
          </tr>
        </thead>
        <tbody className="border-2">
          {sortedWebsites.map((website, index) => (
            <tr
              key={index}
              className="border-2"
              onClick={() => handleRowClick(index)}
              style={{
                color: selectedRow === index ? '#77abed' : '#A68036',
                cursor: 'pointer',
                backgroundColor: index % 2 === 0 ? 'transparent' : '#f0f0f0', // Alternating colors
              }}
            >
              <td className={`${cssclass} w-64`} style={{ ...textStyle, textAlign: 'left' }}>
                {website.website}
              </td>
              <td className={cssclass} style={{ ...textStyle, textAlign: 'center' }}>
                {website.overallRank}
              </td>
              <td className={cssclass} style={{ ...textStyle, textAlign: 'center' }}>
                {website.popularityRank}
              </td>
              <td className={cssclass} style={{ ...textStyle, textAlign: 'center' }}>
                {website.relRank}
              </td>
              <td className={cssclass} style={{ ...textStyle, textAlign: 'center' }}>
                {website.pages}
              </td>
              <td className={cssclass} style={{ ...textStyle, textAlign: 'center' }}>
                {website.videos}
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>

      {isPopupOpen && <CategoryPopup onClose={() => setIsPopupOpen(false)} />}  {/* Render popup conditionally */}
      <div className="mb-4 rounded-lg  " style={{ backgroundColor: '#f5f5f5', display: 'inline-block',width:'100%', minHeight: '100px',marginTop: '20px'}}>
      <h2
        className="text-sm text-categrycolor bg-gray-100 mb-2 px-4 py-1 "
        style={{ backgroundColor: '#e8e9e9', borderRadius: '12px 12px 0 0', borderTopRightRadius: '12px'}}
      >
       SEARCH 2
      </h2>
      <div className="flex space-x-1 overflow-x-auto items-center pl-[40px]" style={{ width: 'auto'}}>
        
      <SearchBar />
      </div>
    </div>
    </div>
    
  );
  
};

export default Table;
