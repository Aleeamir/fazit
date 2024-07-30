import React from "react";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
import img4 from "../assets/img-4.png";
import img5 from "../assets/img-5.png";
import img6 from "../assets/img-6.png";
import img7 from "../assets/img-7.png";
import img8 from "../assets/img-8.png";
import img9 from "../assets/img-9.png";
import img10 from "../assets/img-10.png";
const articles = [
  {
    title: "49ers Christian McCaffrey showing MVP form",
    url: "https://www.mercurynews.com/nfl/bach-brandon-aiyuk-studs-and-duds-from-cards-week-4-loss-vs-49ers",
    description:
      "SANTA CLARA, Calif. -- The NFL's Most Valuable Player award has been given to a quarterback for each of the past 10 seasons...",
    imageUrl: img1,
  },
  {
    title: "Studs From Cards Week 4 Loss vs 49ers",
    url: "https://www.mercurynews.com/nfl/bach-brandon-aiyuk-studs-and-duds-from-cards-week-4-loss-vs-49ers",
    description:
      "SANTA CLARA, Calif. -- The NFL's Most Valuable Player award has been given to a quarterback for each of the past 10 seasons...",
    imageUrl: img2,
  },
  {
    title: "49ers Christian McCaffrey showing MVP form",
    url: "https://www.mercurynews.com/nfl/bach-brandon-aiyuk-studs-and-duds-from-cards-week-4-loss-vs-49ers",
    description:
      "SANTA CLARA, Calif. -- The NFL's Most Valuable Player award has been given to a quarterback for each of the past 10 seasons...",
    imageUrl: img3,
  },
  {
    title: "Studs From Cards Week 4 Loss vs 49ers",
    url: "https://www.mercurynews.com/nfl/bach-brandon-aiyuk-studs-and-duds-from-cards-week-4-loss-vs-49ers",
    description:
      "SANTA CLARA, Calif. -- The NFL's Most Valuable Player award has been given to a quarterback for each of the past 10 seasons...",
    imageUrl: img4,
  },
  {
    title: "49ers Christian McCaffrey showing MVP form",
    url: "https://www.mercurynews.com/nfl/bach-brandon-aiyuk-studs-and-duds-from-cards-week-4-loss-vs-49ers",
    description:
      "SANTA CLARA, Calif. -- The NFL's Most Valuable Player award has been given to a quarterback for each of the past 10 seasons...",
    imageUrl: img5,
  },
  {
    title: "Studs From Cards Week 4 Loss vs 49ers",
    url: "https://www.mercurynews.com/nfl/bach-brandon-aiyuk-studs-and-duds-from-cards-week-4-loss-vs-49ers",
    description:
      "SANTA CLARA, Calif. -- The NFL's Most Valuable Player award has been given to a quarterback for each of the past 10 seasons...",
    imageUrl: img6,
  },
  {
    title: "Studs From Cards Week 4 Loss vs 49ers",
    url: "https://www.mercurynews.com/nfl/bach-brandon-aiyuk-studs-and-duds-from-cards-week-4-loss-vs-49ers",
    description:
      "SANTA CLARA, Calif. -- The NFL's Most Valuable Player award has been given to a quarterback for each of the past 10 seasons...",
    imageUrl: img7,
  },
  {
    title: "Studs From Cards Week 4 Loss vs 49ers",
    url: "https://www.mercurynews.com/nfl/bach-brandon-aiyuk-studs-and-duds-from-cards-week-4-loss-vs-49ers",
    description:
      "SANTA CLARA, Calif. -- The NFL's Most Valuable Player award has been given to a quarterback for each of the past 10 seasons...",
    imageUrl: img8,
  },
  {
    title: "Studs From Cards Week 4 Loss vs 49ers",
    url: "https://www.mercurynews.com/nfl/bach-brandon-aiyuk-studs-and-duds-from-cards-week-4-loss-vs-49ers",
    description:
      "SANTA CLARA, Calif. -- The NFL's Most Valuable Player award has been given to a quarterback for each of the past 10 seasons...",
    imageUrl: img9,
  },
  {
    title: "Studs From Cards Week 4 Loss vs 49ers",
    url: "https://www.mercurynews.com/nfl/bach-brandon-aiyuk-studs-and-duds-from-cards-week-4-loss-vs-49ers",
    description:
      "SANTA CLARA, Calif. -- The NFL's Most Valuable Player award has been given to a quarterback for each of the past 10 seasons... The NFL's Most Valuable Player award has been given to a quarterback for each of the past 10 seasons...",
    imageUrl: img10,
  },
  // Add more articles as needed
];

const Articles = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white overflow-hidden flex flex-col"
          style={{ height: "20vh", width: "100%" }}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {article.title}
              </a>
            </h2>
          </div>
          <div className="flex flex-row  ">
            <div>
              <div className=" flex  ">
                <a
                  href={article.url}
                  className="text-categrycolor overflow-hidden text-wrap tracking-tight text-xs leading-normal "
                >
                  {article.url}
                </a>
              </div>
              <div className="flex flex-row">
                <p className="text-gray-600 text-sm font-sans tracking-tight">
                  {article.description}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-26 h-24 object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
