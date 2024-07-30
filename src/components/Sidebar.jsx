import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 w-1/4 p-4">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Country</h2>
        {/* Add country buttons */}
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Data</h2>
        {/* Add data buttons */}
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold">Industry</h2>
        {/* Add industry buttons */}
      </div>
    </aside>
  );
};

export default Sidebar;
