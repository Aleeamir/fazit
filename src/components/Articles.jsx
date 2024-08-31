import React, { useEffect, useState } from "react";
import { OpenAI } from "openai";
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

const Articles = ({ searchQuery, isSearching, setIsSearching }) => {
  const [isLoading, setIsLoading] = useState(0); // 0 = not loading, 1 = loading, 2 = error
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const openai = new OpenAI({
      apiKey:import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    async function fetchArticles() {
      try {
        setIsLoading(1); // Set loading state
        const completion = await openai.chat.completions.create({
          messages: [
            {
              role: "system",
              content: `Generate an array of 10 JavaScript objects representing articles on the title ${searchQuery}. If the title is not meaningful, return just a number 0. Each object should have the following structure: title (a brief headline of the article), url (a valid URL to the article that is accessible), description (a short summary of the article), imageUrl (a valid URL to the article's image that is accessible), and category (the category the article belongs to, such as 'Sports', 'Technology', etc.). Ensure each object has a unique title and description. Provide just the array in your response, without any additional text.`,
            },
          ],
          model: "gpt-4",
        });

        // Parse the response content
        const responseContent = completion.choices[0].message.content.trim();

        if (responseContent === "0") {
          // Handle the case where the response is '0'
          setArticles([]);
          setIsLoading(2); // Set error state for no matching entries
        } else {
          try {
            const jsonArray = JSON.parse(responseContent);
            setArticles(jsonArray);
            setIsLoading(0); // Data fetched successfully
          } catch (error) {
            setIsLoading(2); // Error parsing JSON
            console.error("Error parsing JSON:", error);
          }
        }
      } catch (error) {
        setIsLoading(2); // Error fetching data
        setIsSearching(false)
        console.error("Error fetching completion:", error);
      } finally {
        setIsSearching(false); // Reset search state regardless of outcome
      }
    }

    if (searchQuery.trim()) {
      fetchArticles();
    } else {
      setArticles([]); // Clear articles if search query is empty
    }
  }, [searchQuery]);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1" style={{ marginBottom: "84px" }}>
      {isLoading === 1 ? (
        <h1>Loading Articles...</h1>
      ) : isLoading === 2 ? (
        <h1>No Matching Entries Found</h1>
      ) : articles.length === 0 ? (
        ""
      ) : (
        articles.length > 0 &&
        articles.map((article, index) => (
          <div key={index} className="bg-white overflow-hidden flex flex-col" style={{ marginRight: "10px" }}>
            <div className="flex justify-between items-center">
              <h2 className="text-black whitespace-nowrap overflow-hidden text-ellipsis text-[24px]">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ fontFamily: "Arial", fontWeight: "300" }}
                >
                  {article.title.length > 10 ? article.title.substring(0, 46) + "..." : article.title}
                </a>
              </h2>
            </div>
            <div className="flex flex-row">
              <div className="flex-initial w-[60%] flex-col">
                <a
                  href={article.url}
                  className="block text-[14px] text-categrycolor leading-normal"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontFamily: "Arial",
                    width: "100%", // Ensure the link takes the full width
                  }}
                >
                  {article.url.length > 90 ? article.url.substring(0, 43) + "..." : article.url}
                </a>
                <p
                  className="text-[12px] font-sans text-[#958e77] tracking-tight"
                  style={{
                    fontFamily: "Arial",
                    color: "#695d38",
                    lineHeight: "16px",
                  }}
                >
                  {article.description.length > 300 ? article.description.substring(0, 250) + "..." : article.description}
                </p>
                <p className="text-[12px] italic" style={{ color: "#263b6f", fontFamily: "Arial" }}>
                  {article.category}
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={images[index]}
                  alt={article.title}
                  className="object-cover"
                  style={{ width: "174px", height: "115px" }}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Articles;
