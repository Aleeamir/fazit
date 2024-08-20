import React, { useState } from 'react';

const CategoryPopup = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const countries = [
    { name: 'United States', count: 1172 }, { name: 'India', count: 46 },
    { name: 'UK', count: 38 }, { name: 'Israel', count: 30 },
    { name: 'Singapore', count: 28 }, { name: 'Australia', count: 28 },
    { name: 'Canada', count: 24 }, { name: 'Ukraine', count: 18 },
    { name: 'Lebanon', count: 14 }, { name: 'Russian Federation', count: 10 },
    { name: 'Sri Lanka', count: 10 }, { name: 'Mexico', count: 10 },
    { name: 'Japan', count: 10 }, { name: 'Myanmar', count: 10 },
    { name: 'Thailand', count: 8 }, { name: 'Qatar', count: 8 },
    { name: 'Czech Republic', count: 6 }, { name: 'Dominican Republic', count: 6 },
    { name: 'Bangladesh', count: 6 }, { name: 'Samoa', count: 6 },
    { name: 'Jordan', count: 6 }, { name: 'Germany', count: 6 },
    { name: 'Indonesia', count: 6 }, { name: 'United Arab Emirates', count: 6 }
    // More countries
  ];

  const industries = [
    { name: 'Pages', count: 173620 }, 
    { name: 'Sport', count: 123472 }, 
    { name: 'New', count: 173620 }, 
    { name: 'Business', count: 123472 },
    { name: 'Celebration', count: 173620 }, 
    { name: 'TV&movies', count: 123472 }, 
  ];

  const handleCellClick = (rowIndex, columnIndex) => {
    setSelectedRow(rowIndex);
    setSelectedColumn(columnIndex);
  };

  const renderColumn = (data, start, end, columnIndex, hasBorder) => (
    <div style={{ flex: 1, padding: '0 10px', borderRight: hasBorder ? '2px solid #A68036' : 'none' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {data.slice(start, end).map((item, rowIndex) => (
            <tr key={rowIndex} onClick={() => handleCellClick(rowIndex, columnIndex)}>
              <td
                style={{
                  padding: '5px',
                  color: selectedRow === rowIndex && selectedColumn === columnIndex ? 'red' : '#172d5f',
                  cursor: 'pointer',
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  padding: '5px',
                  textAlign: 'right',
                  color: selectedRow === rowIndex && selectedColumn === columnIndex ? 'red' : '#172d5f',
                }}
              >
                {item.count}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const getButtonStyle = (page) => ({
    padding: '5px 5px',
    margin: '0 5px',
    border: 'none',
    backgroundColor: 'transparent',
    color: currentPage === page ? '#172d5f' : '#A68036',
    cursor: 'pointer',
    fontSize: '14px',
    fontFamily: 'Arial',
  });

  const tabStyle = (tabName) => ({
    padding: '2px 10px',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: activeTab === tabName ? '#172d5f' : '#A68036',
    marginRight: tabName === 'Countries' ? '5px' : '0',
    border: `2px solid ${activeTab === tabName ? '#172d5f' : '#A68036'}`,
    borderRadius: '4px',
  });

  return (
    <>
      <div style={{
        position: 'absolute',
        marginLeft: -5,
        top: '230px', // popup vertically
        backgroundColor: 'white',
        border: '2px solid #A68036',
        zIndex: 10,
        width: '90%', // Adjust the width as needed for responsiveness
        maxWidth: '48vw', // Max width to ensure it doesn't go too wide
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap:'wrap', padding: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              onClick={() => setActiveTab('Countries')}
              style={tabStyle('Countries')}
            >
              Countries
            </div>
            <div
              onClick={() => setActiveTab('Industries')}
              style={tabStyle('Industries')}
            >
              Industries
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#A68036',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '5px 15px',
              borderRadius: '10px',
              fontSize: '14px'
            }}
          >
            CLOSE
          </button>
        </div>
        <div style={{ borderTop: '2px solid #A68036', paddingTop: '0px', display: 'flex', flexGrow: 1 }}>
          <div style={{ display: 'flex', flex: 1, overflowX: 'auto' }}>
            {activeTab === 'Countries' ? (
              <>
                {renderColumn(countries, 0, 8, 0, true)}
                {renderColumn(countries, 8, 16, 1, true)}
                {renderColumn(countries, 16, 24, 2, true)}
              </>
            ) : (
              <>
                {renderColumn(industries, 0, 2, 0, true)}
                {renderColumn(industries, 2, 4, 1, true)}
                {renderColumn(industries, 4, 6, 2, true)}
              </>
            )}
            <div style={{ flex: 1, padding: '10px', borderLeft: '2px solid #A68036', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', color: '#A68036' }}>
                Page:
                <br />
                <button
                  onClick={() => setCurrentPage(1)}
                  style={getButtonStyle(1)}
                >
                  1
                </button>
                <button
                  onClick={() => setCurrentPage(2)}
                  style={getButtonStyle(2)}
                >
                  2
                </button>
                <button
                  onClick={() => setCurrentPage(3)}
                  style={getButtonStyle(3)}
                >
                  3
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: 'absolute',
        top: 220,
        right: 10,
        bottom: 10,
        width: '49%', 
        height: '56%', 
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
        zIndex: 5
      }} />
    </>
  );
};

export default CategoryPopup;
