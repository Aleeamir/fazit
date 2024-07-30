import React from "react";
import NewsItem from "./NewsItem";

const Content = () => {
  return (
    <main className="flex-1 p-4">
      <div className="grid grid-cols-2 gap-4">
        <NewsItem title="49ers Christian McCaffrey showing MVP form" link="#" />
        <NewsItem title="Studs From Cards Week 4 Loss vs 49ers" link="#" />
        {/* Add more NewsItem components */}
      </div>
    </main>
  );
};

export default Content;
