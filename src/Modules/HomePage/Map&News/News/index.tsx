import React from "react";
import NewsItem from "./NewsItem";
import { listNews } from "./data";

function NewsSection() {
  return (
    <main>
      <div className="title-section">Tin tức</div>
      <div>
        {listNews.map((item) => {
          return (
            <div key={item.id}>
              <NewsItem news={item} />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default NewsSection;
