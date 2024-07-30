// // src/components/CategoryButton.js
// import React from "react";

// const CategoryButton = ({ label, count, icon, selected }) => {
//   return (
//     <div className="flex flex-col items-center bg-white w-auto px-4 py-4">
//       <span className={` ${selected ? "text-red-700" : "text-black"}`}>
//         {label}
//       </span>
//       <img src={icon} alt={label} className="w-8 h-8 mb-2" />
//       <span className={` ${selected ? "text-red-700" : "text-black"}`}>
//         {count}
//       </span>
//     </div>
//   );
// };

// export default CategoryButton;

// src/components/CategoryButton.js
import React from "react";

const CategoryButton = ({ label, count, icon, selected }) => {
  return (
    <div className="flex flex-col items-center bg-stone-50 w-auto px-4 py-2 ">
      <span
        className={`text-sm ${selected ? "text-red-700 " : "text-gray-700"}`}
      >
        {label}
      </span>
      <img src={icon} alt={label} className="w-10 h-10 my-1" />
      <span
        className={`text-sm ${selected ? "text-red-700 " : "text-gray-700"}`}
      >
        {count}
      </span>
    </div>
  );
};

export default CategoryButton;
