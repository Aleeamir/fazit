import React from "react";

const NewsItem = ({ title, link }) => {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <a href={link} className="text-blue-500 font-bold">
        {title}
      </a>
    </div>
  );
};

export default NewsItem;
